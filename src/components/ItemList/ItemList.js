import React, { useEffect, useState } from 'react'
import './ItemList.css'
import CircularProgress from '@mui/material/CircularProgress';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'


const ItemList = ({title}) => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    const {category} =useParams()
    console.log("categoria: ", category)
    
    
    const dataProducts = [
        {
            id: 1,
            name: 'Viaje a Miami', 
            price: 1400,
            stock: 10000,
            img: 'miami.jpg',
            description: "Viaje a Miami",
            category:"Usa",
        },
        {
            id: 2,
            name: 'Viaje Nueva York',
            price: 1500,
            stock: 5000,
            img: 'nuevayork.jpg',
            description: "Viaje a New York",
            category:"Usa",
            
        },
        {
            id: 3,
            name: 'Viaje a Orlando',
            price: 1700,
            stock: 10000,
            img: 'orlando.jpg',
            description: "Viaje a Orlando",
            category:"Usa",
            
        },
        {
            id: 4,
            name: 'Viaje a Los Ángeles',
            price: 1200,
            stock: 25,
            img: 'losangeles.jpg',
            description: "Viaje a Los Ángeles",
            category:"Usa",
            
        },
        {
            id: 5,
            name: 'Viaje a Madrid',
            price: 1200,
            stock: 25,
            img: 'madrid.jpg',
            description: "Viaje a Madrid",
            category:"España",
            
        },
    
        {
            id: 6,
            name: 'Viaje a Barcelona',
            price: 1200,
            stock: 25,
            img:'sevilla.jpg',
            description: "Viaje a Barcelona",
            category:"España",
            
        },
    
        {
            id: 7,
            name: 'Viaje a Sevilla',
            price: 1200,
            stock: 25,
            img: 'sevilla.jpg',
            description: "Viaje a Sevilla",
            category:"España",
            
        },
    
    
        {
            id: 8,
            name: 'Viaje a Toledo',
            price: 1200,
            stock: 25,
            img: 'toledo.jpg',
            description: "Viaje a Toledo",
            category:"España",
            
        },
    
        {
            id: 9,
            name: 'Viaje a Roma',
            price: 1200,
            stock: 25,
            img: 'roma.jpg',
            description: "Viaje a Roma",
            category:"Italia",
            
        },
    
        {
            id: 10,
            name: 'Viaje a Venecia',
            price: 1200,
            stock: 25,
            img: 'venecia.jpg',
            description: "Viaje a Venecia",
            category:"Italia",
            
        },
    
        {
            id: 11,
            name: 'Viaje a Pisa',
            price: 1200,
            stock: 25,
            img: 'pisa.jpg',
            description: "Viaje a Pisa",
            category:"Italia",
            
        },
    
        {
            id: 12,
            name: 'Nápoles',
            price: 1200,
            stock: 25,
            img: 'napoles.jpg',
            description: "Viaje Nápoles",
            category:"Italia",
            
        },
        {
            id: 13,
            name: 'París',
            price: 1200,
            stock: 25,
            img: 'paris.jpg',
            description: "Viaje a París",
            category:"Francia",
            
        },
       
        {
            id: 14,
            name: 'Avignon',
            price: 1200,
            stock: 25,
            img: 'avignon.jpg',
            description: "Viaje a Avignon",
            category:"Francia",
            
        },
        {
            id: 15,
            name: 'Nantes',
            price: 1200,
            stock: 25,
            img: 'nantes.jpg',
            description: "Viaje a Nantes",
            category:"Francia",
            
        },

        {
            id: 16,
            name: 'Lyon',
            price: 1200,
            stock: 25,
            img: 'lyon.jpg',
            description: "Viaje a Lyon",
            category:"Francia",
            
        },
        {
            id: 17,
            name: 'Sydney',
            price: 1200,
            stock: 25,
            img: 'sydney.jpg',
            description: "Viaje a Sydney",
            category:"Australia",
            
        },
        {
            id: 18,
            name: 'Shangai',
            price: 1200,
            stock: 25,
            img: 'shangai.jpg',
            description: "Viaje a Shangai",
            category:"China",
            
        }
    ]
    

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(()=>{
        getProducts.then((resultsProducts) =>{
        if (category) {
            resultsProducts.filter(resultProduct => {
                if(resultProduct.category === category){
                    setProducts(products => [...products, resultProduct])
                    setLoader(false)
            }
        })
         }else{
            setProducts(resultsProducts)
            setLoader(false)
         }
         })
    },[])


    return (
        //Update
        <>
            <h2>{category ? category: title}</h2>

            <div className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <div className='product-collection'>
                            {products.map(product => {
                                return (
                                    <div  key={product.id}>
                                        <Item data={product} />
                                    </div>
                                )
                            })}
                        </div>  
                        
                }
            
            </div>
        </>
    )
}

export default ItemList