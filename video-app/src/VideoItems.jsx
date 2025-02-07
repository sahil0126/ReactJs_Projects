import React from 'react'
import { IoMdEye } from "react-icons/io";

const VideoItems = (props) => {

  console.log(props.data);

  let {item,setVideo,setTitle}=props.data 

  let {thumbnailUrl,views,title,videoUrl}=item

  let changeVideo = () => {
    setVideo(videoUrl)
    setTitle(title)
  }
  




  return (
   <main className='videoItem' >

      <div className='rightImageContainer' >

        <img src={thumbnailUrl} className='rightimg' onClick={changeVideo}  />

      </div>

      <h3> <IoMdEye /> {views}</h3>




   </main>
  )
}

export default VideoItems