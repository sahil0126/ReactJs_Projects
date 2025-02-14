import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import axios from 'axios'

const Login = () => {  



  let navigate = useNavigate()



     let [loginData , setLoginData] = useState({

      email : "",

      password : "" ,

      token : uuidv4()

     })

     let {email , password , token} = loginData 



     let handleChange = (e)=>{

      let {name , value} = e.target 

      setLoginData({...loginData , [name]: value}) 

     }   

     

     let handleSubmit =async (e)=>{

        e.preventDefault() 

       

        let {data} =await axios.get("http://localhost:5000/registeredusers")



        let filteredData = data.filter((emp)=>{

           return (

              emp.email === loginData.email && emp.password === loginData.password

           )

        }) 



        if(filteredData.length > 0){ // user has logged in

            navigate("/users")

            localStorage.setItem("TOKEN", token)

            toast.success("Logged in Successfully")

        } else {

            navigate("/register")

            toast.error("Something went wrong")

        }



     }

  return (

    <main className="content">

    <section className="innercontent">

      <h1>Login</h1>

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

          <button>Login</button>

        </div>

      </form>

    </section>

  </main>

  )

}



export default Login