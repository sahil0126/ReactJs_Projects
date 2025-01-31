// import React from 'react'

const CourseForm = (props) => {

    // console.log(props);
    
    let{course,trainer,handleChange}=props




  return (
    <>
    <form>
        <div className="form-group" >
            <label>Course</label>
            <input type="text" placeholder="Enter Course Name"
            name="course"
            value={course}
            onChange={handleChange}
            
            ></input>

        </div>


        <div className="form-group" >
            <label>Trainer</label>
            <input type="text" placeholder="Enter Trainer Name" 
            name="trainer"
            value={trainer}
            onChange={handleChange}
            
            
            ></input>

        </div>

        <div className="form-group">

            <button>Submit</button>

        </div>
       



    </form>
    
    
    </>
  )
}

export default CourseForm