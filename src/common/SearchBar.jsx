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
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
