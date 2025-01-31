// import React from 'react'
import "./global.css";
import CourseForm from "./CourseForm";
import ToDolist from "./ToDolist";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {

    let [state,setState]=useState({
        course:"",
        trainer:"",
        items:[],  //to store multiple course,trainer's data together
        id:uuidv4() //to generate unique id
    })

    let {course,trainer,items,id}=state

    let handleChange = (e)=>{
        let {name,value}=e.target
        setState({...state,[name]:value})  //updateFunc({...stateVariable,[name]:value})
    }







  return (
    <>
      <article>
        <h1>ToDoList</h1>
        <main>
          <CourseForm course={course} 
          trainer={trainer}
          handleChange={handleChange}
          />
          <ToDolist />
        </main>
      </article>
    </>
  );
};

export default App;
