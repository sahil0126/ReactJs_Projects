import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayRegUsers from './DisplayRegUsers'


const RegisteredUsers = () => {

    let [state,setState]=useState([])

    let fetchRegUsers= async () => {
        let {data} = await axios.get("http://localhost:5000/registeredusers")
        console.log(data);
        setState(data)

        
    }

    useEffect (()=>{
        fetchRegUsers()
    },[])





  return (
    <>
    
    <DisplayRegUsers  state={state} />
    
    
    </>
  )
}

export default RegisteredUsers