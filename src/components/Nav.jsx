import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
const issam = '/images/image-avatar.png'
export default function Nav() {
  return (
    <div className='flex justify-between m-5'>
      <div className='flex items-center gap-2'>
      <BsList className=' cursor-pointer text-xl'/>
      <h1 className=' font-Kumbh font-bold text-2xl tracking-wider'>sneakers</h1>
      </div>
      <div className='flex items-center gap-2'>
      <AiOutlineShoppingCart className='cursor-pointer text-xl'/>
      <img src={issam} className=' h-5 cursor-pointer'/>
      </div>
    </div>
  )
}

