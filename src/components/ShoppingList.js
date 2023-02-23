import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setselectedCategory] = useState("All")
  function handleChange(e){
    console.log(e.target.value)
    setselectedCategory(e.target.value)
  }

  const filteredCategory = items.filter((item) => {
    if(selectedCategory === "All"){
      return true
    }
    return item.category === selectedCategory
  })
  console.log(filteredCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
