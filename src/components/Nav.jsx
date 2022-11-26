import React, { useContext, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
import Sidebar from './Sidebar'
import { theProvider } from '../App'
export default function Nav({reveal}) {
    const [sliding , setSliding] = useState(false)
    const [imageBorder ,setImageBorder] = useState(false);
    const {revealing} = useContext(theProvider)
    
    function showCart(e){
        e.preventDefault()
        revealing({type : 'set', revealing : !reveal})
    }
    function showBorder(e){
        setImageBorder(!imageBorder)
    }
    const imageBorders = imageBorder ? "border-Orange ":""
    return (
    <div className='flex justify-between border-solid border-b-2 sm:border-none sm:border-0 ' >
      <div className='flex items-center gap-20 xl:gap-3 h-full sm:p-6 '>
      <button className='hidden cursor-pointer text-xl sm:block ' onClick={()=>setSliding(!sliding)}><BsList /></button>
      <h1 className=' font-Kumbh font-bold text-2xl tracking-tighter'>sneakers</h1>
      <div className='mt-1 sm:z-20 sm:w-screen sm:bg-black sm:top-0 sm:left-0 sm:bg-opacity-30 sm:absolute sm:mt-0 '>
      <Sidebar sliding={sliding} showSliding={()=>setSliding(!sliding)}/>
      </div>
      </div>
      <div className='flex items-center gap-2 sm:p-5 ' >
        <div className='cursor-pointer text-xl 'onClick={showCart}><AiOutlineShoppingCart className='pointer-events-none'/></div>
        <div className={`h-11 w-11 sm:h-7 border-solid border-2 sm:w-7 rounded-full bg-[url('/images/image-avatar.png')] 
        bg-cover cursor-pointer bg-center ${imageBorders} `} 
        onClick={showBorder}>
        </div>
      </div>
      
    </div>
  )
}

