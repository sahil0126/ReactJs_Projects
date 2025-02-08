import React from "react";

const Display = () => {
  return (
    <main className="displaySection">
      <div className="selectDisplayNotes">
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
    </main>
  );
};

export default Display;
