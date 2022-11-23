import { Link ,useHistory} from "react-router-dom";
import {useState}from 'react'
import {useStateValue}from'../../Context/StateProvider'
import axiosinstance  from "../../axois/axios";
const Signin = () => {
    const history=useHistory()
    const [errors,setErrors]=useState('')
    const [message,setMessage]=useState('')
    const [users,dispatch]=useStateValue()
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const user={email:email,password:password}
       const login=(e)=>{
        e.preventDefault()
        
        axiosinstance.post('/admin/signin',{
            ...user
            
        })
        .then(res=>{
            console.log('newww',res)
            if(res.status=='200')
            {
                localStorage.setItem('user',res.data.Accesstoken)
            }
            dispatch({
                type:'signin',
                token:res.data.Accesstoken

                
            })
            history.push('/dashboard')
          
        })
        .catch(err=>{
            setErrors(err.response.data.error)
            setTimeout(()=>{
                setErrors('')
            },2000)
        })
    }
    return ( <div>
         <form className="mt-[15%]">
            <Link to='/' className="ml-[35%] w-[50%]">Home</Link>
                    <div className="mb-2 ml-[25%] w-[50%]">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)}
                            type="email" value={email}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2 ml-[25%] w-[50%]">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input onChange={(e)=>setpassword(e.target.value)}
                            type="password" value={password}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link to='/'
                        
                        className=" ml-[25%] w-[50%]text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6 ml-[25%] w-[50%] ">
                        <button onClick={login} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 ml-[25%] w-[50%]  text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/signup"
                    
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
                { errors && <div className="bg-red-400 w-[300px] h-10 rounded-full p-2 ml-[40%]">
                    <h1>{errors}</h1>
                </div>
}
              { message && <div className="bg-green-400 w-[300px] h-10 rounded-full p-2 ml-[40%]">
                    <h1>{message}</h1>
                </div>
                } 
          

    </div> );
}
 
export default Signin;