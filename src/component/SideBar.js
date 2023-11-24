import React from 'react'
import { AiOutlineUsergroupDelete } from "react-icons/ai"
import { BsBookmarkFill, BsQuestionCircle, BsFillChatSquareTextFill } from "react-icons/bs"
import { MdWorkOutline, MdOutlineEvent, MdRssFeed, MdVideoLibrary} from "react-icons/md"
import { GiGraduateCap } from "react-icons/gi"
import { Users } from '../dummyData'
import CloseFriend from '../CloseFriend/CloseFriend'

export default function SideBar() {
  return (
     <div className='col-span-1 overflow-y-scroll'>
        <div className='ml-4 mt-3 flex flex-col gap-5 font-semibold'>
             <div className='flex gap-2'>
             <span className='p-1'>< MdRssFeed /></span>
             <p>Feed</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< BsFillChatSquareTextFill /></span>
             <p>Chats</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< MdVideoLibrary /></span>
             <p>Videos</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< AiOutlineUsergroupDelete /></span>
             <p>Groups</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< BsBookmarkFill /></span>
             <p>Bookmarks</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< BsQuestionCircle /></span>
             <p>Questions</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< MdWorkOutline /></span>
             <p>Jobs</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< MdOutlineEvent /></span>
             <p>Events</p>
            </div>
            <div className='flex gap-2'>
             <span className='p-1'>< GiGraduateCap /></span>
             <p>Courses</p>
            </div>
            <div className='m-3'>
            <button className='bg-gray-200 p-2'>ShowMore</button>
            </div>
            <hr />

            <ul className='flex flex-col gap-5'>
             {Users.map((user)=>
             <CloseFriend key={ user.id } user={ user } />
             )}
            </ul>
              
      </div>
    </div>
  )
}
