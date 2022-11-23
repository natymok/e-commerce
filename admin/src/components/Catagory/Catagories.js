import React, { useState } from 'react'
import AdminDashboard from '../Admin/AdminDashboard'
function Catagories() {
   const [showCatagory,setCatagory]=useState(true) 
   const [showOrder,setOrder]=useState(false) 
   const [showProduct,setProduct]=useState(false) 
  return (
    <div>
    <AdminDashboard showCatagory={showCatagory} showOrder={showOrder} showProduct={showProduct}></AdminDashboard>
     
        
    </div>
  )
}

export default Catagories