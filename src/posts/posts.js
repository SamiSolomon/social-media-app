import React from "react"
import { useState } from 'react'
import {SlOptionsVertical }from 'react-icons/sl'
import {AiFillLike } from "react-icons/ai"
import {FcLike } from "react-icons/fc"
import { Users } from "../dummyData"

export default function Posts({ post }) {

  const [like,setLike]= useState(post.like)
  const [isliked,setIsliked]= useState(false)

 const likeHandler = ()=> {
   setLike(isliked ? like-1 : like + 1)
   setIsliked(!isliked)
 }

  return (
    <div>
        <div className="shadow-2xl p-3 m-8">
          <div className="flex justify-between">
            <div className="flex ">
                  <img className='rounded-full object-cover w-10 ' src={Users.filter((user)=> user.id===post.userId)[0].profilePicture } alt="MY profile" />
                  <p className='font-bold p-2.5'>{Users.filter((user)=>user.id === post.userId)[0].username}</p>
                  <p className="p-2 text-gray-400"> { post.date }</p>
            </div>
            <div>
                <SlOptionsVertical />
            </div>
          </div>
            <div className="m-2">
                <p> { post?.desc } </p>
            </div>
            <div className="m-1">
                <img src={post.photo} alt={post.desc}/>
            </div>
           <div className="flex justify-between">
              <div className="flex gap-1 p-2">
              <div onClick={ likeHandler }><AiFillLike  size={29} color="blue" /></div>
                <div onClick={ likeHandler }><FcLike  size={29} /></div>
                <p className="p-1">{ like } people like it </p>
              </div>
              <div>
                <p className="p-2 text-gray-400 ">{ post.comment} comments</p>
              </div>
            </div>
           
        </div>
    </div>
  )
}
