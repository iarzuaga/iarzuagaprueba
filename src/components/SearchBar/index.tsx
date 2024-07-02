import { useState } from "react";
import "./index.css";

const SearchBar = (props: { onSearch: any }) => {
  const { onSearch } = props;
  const [value, setValue] = useState("");
  const handleClick = async () => {
    onSearch(value, 1);
  };
  
  return (
    <div className="search-container">
      <input placeholder="Search your movies here..." onChange={(e) => {setValue(e.target.value)}} value={value} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
