import React, { useState } from "react";

function Formcomponent({foodlist, setfoodlist}){
    //console.log(foodlist)
    const [newFood, setnewFood] = useState("")
    const [category, setnewCategory] = useState("")
    function submitForm(e){
        e.preventDefault()
        let newFoodObj = {id: foodlist.length+1, name:newFood,category:category}
        let newlist = [...foodlist, newFoodObj]
        setfoodlist(newlist)
        //console.log(newlist)
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type = "text" onChange={(e) => setnewFood(e.target.value)} value={newFood}/>
                <input type = "text" onChange={(e) => setnewCategory(e.target.value)} value={category}/>
                <button type = "submit"> Submit </button>
            </form>
        </div>
    )
}

export default Formcomponent;