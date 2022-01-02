import React, { useState} from "react";
import './ItemCount.css'

export default function ItemCount({data, onAdd}) {

    const [itemCount, setItemCout] = useState(1)


    const updateItem=() => {
    if (itemCount===data.stock){
        return;
    }
       setItemCout(itemCount+1)
       
   }


 
   const removeItem=() => {
    if (itemCount===1){
        return;
    }
       setItemCout(itemCount-1)
       
   }


    return (
        <div className="card-item-product">

                       
                       <div className="item-counter">
                          
                           <button className="cantDeItems" onClick={removeItem}>-</button>
                           <p>{itemCount}</p>
                           <button className="cantDeItems"  onClick={updateItem} >+</button>
                       </div>
                       <button  onClick={()=>onAdd(itemCount)}>Comprar</button>
                   

           
  </div>
    )
}




  
        
