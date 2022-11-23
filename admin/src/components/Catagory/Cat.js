import React, { useEffect,useMemo } from 'react'
import { useStateValue } from '../../Context/StateProvider';
import Modal from '../Modals/Modal';
function Cat() {
  let [{catagories},dispatch]=useStateValue()
   const renderCatagories=(catagories)=>{
    let catagoriess=[]
    for(let cat of catagories){
      catagoriess.push(
        <>
         <li className=' list-none pl-4' key={ cat._id}>
          {cat.name}
          {cat.children && (<ul>{renderCatagories(cat.children)}</ul>)}
        </li>
        
        
        </>
       
        
      )
    }
    return catagoriess
   }
  return (
    <div>
      <div className='flex justify-between px-5'>
        <h3>Catagory</h3>
        <Modal></Modal>
         
      </div>
      
      <ul>
      {catagories && renderCatagories(catagories)}
    
      
      </ul>
      
     
    </div>
  )
}

export default Cat