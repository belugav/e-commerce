import React, {useEffect, useState} from "react";
import './ItemCount.css'
//import '../ItemList/ItemList.js'

export default function ItemCount({data}) {

    const [itemCount, setItemCout] = useState(0)

    const updateItem = () => {
        itemCount < data.stock && setItemCout(itemCount + 1)
    }

    const removeItem = () => {
        itemCount > 0 && setItemCout(itemCount - 1)
    }

    //console.log ("hola", data)

    return (
        <div className="card-item-product">

                       
                       <div className="item-counter">
                           <spam>{data.name}</spam>
                           <img src={`../../assets/${data.img}`} alt="imagen"/>

                           <button  onClick={removeItem}>-</button>
                           <p>{itemCount}</p>
                           <button  onClick={updateItem} >+</button>
                       </div>
                   <span>Stock: {data.stock}</span>
                   <button>Agregar al carrito</button>

           
  </div>
    )
}




  
        
