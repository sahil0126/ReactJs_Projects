import React from "react";

const NoteForm = () => {
  return (
    <main className="formBlock">
      <form>
        <div className="form-content">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="form-content">
          <label>Description</label>
          <textarea cols="50" rows="10">
            {" "}
          </textarea>
        </div>

        <div className="form-content" >
            <label>Category</label>
            <select>
                <option value="">Select</option>
                <option value="">General</option>
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
