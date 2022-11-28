import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../Context/StateProvider'
import Cat from '../Catagory/Cat'
import Order from '../orders/Order'
import Header from '../header'
import Pro from '../Products/Pro'
export default function AdminDashboard({showCatagory,showOrder,showProduct}) {
  const [{token}]=useStateValue()
  return (
    <div>
        <Header></Header>
        <div className='flex   w-full '>
          <div className='h-[2700px] bg-gradient-to-r from-purple-500 to-pink-500 w-[15%]'>
          <ul className='  pl-3 flex flex-col  decoration-none list-none'>
            <Link className='p-0 hover:bg-black hover:text-white' to='/products'>Product</Link>
            <Link className='hover:bg-black hover:text-white' to='/Catagories'>Catagories</Link>
            <Link className='hover:bg-black hover:text-white' to='/Orders'>Orders</Link>
          </ul>

          </div>
          <div className='w-[85%] p-0 h-[700px]'>
          {showCatagory && <Cat></Cat>}
          {showOrder && <Order></Order>}
          {showProduct && <Pro></Pro>}
          </div>
         
        </div>
        
        
        
        </div>
  )
}
