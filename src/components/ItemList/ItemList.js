import React, { useEffect, useState } from 'react'
import './ItemList.css'
import ItemCount  from '../ItemCount/ItemCount';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';

const ItemList = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Viaje a Miami',
            price: 1400,
            stock: 10000,
            img: 'miami.jpg',
            description: "Viaje a Miami"
        },
        {
            id: 2,
            name: 'Viaje Nueva York',
            price: 1500,
            stock: 5000,
            img: 'nuevayork.jpg',
            description: "Viaje a New York"
        },
        {
            id: 3,
            name: 'Viaje a Orlando',
            price: 1700,
            stock: 10000,
            img: 'orlando.jpg',
            description: "Viaje a Orlando"
        },
        {
            id: 4,
            name: 'Viaje a Los Ángeles',
            price: 1200,
            stock: 25,
            img: 'losangeles.jpg',
            description: "Viaje a Los Ángeles"
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])

    return (
        //Update
        <>
            <h2>Productos Destacados</h2>
            <div className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <div>
                            {products.map(product => {
                                return (
                                    <div  key={product.id}>
                                        <ItemCount data={product} />
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