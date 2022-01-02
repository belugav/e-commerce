import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useState, useEffect, useContext} from 'react';
import './CartWidget.css'
import {Link} from 'react-router-dom' 
import cartContext from '../../context/cartContext';


const CartWidget= () => {

    const [showCart, setShowCart]=useState (false)
    const{products,totalPrice,clearCart,removeItem,totalFinal}=useContext(cartContext)
    const openCart =()=>{
        setShowCart (!showCart)

        console.log('product object',products)
        console.log ('total price', totalPrice)
    }

    return (

        <div className="cart-container">
            
            <ShoppingCartIcon onClick={openCart}/>


            {showCart ?
            <div className={`box-cart active'}`}>
            {products.length===0 ? (
                <h2>no hay viajes agregados</h2>
            ) :(
               <>
                {products.map((product) =>{
                return(
                      <div className='item-cart-list'>
                     <div>
                     <img  className="cartMinImage" src={`../../assets/${product.image}`} alt="imagen del producto" />
                     </div>
                     <p> <strong> {product.name}  </strong> </p>
                     <p>Precio:$ <strong> {product.price}  </strong></p>
                    <p>Cantidad: <strong> {product.quantity} </strong></p>
                     <button onClick={()=>{removeItem(product.id)}}> X </button>
                     </div> 
                    
                     

                )
            })}
                     
                    
             <div>
                <p>Total</p>
                {/* console.log("el precio total es",{totalPrice}) */}
                 <span>$ {totalFinal}</span>
             </div>

                    <button onClick={()=>{clearCart()}}> Vaciar Carrito</button>
                    <Link to='/cart'><button>Finalizar Compra</button></Link>

               </> 
            )}
           
        </div> :null}
        </div> 
    )
    
}
export default CartWidget