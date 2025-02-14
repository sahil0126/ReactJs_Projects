import React, { useState } from 'react'

import axios from 'axios' 

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

const Register = () => { 



  let navigate = useNavigate()



   let [registerData , setRegisterData]= useState({

         email : "",

         password : "",

         profpic : ""

   })



   let {email , password , profpic} = registerData  



   let handleChange = (e)=>{

    let {name , value} = e.target 

    setRegisterData({...registerData , [name]: value})

   }  



   let handleSubmit =async (e)=>{

     e.preventDefault()

     let payload = {email , password , profpic} 

      await axios.post("http://localhost:5000/registeredusers" , payload)

      navigate("/login")

      toast.success("Registered Successfully")

   }





  return (

    <main className="content">

    <section className="innercontent">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Email</label>

          <input type="email" 

          placeholder="Enter email"

          name="email"

          value={email} 

          onChange={handleChange}/>

        </div>



        <div className="form-group">

          <label>Password</label>

          <input type="password" 

          placeholder="Enter password" 

          name="password"

          value={password}

          onChange={handleChange}/>

        </div>



        <div className="form-group">

          <label>Profile Pic</label>

          <input type="text" 

          placeholder="Enter pic url" 

          name="profpic"

          value={profpic}

          onChange={handleChange}/>

        </div>



        <div className="form-group">

          <button>Register</button>

        </div>

      </form>

    </section>

  </main>

  )

}



export default Register 