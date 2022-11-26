import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Cart({count}) {

    function handelSubmit(e){
        e.preventDefault()
        
    }
  return (
    <div className='grow-2 flex items-center justify-center mt-3 font-Kumbh font-bold gap-3 
    rounded-lg text-sm bg-Orange text-Light_grayish_blue py-3 shadow-2xl shadow-Orange cursor-pointer hover:bg-grayish_orange' 
    onClick={handelSubmit}>
      <AiOutlineShoppingCart/>
      <span>Add to Cart</span>
    </div>
  )
}
