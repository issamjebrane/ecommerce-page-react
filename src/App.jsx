import React, { useState ,createContext, useReducer} from 'react'
import Card from './components/Card'
import Images from './components/Images'
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Collections from './components/Collections'
export const theProvider = createContext()

function App() {
  const images = [
    {index:'image2',url:'images/image-product-1.jpg'},
    {index:'image3',url:'images/image-product-2.jpg'},
    {index:'image4',url:'images/image-product-3.jpg'},
    {index:'image1',url:'images/image-product-4.jpg'},
  ]
  const initialState ={
    count : 0
  }
  const initialReveal ={
    reveal : false
  }
  const [counter, patching] = useReducer(reducer,initialState);
  const [checkoutReveal,revealing] = useReducer(revealer , initialReveal)
  function reducer(state,action){
    switch (action.type){
      case  true :
          return {count :action.actionning}
      default :
        throw new Error();
    }
  }

  function revealer(state , action){
    switch(action.type){
      case 'set' :
        return {reveal : action.revealing}
    }
  }
  const value ={
    revealing,
    patching
  }
  return (
    <div className='px-60 xl:px-24 lg:px-16 sm:px-0 h-screen w-screen'>
      <theProvider.Provider value={value}>
      <BrowserRouter> 
      <Nav reveal={checkoutReveal.reveal}>
        <Routes>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/men' element={<men/>}/>
          <Route path='/women' element={<women/>}/>
          <Route path='/contact' element={<contact/>}/>
          <Route path='/about' element={<about/>}/>
        </Routes>
        </Nav>
      </BrowserRouter>
      <div className='p-16 sm:p-0 py-40 xl:px-6 grid grid-cols-2 h-5/6 sm:block gap-14'>
      <Images images={images} class='relative' count={counter.count} reveal={checkoutReveal.reveal}/>  
      <Card count={counter.count}/>
      </div>
      </theProvider.Provider>
    </div>
  )
}

export default App
