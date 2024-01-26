"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const submithandle=(e)=>{
    e.preventDefault()
      setTask([...task, {title, detail}]);
     
     setTitle('');
     setDetail('');
  }
 
  const deletehandler =(i)=>{
     let copytask=[...task];
     copytask.splice(i,1);
     setTask(copytask);
  } 

  let renderTask=<h1>No task set</h1>

  if(task.length>0){
    renderTask= task.map((t,i)=>{
      return <li key={i}>
        <div className=' border-2 border-zinc-600 flex justify-between m-2'>
          <div className=' m-2'>
      <h5 className='font-bold '>{t.title}</h5>
      <h6>{t.detail}</h6>
      </div>
      <button onClick={()=>{
         deletehandler(i)
      }} 
      className='bg-red-700 px-3 py-2 text-slate-200 rounded m-2 '> Delete </button>
      </div>
     
      
     
      </li>
    })
  }
  return (
    <>
    <h1 className=' bg-slate-400 text-slate-800 text-4xl mx-20 p-6 font-bold text-center '>Todo List</h1>
    <form onSubmit={submithandle} className=' max-w-screen-sm	mx-auto my-0'>
     <input
     type='text'
     className='border-zinc-700  border-4 text-xl px-4 py-2 my-10'
     placeholder='Enter task here'
     value={title}
     onChange={(e)=>{
      setTitle(e.target.value);
     }}
     />
     <br/>
     <input
     type='text'
     className='border-zinc-700  border-4 text-xl px-4 py-2 my-3'
     placeholder='Enter description here'
     value={detail}
     onChange={(e)=>{
      setDetail(e.target.value);
     }}
     />
      <button className='border-gray-800 text-slate-300 border-4 ml-10 bg-slate-800 text-2xl rounded-lg px-5 py-2' >Add</button>
    </form>
     <div className=' bg-slate-400 p-8 mx-20 my-10'>
       <ul className='text-lg '>
        {renderTask}
       </ul>
     </div>
    </>
  )
}

export default page