import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "../axios"
import toast from 'react-hot-toast'

const Edituser = () => {

  // let parameter = useParams()
  // console.log(parameter);  //{id:"1"}
  // let {id} = parameter

  let {id}=useParams();   //! accessing parameter from url

  let navigator =useNavigate();

  



  let [state,setState]=useState({
    firstname:"",
    lastname:"",
    age:"",
    city:""
  })

  let {firstname,lastname,age,city}=state

  let handleChange = (e) => {
    let {name,value}=e.target
    setState({...state,[name]:value})
  }

  useEffect(() => {
    axios.get(`candidate/${id}`).then((response) => {
      
      console.log(response.data);
      setState(response.data);
      
    }
  
  )
  },[]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = {firstname,lastname,age,city};
    axios.put(`candidate/${id}`,payload);
    navigator("/users")
    toast.success("Data Edited Successfully")
  }





  return (
    <main className="content">
      <section className="innnercontent">
        <h1>Edit User</h1>

        <form  onSubmit={handleSubmit} >
          <div className="form-group">
            <label>First Name:-</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-group">
            <label>Last Name:-</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              value={lastname}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-group">
            <label>Age:-</label>
            <input
              type="text"
              placeholder="Enter Age"
              name="age"
              value={age}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-group">
            <label>City:-</label>
            <input
              type="text"
              placeholder="Enter City Name"
              name="city"
              value={city}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-group">
            <button   >Edit User</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Edituser