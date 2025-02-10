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


    let handleCategory = (e)=>{
        setSelectedCategory(e.target.value)
    }
    let handleDelete = (x)=>{
        let filteredItems=task.filter(item=>item.id != x)
    }
    let handleUpdate = (y) => {
        let remainingItems = task.filter(item => item.id != y)
        let editItem=task.find(item=> item.id==y)
        setTask(remainingItems)
        setState(editItem)
    }





    let [task,setTask]=useState(getLocalItems()) // to store all the notes together

    const addTask = (title,description,category)=>{
        setTask([...task,{title,description,category,id:uuidv4()}])
    }

    //to add task in localStorage
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(task))
                            //"key","value"
    },[task])

    let [selectedCategory,setSelectedCategory]=useState("all")






    return <NoteContext.Provider value={{state,setState,task,addTask, selectedCategory , setSelectedCategory,handleCategory,handleDelete,handleUpdate}} >
        {props.children}
        </NoteContext.Provider>;
};

export default NoteProvider;
