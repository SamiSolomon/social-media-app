import React from "react"
import { BiSearch } from "react-icons/bi"
import { BsFillPersonFill } from 'react-icons/bs'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { PiBellSimpleRingingThin } from "react-icons/pi"
import MyProfile from "../assets/profileImage.jpg"

export default function Topbar () {
  return (
    <div className='bg-blue-400'>
         <div className='flex flex-row justify-evenly items-center h-14'>
            <div className='flex text-center'>
                <h1 className='text-white font-bold text-2xl'>RuhamaSocial</h1>
            </div>
            <div className='flex bg-white px-6 text-center mx-2 my-4 rounded-full '>
                <div className='text-center py-2'><BiSearch /></div> 
                <input className="outline-none w-96 px-1"  placeholder='Search for friend, post or video '/>
            </div>
            <div className="flex gap-4 text-white font-semibold">
                <span>Homepage</span>
                <span>Timeline</span>
            </div>
            <div className="flex flex-row gap-6 text-center pt-1">
               <div><BsFillPersonFill   size={27}/> <span  className="absolute top-1 w-6 h-6 text-center text-white bg-red-600 mx-2 rounded-full">1</span></div>
                <div><BiSolidMessageDetail  size={27} /> <span className="absolute top-1 w-6 h-6 text-center text-white bg-red-600 mx-2 rounded-full ">2</span></div>
                <div><PiBellSimpleRingingThin  size={27} /> <span className="absolute top-1 w-6 h-6 text-center text-white bg-red-600 mx-2 rounded-full">1</span></div>
            </div>
            <div className='rounded-full h-10 w-10'>
                <img className='rounded-full object-cover ' src={MyProfile} alt="MY profile" />
            </div>
         </div>
    </div>
  )
}
