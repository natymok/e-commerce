import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useState } from 'react'
import axiosinstance from '../../Axios/Axios'
import {useStateValue}from '../../Context/StateProvider'
function Signup() {
  const [{token,catagories,product},dispatch]=useStateValue()
  const history=useHistory()
  const [errors,setErrors]=useState('')
  const [message,setMessage]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const user={firstName:firstName,lastName:lastName,email:email,password:password}
  const signup=()=>{
  axiosinstance.post('/signup',{...user})
  .then((res)=>{
    if(res){
        setMessage('user Created succesfully')
      
    }
  })
  .catch((err)=>{
    setErrors(err)
  })

  }
  return (
    
    <div className="w-full md:w-96 md:max-w-full mx-auto">
    <div className="p-6 border border-gray-300 sm:rounded-md">
      <form >
      <label className="block mb-6">
          <span className="text-gray-700">First Name</span>
          <input
            onChange={(e)=>{setFirstName(e.target.value)}}
            name="password"
            type="password"
            className="
              block
              w-full
              mt-1
              border-gray-300
              border-2
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
           
            
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Last Name</span>
          <input
          onChange={(e)=>{setLastName(e.target.value)}}
            name="password"
            type="password"
            className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              border-2
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Email address</span>
          <input
          onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            type="email"
            className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="naty@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Password</span>
          <input
          onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            type="password"
            className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            minLength="6"
            placeholder="(must be 6+ chars)"
            required
          />
        </label>
        <div className="mb-6">
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  name="tos"
                  value="yes"
                  type="checkbox"
                  className="
                    text-indigo-600
                    border-gray-300
                    rounded
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-offset-0
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  required
                />
                <span className="ml-2">I agree with the Terms and policy</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <button
          type='button'
            onClick={signup}
            className= " h-10 px-5 text-indigo-100 bg-pink-700  rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
            
          
            Sign Up
          </button>
        </div>
        <div>
          <div className="mt-2 text-green-700 text-right text-lg">
        
            <Link to="/signin" className="hover:underline text-lg text-pink-500"
              >already have account</Link>
          </div>
          <Link to="/" className="hover:underline text-lg text-pink-500"
              >back to home</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup