import React from 'react'
import { IoMdEye } from "react-icons/io";

const VideoItems = (props) => {

  console.log(props.data.item);

  let {thumbnailUrl,views}=props.data.item
  




  return (
   <main className='videoItem' >

      <div className='rightImageContainer' >

        <img src={thumbnailUrl} className='rightimg' />

      </div>

      <h3> <IoMdEye /> {views}</h3>




   </main>
  )
}

export default VideoItems