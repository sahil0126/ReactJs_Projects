import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const create = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Data Saved");
        
        let payload={name,email};
        axios.post("https://682f0ab1746f8ca4a47f8878.mockapi.io/crud-app-api",payload)

        .then(()=>{
            navigate("/read");
        });

    }

    




  return (
    <>
      <form   onSubmit={handleSubmit}>

        <div className="container">

        <h2>Create</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
           type="text" 
          className="form-control" 
          onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
          type="email"
           className="form-control" 
           onChange={(e)=>setEmail(e.target.value)}
           />
        </div>

        {/* {name}
        {email} */}

        <button 
        type="submit" 
        className="btn btn-primary"
      
        >
          Submit
        </button>

        </div>

      </form>
    </>
  );
};

export default create;
