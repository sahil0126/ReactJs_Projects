import React from 'react'



const DisplayUsers = ({users,setToggle}) => {

    let {firstname , lastname , city , age} = users

  return (

    <div className='viewbox' >

       <h2>Name : {firstname}</h2>

       <button onClick={()=>setToggle(false)}   >View more</button>

    </div>

  )

}



export default DisplayUsers 