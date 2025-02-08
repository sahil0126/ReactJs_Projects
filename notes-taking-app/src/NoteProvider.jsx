import React, { createContext,useEffect,useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let NoteContext = createContext();

const NoteProvider = (props) => {

    let [state,setState]=useState({
        title:"",
        description:"",
        category:""
    })

    //to get data from localStorage
    let getLocalItems=()=>{
        let lists=localStorage.getItem("lists")
        if (lists) {  // if lists variable contains some data
            return JSON.parse(lists)
        }
        else{
            return[]
        }
    }

    let [task,setTask]=useState(getLocalItems()) // to store all the notes together

    const addTask = (title,description,category)=>{
        setTask([...task,{title,description,category,id:uuidv4()}])
    }

    //to add task in localStorage
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(task))
                            //"key","value"
    })




    return <NoteContext.Provider value={{state,setState,task,addTask}} >
        {props.children}
        </NoteContext.Provider>;
};

export default NoteProvider;
