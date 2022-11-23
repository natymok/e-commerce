import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
const ProtectedRoute=(({component:Component,...rest})=>{
 
    return <Route  {...rest} component={(props)=>{
        const token=localStorage.getItem('user')
                     if(token){
                        return <Component {...props}/>
                     }
                     else{
                        return <Redirect to='/signin'/>
                     }
    }}    />

})
export default ProtectedRoute