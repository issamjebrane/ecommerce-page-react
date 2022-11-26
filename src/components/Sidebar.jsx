import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
export default function Sidebar({sliding,showSliding}) {
     const [index , setIndex] = useState(0)
     const navigate = useNavigate()
    function handleLink(e){
        e.preventDefault()
        switch (e.target.id) {
        case '1': 
            setIndex(1);
            return navigate('/collections');
        case '2': 
            setIndex(2);
            return navigate('/collections');
        case '3':
            setIndex(3);
            return navigate('/collections');
        case '4': 
            setIndex(4);
            return navigate('/collections');
        case '5': 
            setIndex(5)
            return navigate('/collections');
        default :
            return new Error()
        }
    }
  return (
    <div className={`sm:${sliding ? "block":"hidden"} sm:w-7/12 sm:bg-white sm:top-0 sm:left-0 sm:p-6 sm:z-10 sm:h-screen `}>
      <button className='hidden text-Dark_grayish_blue text-xl sm:block mb-3' onClick={showSliding}><IoMdClose className=' pointer-events-none'/></button>
      <div className=' font-Kumbh font-bold  flex sm:flex-col gap-6 sm:gap-3 sm:items-start'>
        <button className={` ${index == 1 ?'border-Orange ': 'border-transparent'} border-solid border-b-2 cursor-pointer py-5 sm:py-0 sm:border-none`} id={1} onClick={handleLink}>Collections</button>
        <button className={` ${index == 2 ?'border-Orange ': 'border-transparent'} border-solid border-b-2 cursor-pointer py-5 sm:py-0 sm:border-none`}  id={2} onClick={handleLink}>Men</button>
        <button className={` ${index == 3 ?'border-Orange ': 'border-transparent'} border-solid border-b-2 cursor-pointer py-5 sm:py-0 sm:border-none`} id={3} onClick={handleLink}>Women</button>
        <button className={` ${index == 4 ?'border-Orange ': 'border-transparent'} border-solid border-b-2 cursor-pointer py-5 sm:py-0 sm:border-none`}  id={4} onClick={handleLink}>About</button>
        <button className={` ${index == 5 ?'border-Orange ': 'border-transparent'} border-solid border-b-2 cursor-pointer py-5 sm:py-0 sm:border-none`} id={5} onClick={handleLink}>contact</button>
      </div>
    </div>
  )
}
