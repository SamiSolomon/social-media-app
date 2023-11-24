import React from 'react'
import temesgen from "../assets/profile/temesgen.jpg"
import backgroundProfile from "../assets/profile/backgroundProfile.jpg"


export default function Personal() {
  return (
    <div className='col-span-3'>
       <div className=''>
        <img className='w-full h-48 ' src={ backgroundProfile } alt="Profile Background" />
        <img className='relative border border-white border-8  rounded-full w-52 h-52  left-[470px] -top-28' src={ temesgen } alt="myself" />
        <div className='text-center -mt-24 mb-8'>
            <p className='font-bold text-2xl'> samuel solomon </p>
            <p> Hello my friends!</p>
        </div>
       </div>

    </div>
  )
}
