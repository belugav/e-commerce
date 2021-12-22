import React, { useState} from "react";
import './ItemCount.css'

export default function ItemCount({data, onAdd}) {

    const [itemCount, setItemCout] = useState(0)

    const updateItem = () => {
       // itemCount < data.stock && setItemCout(itemCount + 1)
      
       if (itemCount<data.stock){

        setItemCout (itemCount+1)
        onAdd (itemCount+1)

       }
    }

    const removeItem = () => {
       // itemCount > 0 && setItemCout(itemCount - 1)
        

       if (itemCount>data.stock){

        setItemCout (itemCount-1)
       onAdd (itemCount-1)

       }


    }

    return (
        <div className="card-item-product">

                       
                       <div className="item-counter">
                          
                           <button  onClick={removeItem}>-</button>
                           <p>{itemCount}</p>
                           <button  onClick={updateItem} >+</button>
                       </div>
                 
                   <button>Agregar al carrito</button>

           
  </div>
    )
}




  
        
