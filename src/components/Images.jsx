import React, { createContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'
import PopupCart from './PopupCart'
export const ImageProvider =createContext();
export default function Images({images,count,reveal}) {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [index ,setIndex] = useState(0)
    const [lighBox , setLightBox] = useState(false)
    const smallImage = [
        {index:'smallImage1',url:'images/image-product-1-thumbnail.jpg',price:125},
        {index:'smallImage2',url:'images/image-product-2-thumbnail.jpg',price:125},
        {index:'smallImage3',url:'images/image-product-3-thumbnail.jpg',price:125},
        {index:'smallImage4',url:'images/image-product-4-thumbnail.jpg',price:125},
    ]
    const leftArrowtyles ={
        position : 'absolute',
        top:'50%',
        transform : 'translate(0,-50%)',
        left:'20px',
        zIndex:1,
        cursor: "pointer",
        backgroundColor:'white',
        borderRadius:'50%',
        height:'30px',
        width:'30px'
    }
    const rightArrowtyles ={
        position : 'absolute',
        top:'50%',
        transform : 'translate(0,-50%)',
        right:'20px',
        zIndex:1,
        cursor: "pointer",
        backgroundColor:'white',
        borderRadius:'50%',
        height:'30px',
        width:'30px',
        display:'hidden'
    }
    const styling ={
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
     /* Need a specific value to work */
      
    }

    const goToPrevious =()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === images.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
  

    function handleImageShower(e){
        switch (e.target.id) {
            case '1':      
                setIndex(1) ;
                setCurrentIndex(0);
                break;
            case '2':
                setIndex(2)
                setCurrentIndex(1);
                break 
            case '3':
                setIndex(3)
                 setCurrentIndex(2);
                 break;
            case '4':
                setIndex(4)
                 setCurrentIndex(3);
                 break;
            default:
                return new Error();
        }
    }
    
    const value = {
        smallImage,
        currentIndex
    }
    
  return (
    <div className={`${lighBox ? 'block':'relative'} grow-2 sm:h-56 flex flex-col sm:block sm:shrink`}>
        <div className='hidden sm:block'>
        <MdNavigateBefore style={leftArrowtyles} onClick={goToPrevious}/>
        </div>
        <div className='grow sm:h-full w-full'>
        <div className={`bg-[url('${images[currentIndex].url}')] bg-cover bg-no-repeat bg-center rounded-md cursor-pointer h-full w-full sm:rounded-none`} onClick={()=>{setLightBox(!lighBox)}}></div>
         <div className='hidden sm:block'>
        <MdNavigateNext style={rightArrowtyles} onClick={goToNext}/>
        </div>
        </div>
        <div className='sm:hidden flex items-center justify-around xl:justify-between  grow-0 h-24'>
            <div className={`bg-[url('images/image-product-1-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
            ${index == 1 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={1} onClick={handleImageShower}></div>
            <div className={`bg-[url('images/image-product-2-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
            ${index == 2 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={2} onClick={handleImageShower}></div>
            <div className={`bg-[url('images/image-product-3-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
            ${index == 3 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={3} onClick={handleImageShower}></div>
            <div className={`bg-[url('images/image-product-4-thumbnail.jpg')] bg-cover bg-no-repeat bg-center w-24 h-20 rounded-md hover:brightness-90 
            ${index == 4 ?'border-Orange ': 'border-transparent'} border-solid border-4 cursor-pointer`} id={4} onClick={handleImageShower}></div>
        </div>
        {lighBox ? 
            <div className='sm:hidden absolute h-screen w-screen bg-slate-800 bg-opacity-60 top-0 left-0 z-30'  >
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
                <div className='flex items-center justify-betweens gap-4 h-24'>
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
        :''}
        <ImageProvider.Provider value={value}>
        <PopupCart count={count} reveal={reveal}/>
        </ImageProvider.Provider>
    </div>
  )
}
