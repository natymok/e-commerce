import { useStateValue } from "../../Context/StateProvider";
import AdminDashboard from "../Admin/AdminDashboard";
import { useState } from "react";

const Product = () => {
    const [showCatagory,setCatagory]=useState(false) 
    const [showOrder,setOrder]=useState(false) 
    const [showProduct,setProduct]=useState(true) 
    
    const[{users},dispatch]=useStateValue()
   
    return ( 
    <div>
   <AdminDashboard showCatagory={showCatagory} showOrder={showOrder} showProduct={showProduct}></AdminDashboard>
    </div> );
}
 
export default Product;