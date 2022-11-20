import React, { useEffect, useState } from 'react'
import {HiOutlinePlus,HiOutlineMinusSm} from 'react-icons/hi'
import Card from './Card';
import Cart from './Cart';
export default function Counte() {
    const [count, setCount] = useState(0);
    function incremeting(e){
        e.preventDefault();
        setCount((count)=>{
            return (count+1)
        })
    }
    function decrementing(e){
        e.preventDefault();
        if(count === 0){
            return setCount((count)=>{
                return 0;
            })
        }
        setCount((count)=>{
            return count -1;
        })
    }
   


  return (
    <div>
        <div className='flex justify-between items-center mt-4 px-4 py-2 
        font-Kumbh font-bold bg-Light_grayish_blue rounded-lg'>
        <button  className='text-Orange cursor-pointer' onClick={decrementing}><HiOutlineMinusSm/></button>
        <p>{count}</p>
        <button className='text-Orange cursor-pointer' onClick={incremeting}><HiOutlinePlus/></button>
        </div>
        <Cart count={count}/>
    </div>
  )
}
