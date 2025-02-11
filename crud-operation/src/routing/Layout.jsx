import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>

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