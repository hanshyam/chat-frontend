import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';

const backendUrl = "http://localhost:5000";

// Set default base URL for axios
axios.defaults.baseURL = `${backendUrl}/api`;

// Create context
export const authContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);


    // ✅ Check if user is authenticated
    const checkAuth = async () => {
        try {
            const response = await axios.get("/auth/check");
            const data = response.data;
            if (data.success) {
                setAuthUser(data.userData);
                connectSocket(data.userData);
            }
        } catch (error) {
            console.error("Auth check failed:", error.message);
        }
    };

    // ✅ Login function
    const login = async (state, credentials) => {
        try {
            const { data } = await axios.post(`/auth/${state}`, credentials);
            if (data.success) {

                setAuthUser(data.userData);
                connectSocket(data.userData);
                localStorage.setItem("token", data.token); // Store in localStorage
                setToken(data.token); // ✅ UPDATE token state
                axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message || "Login failed");
        }
    };


    // ✅ Logout function
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["Authorization"] = null;
        if (socket) socket.disconnect();
        toast.success("Logged out successfully");
    };


    // ✅ Update profile
    const updateProfile = async (body) => {
        try {
            const { data } = await axios.put("/auth/updateProfile", body);
            if (data.success) {
                setAuthUser(data.userData); 
                toast.success("Profile updated successfully");
            }
        } catch (error) {
            toast.error("Profile update failed");
        }
    };


    // ✅ Connect socket
    const connectSocket = (userData) => {
        if (!userData || socket?.connected) return;

        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id,
            },
        });

        newSocket.on("getOnlineUsers", (userIds) => {
            setOnlineUsers(userIds);
        });

        setSocket(newSocket);
    };


    // ✅ Setup auth on load
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            checkAuth(); // ✅ Only call checkAuth if token exists
        }
    }, [token]);

    const value = {
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile,
        checkAuth
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};
