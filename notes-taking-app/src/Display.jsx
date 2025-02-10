import React, { useContext } from "react";
import { NoteContext } from "./NoteProvider";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Display = () => {

  let data=useContext(NoteContext)
  console.log(data);
  let {task,selectedCategory,handleCategory,handleUpdate,handleDelete}=data


  




  return (
    <main className="displaySection">
      <div className="selectDisplayNotes" name='selectedCategory' value={selectedCategory} onChange={handleCategory} >
        <label>Select a Category</label>
        <input type="radio" name="selectedCategory" value="all" defaultChecked/>{" "}
        <span>All</span>
        <input type="radio" name="selectedCategory" value="general" />
        <span>General</span>
        <input type="radio" name="selectedCategory" value="finance" />
        <span>Finance</span>
        <input type="radio" name="selectedCategory" value="technical" />
        <span>Technical</span>
      </div>


      <section className="displayBlock" >

        <div className="displayNote">

          {task.length == 0 ? "Loading..." : task.map((item)=>{
            return selectedCategory=="all" ? (
              <div className="note" key={item.id}  >
                <h1>Title: {item.title}</h1>
                <p>Description:{item.description}</p>
                <p>Category:{item.category}</p>
                <span onClick={()=> handleUpdate(item.id)}  ><FaEdit /></span>
                <span  onClick={()=>handleDelete(item.id)}    ><MdDelete /></span>

              </div>
            ) : (
              selectedCategory==item.category && (
                <div className="note" key={item.id}  >
                <h1>Title: {item.title}</h1>
                <p>Description:{item.description}</p>
                <p>Category:{item.category}</p>
                <span onClick={()=> handleUpdate(item.id)}  ><FaEdit /></span>
                <span  onClick={()=>handleDelete(item.id)}    ><MdDelete /></span>
                </div>
              )
            )

          })}















        </div>



      </section>






















    </main>
  );
};

export default Display;
