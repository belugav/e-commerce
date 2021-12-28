import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useState, useEffect, useContext} from 'react';
import './CartWidget.css'
import CartContext from '../../context/cartContext';


const CartWidget= () => {

    const [showCart, setShowCart]=useState (false)
    const{products}= useContext(CartContext)
    const openCart =()=>{
        setShowCart (!showCart)

    }

    return (

        <div className="cart-container">
            
            <ShoppingCartIcon onClick={openCart}/>

        {showCart ?
            
            <div className={`box-cart ${showCart && 'active' }`}>
                {products.map((product)=>{
                    return(
                <div className='item-cart-list'>
                      <img className="imgItemDetail" src={`../../assets/${product.image}`} alt="imagen"/>
                <p>{product.name}</p>
                <p>Precio: {product.price}</p>
                <p>Cantidad:{product.quantity}</p>
            </div>

                    )
                } ) }
          

            </div> :null}
            
             </div>
    )
}

export default CartWidget