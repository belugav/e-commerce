import React, { useState} from "react";
import './ItemCount.css'

export default function ItemCount({data, onAdd}) {

    const [itemCount, setItemCout] = useState(0)

    const updateItem=() => {
        onAdd(itemCount +1)
       data.stock >0 ? setItemCout(itemCount +1) : data.stock--
        
        
    }

    const removeItem=() => {
       itemCount >0 ? setItemCout(itemCount -1) : data.stock++
           
    }

    return (
        <div className="card-item-product">

                       
                       <div className="item-counter">
                          
                           <button className="cantDeItems" onClick={removeItem}>-</button>
                           <p>{itemCount}</p>
                           <button className="cantDeItems"  onClick={updateItem} >+</button>
                       </div>
                 
                   

           
  </div>
    )
}




  
        
