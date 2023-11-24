import React from 'react'

export default function Register() {
  return (
    <div className="h-full w-screen bg-slate-200">
      <div className="flex flex-row justify-center items-center gap-9">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-blue-600 text-3xl font-bold">RuhamaSocial</h3>
          <span className="text-gray-500">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className=" bg-white mx-28 my-44">
          <div className="flex flex-col justify-center items-center gap-5  p-16">
            <input className="outline outline-slate-50 text-center py-1 w-80  px-16" placeholder="Username" />
            <input className="outline outline-slate-50 text-center py-1  w-80 px-16" placeholder="Email" />
            <input className="outline outline-slate-50 text-center py-1 w-80  px-8" placeholder="Password" />
            <input className="outline outline-slate-50 text-center  py-1 w-80  px-8" placeholder="Password again" />
            <button className="text-center bg-green-500 text-white p-1 w-80  ">Sign Up</button>
            <button className=" bg-blue-700 text-white  text-center px-1 ">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
