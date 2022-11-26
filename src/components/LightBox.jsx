import React from 'react'

export default function LightBox({goToPrevious,leftArrowtyles,lighBox,setLightBox,}) {
  return (
    <div className='sm:hidden nabsolute h-screen w-screen bg-slate-800 bg-opacity-60 top-0 left-0 z-30  '>
    <div className=' h-3/5 w-96 relative flex flex-col' style={styling}>
    <button className='cursor-pointer items-end text-xl mb-3 hover:text-Orange float-right ' onClick={()=>{setLightBox(!lighBox)}}>
        <IoMdClose className=' pointer-events-none '/>
    </button>
    <div >
    <MdNavigateBefore style={leftArrowtyles} onClick={goToPrevious}/>
    </div>
    <div className='grow-2'>
    <div className={`bg-[url('${images[currentIndex].url}')] bg-cover bg-no-repeat bg-center  rounded-md cursor-pointer h-full w-full`} ></div>
    <div>
    <MdNavigateNext style={rightArrowtyles} onClick={goToNext}/>
    </div>
    </div>
    <div className='sm:flex items-center justify-betweens gap-4  h-24'>
        <div className={`bg-[url('images/image-product-1-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
        ${index == 1 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={1} onClick={handleImageShower}></div>
        <div className={`bg-[url('images/image-product-2-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
        ${index == 2 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={2} onClick={handleImageShower}></div>
        <div className={`bg-[url('images/image-product-3-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
        ${index == 3 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={3} onClick={handleImageShower}></div>
        <div className={`bg-[url('images/image-product-4-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
        ${index == 4 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={4} onClick={handleImageShower}></div>
    </div>
    </div>
    </div>
 )
}
