import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import axiosinstance from "../../axois/axios";
const Modal = () => {
    let [{catagories,token},dispatch]=useStateValue()
  const [showModal, setShowModal] = useState(false);
  const [parentid,setparentID]=useState('')
  const [catagoryName,setcatgoryName]=useState('')
  const [catagoryImage,setcatgoryImage]=useState('')

  const catagg=async()=>{
    const catii=await  axiosinstance.get('/getCatagories')
    return catii.data.catagories
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
  const save =()=>{
    console.log(catagoryImage)
    setShowModal(false)
    axiosinstance.post('/admin/addCatagory',form).then((res)=>{
      if(res){
        fectchcat()
      }
      
    })
    .catch((err)=>{
        console.log(err)
    })
   


  }
  const form=new FormData()
  form.append('name',catagoryName)
  form.append('parentId',parentid)
  form.append('img',catagoryImage)
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
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New
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
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black " placeholder="catagory name" onChange={(e)=>{setcatgoryName(e.target.value)}} value={catagoryName} />
                    <select onChange={(e)=>{setparentID(e.target.value)}}>
                        <option>Select catagory</option>
                         {allCatagory(catagories)&& allCatagory(catagories).map((cat)=>(
                            <option key={cat.id}  value={cat.id}>{cat.name}</option>
                         ))} 
                    </select>
                    <input   type='file' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" multiple='multiples' onChange={(e)=>{setcatgoryImage(e.target.files[0])}} />
                    
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
export default Modal;