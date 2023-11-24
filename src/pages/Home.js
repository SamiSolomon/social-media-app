import React from 'react'
import Topbar from '../component/Topbar'
import SideBar from '../component/SideBar'
import Feed from '../component/Feed'
import RightBar from '../component/RightBar'
import Personal from "../personal/Personal"

export default function Home() {
  return (
    <>
     <Topbar />
     <div className='grid grid-cols-4'>
        <SideBar />
       <div className='col-span-3'>
         <Personal />
        <div className='grid grid-cols-3'>
          <Feed />
          <RightBar/>
        </div>

       </div>
       
     </div>
   
    </>
  )
}
