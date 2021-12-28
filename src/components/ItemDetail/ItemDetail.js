import {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import cartContext from '../../context/cartContext'


export default function ItemDetail({data}){

   const [quantityItem, setquantityItem]=useState (0)
   const {addProducts, products}=useContext(cartContext)
   const  [itemCart, setitemCart]=useState(

      { 
          id:data.id,
         name:data.name,
         price:data.price,
         image:data.img,
         quantity:0
      }

   )


   const onAdd = (value) =>{

   itemCart.quantity=value


}

const sendItem =()=>{

addProducts(itemCart)
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
               
                   <button  onClick={sendItem}>Comprar</button>
               

              
             </div>

           </div>
           </>

   
)
}