import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "../App.css";

const Search = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="p-1">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
          className="textfield"
        />
      </div>
    </div>
  );
};

export default Search;
