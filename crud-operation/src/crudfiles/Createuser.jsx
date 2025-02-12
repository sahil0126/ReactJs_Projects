import React, { useState } from "react";
import axios from '../axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Createuser = () => {

  let navigator=useNavigate()



  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: "",
  });

  let {firstname,lastname,age,city}=state

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e)=> {
    e.preventDefault()
    let payload={firstname,lastname,age,city}
    axios.post("/candidate",payload)
    navigator("/users")
    toast.success("User Data is Created")
  }





  return (
    <main className="content">
      <section className="innnercontent">
        <h1>Create User</h1>

        <form onSubmit={handleSubmit}  >
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
            <button   >Create User</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Createuser;
