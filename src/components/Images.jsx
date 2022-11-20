import React, { useState } from 'react'
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'

export default function Images({images}) {
    const [currentIndex,setCurrentIndex] = useState(0)
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
    const rigjtArrowtyles ={
        position : 'absolute',
        top:'50%',
        transform : 'translate(0,-50%)',
        right:'20px',
        zIndex:1,
        cursor: "pointer",
        backgroundColor:'white',
        borderRadius:'50%',
        height:'30px',
        width:'30px'
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
  return (
    <div className='relative h-56'>
        <MdNavigateBefore style={leftArrowtyles} onClick={goToPrevious}/>
         <div className={`bg-[url('${images[currentIndex].url}')] bg-cover h-full bg-no-repeat bg-center top- ]`} ></div>
        <MdNavigateNext style={rigjtArrowtyles} onClick={goToNext}/>
    </div>
  )
}
