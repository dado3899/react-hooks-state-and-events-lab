import React, { useState } from "react";

function Item({ name, category }) {
  const [incart, setincart] = useState(false)
  
  function handleclick(){
    setincart(!incart)
  }

  const appClass = incart ? "in-cart" : ""
  const cartStatus = incart ? "Remove From Cart" : "Add to Cart"
  const cartClass = incart ? "remove" : "add"

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handleclick}>{cartStatus}</button>
    </li>
  );
}

export default Item;
