import React, {useContext,useState} from 'react'
import './CartPage.css'
import cartContext from '../../context/cartContext'
import ContactModal from '../../components/ContactModal/ContactModal'
import { Button } from '@mui/material';


export default function CartPage() {
   const {products,totalPrice,totalFinal}= useContext(cartContext)
   
   const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

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
     <h2>Total:$ {totalFinal}</h2>
     <Button onClick={handleClickOpen}>COMPLETAR COMPRA</Button>
     <ContactModal 
                open={open} 
                handleClose={handleClose} 
                products={products} 
                total={totalPrice}
            />

 </>
  )

  
}