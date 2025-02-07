import React, { createContext } from "react";

export let NoteContext = createContext();

const NoteProvider = (props) => {

    let [state,setState]=useState({
        title:"",
        description:"",
        category:""
    })

    let [task,setTask]=useState([]) // to store all the notes together

    const addTask = (title,description,category)=>{
        setTask([...task,{title,description,category}])
    }




    return <NoteContext.Provider>
        {props.children}
        </NoteContext.Provider>;
};

export default NoteProvider;
