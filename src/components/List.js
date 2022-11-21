import React from "react";
import data from "../List.json";

const List = (props) => {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
