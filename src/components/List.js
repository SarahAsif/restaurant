import React from "react";
import data from "../List.json";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/addToCart";

const List = (props) => {
  const dispatch = useDispatch();
  const { id, name, price } = props;

  const handleAddToCart = () => {
    const product = { id, name, price };
    dispatch(addToCart(product));
  };

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
          <>
            <li key={item.id}>{item.text}</li>
            <button>Order Now</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
