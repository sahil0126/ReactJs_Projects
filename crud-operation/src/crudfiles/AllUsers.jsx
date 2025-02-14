import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "../axios";
import DisplayUsers from "./DisplayUsers";

const AllUsers = () => {
  let [searchTerm, setSearchTerm] = useState("");
  let [state,setState]=useState([])

  let handleSearch = (term) => {
    setSearchTerm(term);
  };

  let fetchUser = async ()=> {
    let {data} = await axios.get("/candidate")
    console.log(data);
    setState(data)
    
    
  }

  let filteredUsers = state.filter((value)=> {
    if (searchTerm == "") {
      return value
    }
    else if(value.firstname.toLowerCase().includes(searchTerm.toLowerCase())){
      return value
    }
  }).map((users)=> <DisplayUsers  users={users}  key={users.id} />)


  useEffect(()=>{
    fetchUser()
  },[])










  return (
    <>
      <Search handleSearch={handleSearch} />
      {
        state==null ? "Loading..." : filteredUsers
      }
    </>
  );
};

export default AllUsers;
