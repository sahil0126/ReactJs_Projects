import React from 'react'
const Dynamicnavb = ({arr}) => {

    console.log(arr);
    







  return (
    
    
    <>

    <nav className='bg-yellow-300 h-20  font-mono' >

    <div className='flex space-x-2 ml-240 ' >
        {arr.map((element,index)=>{

            return (
                <React.Fragment key={index}>

                <h2 className='m- text-black font-bold mt-10 text-blue-950 text-2xl' >{element}</h2>
                </React.Fragment>
            )

        })}
    </div>




    </nav>

    
    
    
    </>
  )
}

export default Dynamicnavb