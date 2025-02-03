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

    let handleSubmit = (e) => {
      e.preventDefault()

      let newItem = {
        id:id,
        course: course,
        trainer:trainer
      }

      setState({
        items:[...items,newItem],
        id:uuidv4(), //generating id for next data
        course:"",
        trainer:""
      })
    }

    let handleDelete=(x)=>{ // x=> id of data to be deleted

      let filteredItems = items.filter((value)=> value.id != x)
      console.log(filteredItems);
      setState({...state,items:filteredItems})
      

    }


    let handleUpdate = (y)=>{  //y=> id of data to be updated , y=2

      //!restItems (Data which should not be updated and assign it to items)
      let restItems=items.filter((value)=>value.id != y)  // 1!=2, 2!=2, 3!=3
      console.log("restItems:-",restItems); 

      //!updateItems (Data which has to be updated,so assign it to i/p fields for updating)
      let updateItem = items.find((value)=>value.id==y)
      console.log("updatedItem:-",updateItem);

      setState({
        items:restItems,
        course:updateItem.course,
        trainer:updateItem.trainer,
        id:updateItem.id
      })
      
      
    }







  return (
    <>
      <article>
        <h1>ToDoList</h1>
        <main>
          <CourseForm course={course} 
          trainer={trainer}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
         
          />
          <ToDolist  items={items} handleDelete={handleDelete}  handleUpdate={handleUpdate} />
        </main>
      </article>
    </>
  );
};

export default App;
