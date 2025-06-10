import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProfilePage from './Pages/ProfilePage'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Toaster } from 'react-hot-toast';
import { authContext } from '../Context/authProvider.jsx'

function App() {
  const { authUser } = useContext(authContext);
  return (
    <div className="bg-[url('./src/assets/bgimg.jpg')] bg-contain">
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/Profile-page" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
