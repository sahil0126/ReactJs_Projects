import React from 'react'
import Navbar from './crudfiles/Navbar'
import {  RouterProvider } from 'react-router-dom'
import { crudPath } from './routing/Route'
import './global.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <RouterProvider router={crudPath} >

    </RouterProvider>
    
    </>
  )
}

export default App