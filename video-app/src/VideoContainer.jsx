import React, { useState } from 'react'
import Player from './Player'
import VideoItems from './VideoItems'
import VideoData from './video.json'

const VideoContainer = () => {

  let [state,setState]=useState(VideoData)
  console.log(state);

  let [video,setVideo] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
  
  let[title,setTitle]=useState("Big Buck Bunny")



  


  return (
   <main className='videoBlock'>
    <aside className='left' >
      <Player data={{video,title}} />
      </aside>
    <aside className='right' >

      {
        state.map((item)=>{
          return (

            <VideoItems key={item.id} data={{item}} />
          )
        })

      }
      </aside>


   </main>
  )
}

export default VideoContainer