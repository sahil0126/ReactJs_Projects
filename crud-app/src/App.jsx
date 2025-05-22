import React from 'react'
import Create from './create'
import Read from './Read'
import Update from './Update'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'


const App = () => {
  return (    
    <div>

        <BrowserRouter>

        <Routes>

          <Route path='/' element={<Create/>} ></Route>  
          <Route path='/read' element={<Read/>} ></Route>  
          <Route path='/update' element={<Update/>} ></Route>  


     
        
        </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App  