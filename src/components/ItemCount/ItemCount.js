import React, {useState} from "react";
import './ItemCount.css'


export default function ItemCount(data) {

    const [itemCount, setItemCout] = useState(0)

    const updateItem = () => {
        itemCount < data.stock && setItemCout(itemCount + 1)
    }

    const removeItem = () => {
        itemCount > 0 && setItemCout(itemCount - 1)
    }

    console.log ("hola", data)

    return (
        <div className="card-item-product">


<span>Cantidad: </span>
                       
                       <div className="item-counter">
                           <button  onClick={removeItem}>-</button>
                           <p>{itemCount}</p>
                           <button  onClick={updateItem} >+</button>
                       </div>
                   
                   <button>Agregar al carrito</button>

           
  </div>
    )
}




  
        
