import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // useState() return [inital, function]
  const [category, setCategory] = useState("All")

  console.log(category)
  // function simpleState(initial){
  //   const variable = initial
  //   function setVariable(){
  //     // BE ABLE TO CHANGE STATE
  //     // BE ABLE TO TELL REACT TO RERENDER
  //   }
  //   return [variable,setVariable]
  // }

  const filteredItems = items.filter((item)=>{
    if (item.category === category || category === "All"){
      return true
    }
    return false
  })
  // console.log(filteredItems)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>setCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
