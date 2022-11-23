 import { Link, Redirect } from "react-router-dom";
 import { useStateValue } from "../Context/StateProvider";
 import {useHistory}from 'react-router-dom'
  const Header = () => {
    const history=useHistory()
    const logout=()=>{
      
      localStorage.clear()
      history.push('/signin')
    }
    const [user,dispatch]=useStateValue()
    return ( 
    <div className="w-full h-[50px] bg-slate-700 ">
      <div className="flex justify-between items-center p-2 pl-5">
        <Link to ='/' className="text-white">Admin   Dashboard</Link>
        <div className="flex justify-between items-center w-[10%] mr-5">
       { !user && <Link to="/signin" className="text-white">Signin</Link>}
      { user &&  <button onClick={logout} className="text-white font-serif text-lg">signOut</button>}
       { !user && <Link to='/signup' className="text-white"> signup</Link>}

        </div>
      </div>



    </div> );
}
 
export default Header;