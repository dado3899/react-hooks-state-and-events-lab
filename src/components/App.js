import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Formcomponent from "./form";

function App() {
  const [indarkmode, setindarkmode] = useState(false)
  const [foodlist, setfoodlist] = useState(itemData)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleclick(){
    setindarkmode(!indarkmode)
  }
  const appClass = indarkmode ? "App dark" : "App light"
  const ButtonName = indarkmode ? "Light Mode" : "Dark Mode"
  //console.log(appClass)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleclick}>{ButtonName}</button>
      </header>
      <ShoppingList items={foodlist} />
      <Formcomponent foodlist = {foodlist} setfoodlist = {setfoodlist}/>
    </div>
  );
}

export default App;
