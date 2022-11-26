import React, {  useContext, useEffect, useRef, useState } from 'react'
import {HiOutlinePlus,HiOutlineMinusSm} from 'react-icons/hi'
import Cart from './Cart';
import { theProvider } from '../App';
export default function Counte({count}) {
    const {patching} = useContext(theProvider)
    let counting 
    function handleButtons(event){
        event.preventDefault()
        if(event.target.value === 'increment'){
            counting = count + 1
            patching({type : true , actionning :counting})
            console.log(counting)
        }
        else {
            if(count == 0){
                patching({type : true , actionning :0}) 
            }else {
                counting = count-1
                patching({type : true , actionning :counting}) 
            }
        }
    }
    


  return (
    <div className='flex gap-2 flex-shrink-0 sm:block'>
        <div className='grow flex justify-between items-center mt-4 px-4 py-2 
        font-Kumbh font-bold bg-Light_grayish_blue rounded-lg'>
        <button  className='text-Orange cursor-pointer' onClick={handleButtons} value='decrement' ><HiOutlineMinusSm className='pointer-events-none'/></button>
        <p>{count}</p>
        {/* pointer event ooooooooh i been trying to find u */}
        <button className='text-Orange cursor-pointer' onClick={handleButtons} value='increment'><HiOutlinePlus className=' pointer-events-none'/></button>
        </div>
        <Cart count={count}/>
    </div>
  )
}
