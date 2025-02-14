import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import { crudPath } from './routing/Route'
import './global.css'

const App = () => {
  return (
    <>
  
    <RouterProvider router={crudPath} >

    </RouterProvider>
    
    </>
  )
}

export default App