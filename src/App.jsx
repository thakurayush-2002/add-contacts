import React, { useState } from 'react'

const App = () => {

   const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
  
    const [alluser, setAllusers] = useState([]);
    const newarr = [...alluser,{name,company,phone}];


    const formHnadler =(e)=>{
      e.preventDefault()
      setName("")
      setCompany("")
      setPhone("")
      setAllusers(newarr)
      };


      const deleteHandler=(i)=>{
        const copyArr = [...alluser]
        copyArr.splice(i,1)
        setAllusers(copyArr)
      };

    
  return (

   <div className='bg-gray-200 w-full h-screen flex items-center justify-center gap-2'>

    <div className='bg-white w-[40%] h-[80%] rounded-md py-5 px-5 '>
      <h1 className='font-semibold text-xl'>Add Contact</h1>
      <form onSubmit={formHnadler}>
      <div className="namebox  mt-4">
    <h1 className='font-bold'>Name<samp className='text-red-500'>*</samp>:</h1>
    <input
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
     className=' border-2 w-full p-2 rounded mt-1 outline-none' type="text" 
     placeholder='Enter Name' />
   </div>

   <div className="Companybox  mt-4">
    <h1 className='font-bold'>Company<samp className='text-red-500'>*</samp>:</h1>
    <input 
     value={company}
     onChange={(e)=>{setCompany(e.target.value)}}
    className=' border-2 w-full p-2 rounded mt-1 outline-none' type="text" 
    placeholder='Enter Company Name'/>
   </div>

   <div className="Phonebox  mt-4">
    <h1 className='font-bold'>Phone<samp className='text-red-500'>*</samp>:</h1>
    <input 
     value={phone}
     onChange={(e)=>{setPhone(e.target.value)}}
    className=' border-2 w-full p-2 rounded mt-1 outline-none' type="text" 
    placeholder='Enter Phone number'/>
   </div>

   <button className='bg-blue-400 text-white   w-[99%] py-2 rounded font-semibold active:scale-95 mt-4'>Add Contact</button>
      </form>
    </div>


    {/* return code */}
     <div className=' w-[40%]  h-[95%]  rounded p-2 '>
     <h1 className='font-semibold text-xl py-2 px-2'>Contact List</h1>

      {alluser.map((elem,i)=>{

        return  <div key={i} className='w-[80%] rounded  flex mt-2 shadow-md shadow-slate-700/50 '>
         <div className='bg-white w-[100%] h-[150px]  px-3 py-3 rounded'>
         <h1 className='text-xl font-semibold'>{elem.name}</h1>
         <h1>Company: {elem.company}</h1>
         <h1>Phone: {elem.phone}</h1>
         </div>
         <div  className= 'bg-white w-[20%] h-[150px] rounded   '>
          <button onClick={()=>{
            deleteHandler(i)
          }} className='text-xs bg-red-600 text-white px-5 py-2 mt-2 rounded-full font-semibold '>Delete</button>

         </div>
        </div>
      })}
     </div>
   </div>
  )
}


export default App
