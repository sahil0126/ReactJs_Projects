import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://682f0ab1746f8ca4a47f8878.mockapi.io/crud-app-api")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      },[]);
  }

  function handleDelete(id){
    axios.delete(`https://682f0ab1746f8ca4a47f8878.mockapi.io/crud-app-api/${id}`).then(()=>{
        getData();
    })
  }

  const setToLocalStorage = (id,name,email) => {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
  }





  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <div className="container">
        <h2>Read</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((element) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{element.id}</th>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  
                  <td>
                    <Link to={"/update"}  >
                    <button className="btn-success"
                    onClick={()=>{
                        setToLocalStorage(
                            element.id,
                            element.name,
                            element.email
                        )
                    }}
                    >Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn-danger"    
                    onClick={()=>handleDelete(element.id)}
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
