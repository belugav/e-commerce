import React, { useState} from "react";
import './ItemCount.css'

export default function ItemCount({data, onAdd}) {

    const [itemCount, setItemCout] = useState(1)

    const updateItem=() => {
         onAdd(itemCount-1)
        if ( data.stock>1) {
            setItemCout(itemCount +1)
        data.stock--
        }
        
    }

    const removeItem=() => {
        if (itemCount >1) {
         setItemCout(itemCount -1)
         data.stock++
         }
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




  
        
