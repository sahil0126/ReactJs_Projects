import React from 'react'
import Navbar from "../crudfiles/Navbar"
import { Toaster } from 'react-hot-toast'
import { Link, Outlet,NavLink } from 'react-router-dom'


const Layout = () => {
  return (
   <>
    <Toaster/>
   <Navbar/>
   <main className="layout">
    <section className="sidebar">
        <ul>
            <li>
                <NavLink to='/createuser'  style={({isActive})=>{
                    return {
                        color:isActive ? "yellow" :"darkblue",
                        backgroundColor: isActive ? "darkblue" : "yellow"
                    }

                }}    >CreateUser</NavLink>
            </li>
            <li>
                <NavLink to='/users' style={({isActive})=>{
                    return {
                        color:isActive ? "yellow" :"darkblue",
                        backgroundColor: isActive ? "darkblue" : "yellow"
                    }

                }}  >Users</NavLink>
            </li>
            <li>
                <NavLink to='/allusers' style={({isActive})=>{
                    return {
                        color:isActive ? "yellow" :"darkblue",
                        backgroundColor: isActive ? "darkblue" : "yellow"
                    }

                }}  >All Users</NavLink>
            </li>
        </ul>
    </section>
    <Outlet/>
   </main>
   

   
   </>
  )
}

export default Layout