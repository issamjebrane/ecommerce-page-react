import React, { useContext, useState } from 'react'
import { ImageProvider } from './Images';
import {HiOutlineTrash} from 'react-icons/hi'
export default function Checkout({count,reveal}) {
    const {smallImage,currentIndex}=useContext(ImageProvider);
    const revealing = reveal ? 'block':'hidden'
  return (
    <div className={'row-span-4 p-4 font-Kumbh font-bold flex flex-col gap-7 '}>
      <div className='flex justify-between items-center text-Grayish_blue'>
        <img src={`${smallImage[currentIndex].url}`} className='w-[2.5rem] rounded-md'></img>
        <div>
            <h1>Autumn Limited Edition</h1>
            <div className='flex justify-start gap-3 items-center'>
            <p>{`$${smallImage[currentIndex].price}*${count}` }
            </p>
            <span className='text-black'>{`$${smallImage[currentIndex].price*count}`}</span>
            </div>
        </div>
        <div> <HiOutlineTrash className='text-2xl'/></div>
      </div>
      <button className='py-2 rounded-md bg-Orange text-white text-xs'>Checkout</button>
    </div>
  )
}
