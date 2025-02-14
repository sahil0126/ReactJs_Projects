import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ handleSearch }) => {
  return (
    <div  className="searchbox"  >
      <input
        className="searchipbox"
        type="text"
        placeholder="Search with First Name"
        onInput={(e) => handleSearch(e.target.value)}
      />
      <IoSearch className="searchicon" />
    </div>
  );
};

export default Search;
