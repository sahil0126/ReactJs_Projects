// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "../axios.jsx"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


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



  let handleDelete = (id) => {
    axios.delete(`candidate/${id}`).then(()=>{
      toast.error("Data Deleted")
    })
  }
  
  
  
  
  
  
  
  
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
                  <td><Link  to={`/edituser/${value.id}`}   > <MdEdit /></Link></td>
                  <td><span onClick={()=>{handleDelete(value.id)}} ><MdOutlineDeleteOutline /></span></td>

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