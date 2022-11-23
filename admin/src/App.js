import Header from "./components/header";
import {AnimatePresence}from 'framer-motion'
import {createBrowserHistory} from'history'
import {   Router,Switch,Route} from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import AdminDashBoard from "./components/Admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";
import {useEffect}from 'react'
import { useStateValue } from "./Context/StateProvider";
import Product from "./components/Products/Product";
import Orders from "./components/orders/Orders";
import Catagories from "./components/Catagory/Catagories";
import axiosinstance from "./axois/axios";
const history = createBrowserHistory();
function App() {
  const _token=localStorage.getItem('user')
  let [{token,catagories},dispatch]=useStateValue()

const allCatagory=(catagories,Option=[])=>{
  catagories && catagories.map((cat)=>{
   Option.push({
     id:cat._id,
     name:cat.name
   } )
    cat.children &&  allCatagory(cat.children,Option) 
   
 })
 return Option
}

const catagg=async()=>{
  const catii=await  axiosinstance.get('/getCatagories')
  return catii.data.catagories
}
const product= async()=>{
  const proo=await axiosinstance.get('/getProduct')
  return proo.data.message

}
const fetchProduct=async()=>{
  await product().then((data)=>{
    if(data){
      dispatch({
        type:'getProduct',
        product:data
      })
    }
  })

}
const fectchcat=async()=>{
  await catagg().then((data)=>{
  
    if(data){
      dispatch({
        type:'getcatagory',
        catagory:data
  
      })
      }
   

  })
}

  useEffect(()=>{
    if(_token){
      dispatch({
        type:'signin',
        token:_token
      }) 
      fectchcat() 
      fetchProduct()
    }
   
    

    

  },[_token,token,dispatch])

  return (
    <div className="App h-[full]">
     <AnimatePresence>
     <Router history={history}>
      <Switch>
      <ProtectedRoute path='/orders' component={Orders}/>
      <ProtectedRoute path='/catagories' component={Catagories}/>
        <ProtectedRoute path='/products' component={Product}/>
        <ProtectedRoute path='/dashboard' component={AdminDashBoard} />
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/' component={Header}/>
        </Switch>
        </Router>
     </AnimatePresence>
      
    </div>
  );
}

export default App;
