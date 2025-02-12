import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
   <>
    <Toaster/>
   <main className="layout">
    <section className="sidebar">
        <ul>
            <li>
                <Link to='/createuser'  >CreateUser</Link>
            </li>
            <li>
                <Link to='/users'  >Users</Link>
            </li>
        </ul>
    </section>
    <Outlet/>
   </main>
   

   
   </>
  )
}

export default Layout