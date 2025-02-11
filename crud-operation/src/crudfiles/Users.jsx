// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "../axios.jsx"

const Users = () => {
  
  let [userInfo,setUserInfo] = useState([])

  function getData(){
    axios.get("/candidate")
    .then((response)=>{
      console.log(response.data);
      setUserInfo(response.data);
      
    })
  }

  useEffect(()=>{
    getData();
  },[])
  
  
  
  
  
  
  
  
  return (
    <>
    <section className='userBlock'>
      <article className="container">
        <h1>User</h1>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>City</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {
            userInfo.map((value)=>{
              return (
                <tr key={value.id} >
                  <td>{value.firstname}</td>
                  <td>{value.lastname}</td>
                  <td>{value.age}</td>
                  <td>{value.city}</td>
                  <td><MdEdit /></td>
                  <td><MdOutlineDeleteOutline /></td>

                </tr>
              )
            })
          }

        </table>
      </article>

    </section>
    
    
    </>
  )
}

export default Users