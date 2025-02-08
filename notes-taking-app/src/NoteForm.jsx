import React, { useContext } from "react";
import { NoteContext } from "./NoteProvider";



const NoteForm = () => {

  let data=useContext(NoteContext);
  console.log(data);
  
  let {state,task,setState,addTask}=data;

  let {title,description,category}=state;

  let handleChange= (e)=> {
    let {name,value}=e.target
    setState({...state,[name]:value});
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    addTask(title,description,category)
    setState({title:"",description:"",category:""})
  }







  return (
    <main className="formBlock">
      <form onSubmit={handleSubmit} >
        <div className="form-content">
          <label>Title</label>
          <input type="text" name='title' value={title} onChange={handleChange} />
        </div>

        <div className="form-content">
          <label>Description</label>
          <textarea cols="50" rows="10" name='description' value={description} onChange={handleChange} >
            {" "}
          </textarea>
        </div>

        <div className="form-content" >
            <label>Category</label>
            <select>
                <option value="">Select</option>
                <option value="general">General</option>
                <option value="">Finance</option>
                <option value="">Technical</option>
            </select>
        </div>


        <button>Submit</button>










      </form>
    </main>
  );
};

export default NoteForm;
