import React from 'react'

export default function Login() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <div className="flex flex-row justify-center items-center gap-9">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-blue-600 text-3xl font-bold">RuhamaSocial</h3>
          <span className="text-gray-500">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className=" bg-white mx-28 my-44">
          <div className="flex flex-col gap-5 p-16">
            <input className="outline outline-slate-50 text-center p-1 px-16 w-80" placeholder="Email" />
            <input className="outline outline-slate-50 text-center p-1 px-8 w-80" placeholder="Password" />
            <button className="text-center bg-blue-700 text-white p-1 w-80">Log In</button>
            <span className="">Forgot Password?</span>
            <button className="text-center bg-green-500 text-white p-1 w-80">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
