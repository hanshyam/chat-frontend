import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./authProvider.jsx";
import toast from "react-hot-toast";

export const ChatContext = createContext();

export const ChatProvider = ({children})=>{
   
    const [messages,setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    const [selectedUser,setSelectedUser] = useState(null);
    const [unseenMessages,setUnseenMessages] = useState({});
    
    const {socket,axios} = useContext(authContext);

    // function to get all user for sidebar
    const getUsers = async () =>{
        try {
            const { data } = await axios.get('/message/users');
            if(data.success){
                setUnseenMessages(data.unSeenMessages);
                setUsers(data.users);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    
//    function to get messages for selected user
const getMessages = async (userId)=>{
    try {
       const {data} = await axios.get(`/message/${userId}`);
        if(data.success){
            setMessages(data.messages);
        }
    } catch (error) {
        toast.error(error.message);
    }
}

// function to send message to selected user
const sendMessage = async (messageData)=>{
   try {
     const {data} = await axios.post(`/message/send/${selectedUser._id}`,messageData);
     if(data.success){
         setMessages((prevMessages)=>[...prevMessages,data.newMessage]);
     }
   } catch (error) {
      toast.error(error.message);
    }
}

// function to subscribe to messages for selected user
const subscribeToMessages = async ()=>{
    if(!socket) return;
    socket.on("newMessage", (newMessage)=>{
          if(selectedUser && newMessage.senderId === selectedUser._id){
            newMessage.seen = true;
            setMessages((prev)=>[...prev,newMessage]);
            axios.put(`/message/mark/${newMessage._id}`);
        }
        else{
             setUnseenMessages((prevUnseenMessages)=>({
                 ...prevUnseenMessages, [newMessage.senderId] : prevUnseenMessages[newMessage.senderId]?prevUnseenMessages[newMessage.senderId]+1 : 1
             }))
        }
    }) 
}

// function to unsubscribe from messages
const unsubscribeFromMessages = ()=>{
     if(socket) socket.off("newMessages");
}


    useEffect(()=>{
      subscribeToMessages();
      return ()=>unsubscribeFromMessages();
      
    },[socket,selectedUser])


    const value = {
       users,
       unseenMessages,
       getUsers,
       messages,
       selectedUser,
       getMessages,
       setSelectedUser,
       setMessages,
       sendMessage,
       setUnseenMessages
    }


    return(
      <ChatContext.Provider value={value}>
          {children}
      </ChatContext.Provider>
    )
}