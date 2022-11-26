import React, { useContext, useReducer, useState } from 'react'
import Counte from './Counte';
import Prices from './Prices';
export default function Card({count}) {
    const [price ,setPrice]= useState(0);
  return (
    <div className='flex justify-center m-5 flex-col grow '>
        <h3 className=' text-Orange font-Kumbh mb-2 font-bold text-xs tracking-widest'>SNEAKER COMPANY</h3>
        <h1 className='font-Kumbh font-bold sm:text-xl leading-tight text-4xl'>Fall Limited Edition Sneakers</h1>
        <p className='font-Kumbh text-Dark_grayish_blue text-sm mt-4 leading-relaxed'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <Prices price={price}/>
        <Counte count={count} />
    </div>
  )
}
