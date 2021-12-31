import React, {useContext} from 'react'
import './CartPage.css'
import cartContext from '../../context/cartContext'

export default function CartPage() {
   const {products,totalPrice}= useContext(cartContext)
   
   return(
    <>
      <h1>Listado de Viajes a comprar</h1>

     {products.map((product) =>{
         return(
           
         
             <div className="TotalcartContainer" key={product.id}>
                 <div className='ContentCartinfo'>
                     <img className="cartMinImage" src={`../assets/${product.image}`} alt="imagen del producto" />
                  <p className='infoElement'>Destino: <strong> {product.name} </strong> </p>
                  <p className='infoElement'>Precio: <strong>$ {product.price} </strong></p>
                  <p className='infoElement'>cantidad:<strong>{product.quantity} </strong></p>
                
                  </div>
             </div>
             
           )
     })}
     <h2>Total:$ {totalPrice}</h2>
 </>
  )

  
}