import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import axiosinstance from "../../axois/axios";

const Modal2 = ({req,name,id}) => {
  let [{catagories,product,token},dispatch]=useStateValue()
  const [showModal, setShowModal] = useState('');
  const [productName, setproductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [ProductCatagory, setProductCatagory] = useState('');
  const form=new FormData()
  form.append('name',productName)
  form.append('price',parseInt(price))
  form.append('Description',description)
  form.append('catagory',ProductCatagory)
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
  
const addProduct =()=>{
  
  form.append('productPicture',productImage)
  
  setShowModal(false)
  axiosinstance.post('/admin/products/create',form).then((res)=>{
      if(res){

        fetchProduct()
      }
  })
  .catch((err)=>{
      console.log(err)
  })


}
const editProduct =()=>{
  form.append('productPicture',productImage)
  
  setShowModal(false)
  axiosinstance.put('/admin/product/update',{id:id,name:productName,price:price,Description:description,quantity:quantity})
  .then(res => {
    if(res){
      fetchProduct()
    }
  })
  .catch(error => {
    console.log(error);
  });


}

const save=()=>{
  if(req=='create')
     {
      addProduct()
     }
     if(req=='edit'){
      editProduct()
     }
    
}

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
  return (
    <>
      <button
        className="bg-green-500 text-black active:bg-green-500  rounded-md
      font-bold px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
      {name}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                   
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form encType='multipart/form-data' className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Product name" onChange={(e)=>{setproductName(e.target.value)}} />
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="quantity" onChange={(e)=>{setQuantity(e.target.value)}} />
                    
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}} />
                   
                   
                    <textarea className=" shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder=" Description" cols={2} rows={4} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    <select onChange={(e)=>{setProductCatagory(e.target.value)}}>
                        <option>Select catagory</option>
                         {allCatagory(catagories)&& allCatagory(catagories).map((cat)=>(
                            <option key={cat.id}  value={cat.id}>{cat.name}</option>
                         ))} 
                    </select>
                    <input  type='file' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" multiple='multiples' onChange={(e)=>{setProductImage(e.target.files[0])}} />
                   
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={save}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal2;