import React from 'react'

export default function Prices({price}) {
  return (
    <div className='flex flex-col mt-5 items-start justify-start sm:flex-row sm:justify-between sm:items-center'>
       <div className='flex justify-center items-center  gap-3'>
        <h1 className=' font-Kumbh font-bold text-2xl'>$125.00</h1>
        <div className=' font-Kumbh font-bold bg-Pale_orange rounded-md px-1 text-sm text-Orange'>50%</div>
        </div>
        <div className=' font-Kumbh font-bold text-Dark_grayish_blue text-sm line-through'>$200.00</div> 
    </div>
  )
}
