import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import ChatContainer from '../Components/ChatContainer';
import RightSidebar from '../Components/RightSidebar';
import { ChatContext } from '../../Context/chatContext';

// border-gray-600 border-2
const Home = () =>{
    const {selectedUser} = useContext(ChatContext);

   return(
     <div className='border w-full h-screen'>
        <div className={`backdrop-blur-xl   rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] x1:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
           <Sidebar/>
           <ChatContainer/>
           {selectedUser?<RightSidebar/>:<></>}
        </div>
     </div>
   )
}
export default Home;