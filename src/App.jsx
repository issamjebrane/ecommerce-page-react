import React from 'react'
import Card from './components/Card'
import Images from './components/Images'
import Nav from './components/Nav'

const images = [
  {index:'image2',url:'images/image-product-1.jpg'},
  {index:'image3',url:'images/image-product-2.jpg'},
  {index:'image4',url:'images/image-product-3.jpg'},
  {index:'image1',url:'images/image-product-4.jpg'},
]
function App() {

  return (
    <div >
      <Nav />  
      <Images images={images}/>  
      <Card/>
    </div>
  )
}

export default App
