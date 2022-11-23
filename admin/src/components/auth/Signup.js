import { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import axiosinstance  from "../../axois/axios";
const Signup = () => {
    const history=useHistory()
    const [errors,setErrors]=useState('')
    const [message,setMessage]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [secret,setScrete]=useState('')
   const user={firstName:firstName,lastName:lastName,email:email,password:password,role:'admin', secret:secret}
   const register=()=>{
          axiosinstance.post('/admin/signup',{
            ...user
            
        })
        .then((res)=>{
          
            if(res.data.message){
                  setMessage(res.data.message)
                  setTimeout(()=>{
                    setMessage('')
                    history.push('/signin')

                  },2000)
                  
              }
             
        })
        .catch((err)=>{
            if(err){
                setErrors(err.response.data.error)
                setTimeout(()=>{
                    setErrors('')
                },3000)
              }
            
        })
    }
    return (  <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Logo
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                first name
                            </label>
                            <div className="flex flex-col items-start">
                                <input  onChange={(e)=>{setFirstName(e.target.value)}}
                                    value={firstName}
                                    type="text"
                                    name="fname"
                                    className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <label
                                htmlFor="lname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                last name
                            </label>
                            <div className="flex flex-col items-start">
                                <input 
                                    onChange={(e)=>{setLastName(e.target.value)}}
                                    value={lastName}
                                    type="text"
                                    name="lname"
                                    className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e)=>{setEmail(e.target.value)}}
                                    value={email}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-600 undefined"
                            >
                                password
                            </label>
                            <div className="flex flex-col items-start ">
                                <input 
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    value={password}
                                    type="password"
                                    name="password"
                                    className=" block w-full mt-1 border-gray-300 border-2 rounded-md shadow-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-600 undefined"
                            >
                                secret
                            </label>
                            <div className="flex flex-col items-start ">
                                <input 
                                    onChange={(e)=>{setScrete(e.target.value)}}
                                    value={secret}
                                    type="text"
                                    name="secret"
                                    className=" block w-full mt-1 border-gray-300 border-2 rounded-md shadow-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                      
                        <div className="flex items-center justify-end mt-4">
                            <Link to="/signin"
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                
                            >
                                Already registered?
                            </Link>
                            <button onClick={register}
                                type="button"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
               
               { errors && <div className="bg-red-400 w-[300px] h-10 rounded-full p-2">
                    <h1>{errors}</h1>
                </div>
}
              { message && <div className="bg-green-400 w-[300px] h-10 rounded-full p-2">
                    <h1>{message}</h1>
                </div>
                }
            </div>
    
        

    </div>);
}
 
export default Signup;