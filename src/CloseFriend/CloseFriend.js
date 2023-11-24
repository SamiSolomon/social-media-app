import React from 'react'

export default function CloseFriend({user}) {
  return (
                <li className='flex'>
                <img className='rounded-full object-cover w-10 ' src={ user.profilePicture } alt={ user.username } />
                 <p className='font-bold p-2.5'>{user.username}</p>
                </li>
  )
}
