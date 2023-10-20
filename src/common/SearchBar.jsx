import React, { useState } from "react";
import "./index.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearch, searchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;
    onSearch(val);
    // setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
    // <div className="search-container">
    //   <input
    //     type="text"
    //     placeholder="Search for books by title"
    //     value={searchTerm}
    //     onChange={handleInputChange}
    //     className="search-input"
    //   />
    //   <AiOutlineSearch />
    //   {/* <button onClick={handleSearch} className="search-button">
    //     Search
    //   </button> */}
    // </div>
  );
};

export default SearchBar;
