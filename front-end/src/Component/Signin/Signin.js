import React from 'react'
import { useState } from 'react'
import {Link,useHistory}from 'react-router-dom'
import axiosinstance from '../../Axios/Axios'
import {motion}from 'framer-motion'
import {useStateValue} from '../../Context/StateProvider'
function Signin() {
  const history=useHistory()
const[{token,catagories,products},dispatch]=useStateValue()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [errors,setErrors]=useState('')
const [message,setMessage]=useState('')
const form={email:email,password:password}
const signin=()=>{
  axiosinstance.post('signin',{...form})
  .then((res)=>{
    if(res){
      localStorage.setItem('user',res.data.Accesstoken)
      setMessage(res.data.message)
      dispatch({
        type:'signin',
        token:res.data.Accesstoken
      })
      history.push('/')

    }

  })
  .catch((err)=>{
    setErrors('somtheng went wrong')
    console.log(err)

  })


}
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-pink-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <Link to='/signup' className="text-md">dont have account?</Link>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
              </div>
              <div className="relative">
                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div className="relative">
                <motion.button whileTap={{scale:1.3}} onClick={signin} className="bg-pink-500 text-white rounded-md px-2 py-1">Signin</motion.button>
              </div>
              <Link to='/' className="text-md">back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signin