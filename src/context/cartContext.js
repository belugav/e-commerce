

import {createContext, useState} from 'react';

const cartContext = createContext();

const CartProvider =({children}) => {
const [products, setProducts] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);

 const isInCart =id => products.some(product=>product.id ===id)


 const addProducts = (product,quantity) =>{
       if (isInCart(product.id)){
           const newMap = products.map(addItem=>{
               if(addItem.id === product.id){
                  
                   setTotalPrice(totalPrice+ product.price * product.quantity)
                  
                return{...addItem, quantity: addItem.quantity + quantity}
              
                }else return addItem
               })
           setProducts(newMap)
           setTotalPrice(totalPrice+ product.price * product.quantity)
          
       }else{
        setProducts([...products,product])
        setTotalPrice(totalPrice+ product.price * product.quantity)
        
     
      }
    }
   

const removeItem = (id) => setProducts(products.filter(product=>product.id !==id)); 


const totalFinal =products.reduce(function (acc,curr) {
    return acc+curr.quantity* curr.price
},0)



function clearCart(){
    setProducts([])
}

    const data= {
    products,
    addProducts,
    totalPrice,
    clearCart,
    removeItem,
    isInCart,
    totalFinal
    }

    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )

}

export default cartContext
export {CartProvider}