import React from 'react'
import Online from '../online/Online'
import { Users } from '../dummyData'



export default function RightBar() {
  return (
    <div className='col-span-1'>
      <div>
        <div className='flex flex-col p-4'>
            <div className='font-bold'>User information</div>
            <div className='flex flex-row gap-2 '>
              <span className='font-semibold text-gray-400'>City: </span>
              <span>Ethiopia</span>
            </div>
            <div className='flex flex-row gap-2'>
              <span className='font-semibold text-gray-400'>From: </span>
              <span>Addis Ababa</span>
            </div>
            <div className='flex flex-row gap-2 '>
              <span className='font-semibold text-gray-400'>Relationship:</span>
              <span>signle</span>
            </div>
        </div>

        <div className='p-2 font-bold'>
          <p>User Friends</p>
        </div>
        {Users.map((user)=>
        <Online key={user.id} user={user} />)}
      </div>
    </div>
  ) 
}
