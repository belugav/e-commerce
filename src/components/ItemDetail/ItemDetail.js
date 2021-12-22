import {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

export default function ItemDetail({data}){

   const [quantityItem, setquantityItem]=useState (0)
   const  [itemCart, setitemCart]=useState(

      { 
          id:data.id,
         name:data.name,
         quantity:0
      }

   )


   const onAdd = (value) =>{

   itemCart.quantity=value


}

const sendItem =()=>{

console.log ("item cart: ", itemCart )

}

return (
    
           <>
           <div className="detailParent">
        
        
        <img className="imgItemDetail" src={`../../assets/${data.img}`} alt="imagen"/>

        <div className="detailData">
               <h1 className="tituloProducto"> {data.name}</h1>
                <h2 className="detalleProducto">Precio:{data.price}</h2>
                <h2 className="detalleProducto">Stock:{data.stock}</h2>
                <ItemCount data={data} onAdd={onAdd}/>
                <button>
                   <Link to="/cart" onClick={sendItem}>Comprar</Link>
                </button>

              
             </div>

           </div>
           </>

   
)
}