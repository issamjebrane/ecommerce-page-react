import React, { useContext } from 'react'
import Checkout from './Checkout';
import { ImageProvider } from './Images';

export default function PopupCart({count,reveal}) {
    const {images,currentIndex}=useContext(ImageProvider);
    const styling ={
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex:'5',
            transform: 'translate(-50%, -50%)',
            width: '95%',
            height:'85%' /* Need a specific value to work */
          
    }
    const revealing = reveal ? 'block' : 'hidden'
  return (
    <div className={`grid grid-cols-1 divide-y-2  font-Kumbh font-bold 
     border-Orange bg-white rounded-md border-2 ${revealing}`} style={styling}>
      <div className='pl-4 pt-4 text-[0.9rem]'>Cart</div>
      <Checkout count={count}/>
    </div>
  )
}
