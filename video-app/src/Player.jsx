import React, { useRef, useState } from 'react'

const Player = (props) => {
  console.log(props);
  console.log(props.data);

  let {video,title}=props.data

  let videoRef=useRef()

  let [play,setPlay]=useState(true) //to play/pause the video
  let [muteVideo,setMuteVideo]=useState(true)

  let playOrPause = () => {

    videoRef.current.autoplay=true


    if(play==true){
      videoRef.current.play()
    }
    else{
      videoRef.current.pause()
    }
    setPlay(!play)   //true => false , false => true
  }

  let muteOrUnmute = () => {
    videoRef.current.muted = muteVideo
    setMuteVideo(!muteVideo)

  }

  


  
  return (
    <>
    <h1>Video Player</h1>
    <video src={video} ref={videoRef} className='leftVideo' onClick={playOrPause} > </video>
    <h2>{title}</h2>
    <div>
      <button className='btn'  onClick={()=>videoRef.current.play()}  >Play</button>
      <button className='btn' onClick={()=>videoRef.current.pause()} >Pause</button>
      <button className='btn' onClick={muteOrUnmute} >{muteVideo ? "Mute" : "Unmute"}</button>
    
    </div>



    </>
  )
}

export default Player