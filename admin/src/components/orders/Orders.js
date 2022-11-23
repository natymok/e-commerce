import React, { useState } from 'react'
import AdminDashboard from '../Admin/AdminDashboard'
 function Orders() {
    const [showCatagory,setCatagory]=useState(false) 
   const [showOrder,setOrder]=useState(true)
   const [showProduct,setProduct]=useState(false) 
  return (
    <div>
       <AdminDashboard showCatagory={showCatagory} showOrder={showOrder} showProduct={showProduct} />
       
    </div>
  )
}

export default Orders