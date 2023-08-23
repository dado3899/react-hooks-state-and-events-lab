import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  

  const appClass = inCart ? "in-cart" : ""
  const toCart = inCart ? "Remove from cart" : "Add to Cart"
  const addRemove = inCart ? "remove" : "add" 
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addRemove} onClick={()=>setInCart(!inCart)}>{toCart}</button>
    </li>
  );
}

export default Item;
