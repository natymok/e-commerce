import React from 'react'
import Modal2 from '../Modals/Modal2'
import Modal from '../Modals/Modal'
import{motion}from 'framer-motion'
import axiosinstance from '../../axois/axios'
import { useStateValue } from '../../Context/StateProvider'
function Pro() {
  const [{product},dispatch]=useStateValue()
  const products= async()=>{
    const proo=await axiosinstance.get('/getProduct')
    return proo.data.message
  
  }
  const fetchProduct=async()=>{
    await products().then((data)=>{
      if(data){
        dispatch({
          type:'getProduct',
          product:data
        })
      }
    })
  
  }
    const deleteProduct=(id)=>{
        axiosinstance.delete('/admin/product/delete/', { data: { id:id} }).then((res)=>{
          if(res){
            fetchProduct()
          }
         
        })
        .catch((err)=>{
          console.log(err)
        })


    }
  
  return (
    <div>
      <div className='flex justify-between px-5'>
        <h3>products</h3>
        <Modal2 req='create' name='Add New'  ></Modal2>
         
      </div>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider "
                  >
                  Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider "
                  >
                    Description
                  </th>
                 
                  
                </tr>
              </thead>
              {product && product.map((pro)=>(
                <tbody key={pro._id} className="bg-white divide-y divide-gray-200">
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">

                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-[95PX] w-[95px] gap-1">
                       {pro.productPicture && pro.productPicture.map((pic)=>(
                         <motion.img whileHover={{scale:1.3}} key={pic._id} className="h-20 w-20 rounded-full" src={`http://localhost:3000/public/${pic.img}`} alt="" />
                       ))}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{pro.name}</div>
                       
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{pro.price}$</div>
                   
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {pro.quantity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pro.Description}
                  </td>
                  
                  <Modal2 req='edit' name='edit' id={pro._id} />

                  <motion.button whileTap={{scale:0.6}} className='rounded-md bg-red-500 border-3 p-3' onClick={()=>{deleteProduct(pro._id)}}>Delete</motion.button>
                 
                </tr>
              
            </tbody>
            
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pro