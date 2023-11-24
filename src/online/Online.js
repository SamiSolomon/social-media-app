import React from 'react'
import {BsFillCircleFill } from 'react-icons/bs'


export default function Online ({ user }) {
  return (
    <div className='flex flex-col'>
           <div className='flex m-3'> 
            <div className='flex'>
            <img className='rounded-full object-cover w-10 h-10' src={user.profilePicture} alt="onlineUsers" />
             <span className='relative -top-1 -left-3' ><BsFillCircleFill color='lightGreen' size={12} /></span>
            </div>
              <p className='font-bold'>{user.username}</p>
           </div> 
    </div>
  )
}
