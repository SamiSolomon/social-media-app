import MyProfile from '../assets/profileImage.jpg'
import { IoMdPhotos } from 'react-icons/io'
import { PiTagChevronFill } from 'react-icons/pi'
import { MdOutlineAddLocation } from 'react-icons/md'
import { BsEmojiFrown } from 'react-icons/bs'


export default function profile() {
  return (
    <div>
      <div className='shadow-2xl m-8 p-3'>
        <div className='flex gap-2 m-8'>
            <img className='rounded-full object-cover w-10 ' src={ MyProfile } alt="MY profile" />
            <p className='font-bold p-2.5'> What's in your mind joshua </p>
        </div>
        <hr className='mx-12 my-6 border-b-2 border-black' />
        <div className='flex gap-5 m-9'>
          <div className='flex gap-1'>
            <div className=''> <IoMdPhotos color="red" size={27}/> </div>
            <p className='font-bold'>Photo or Video</p>
          </div>

          <div className='flex gap-1'>
            <div className=''> <PiTagChevronFill color='blue'  size={27}/> </div>
            <p className='font-bold'>Tag</p>
          </div>
          <div className='flex gap-1'>
            <div className=''> <MdOutlineAddLocation color='green' size={27} /> </div>
            <p className='font-bold'> Location </p>
          </div>
          <div className='flex gap-1'>
            <div className=''> <BsEmojiFrown color='yellow' size={27}/> </div>
            <p className='font-bold'>Feelings</p>
          </div>
          <div className='bg-green-700 text-white rounded-sm ml-20 px-1'>
            <button className='text-center '> share</button>
          </div>

        </div>
       
      </div>
    </div>
  )
}
