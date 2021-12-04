import React, { useEffect, useState } from 'react'
import './ItemList.css'

import CircularProgress from '@mui/material/CircularProgress';

const ItemList = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Remera 1',
            price: 1400,
            stock: 10,
            img: 'remera1.jpg'
        },
        {
            id: 2,
            name: 'Remera 2',
            price: 1500,
            stock: 20,
            img: 'remera2.jpeg',
            description: "asdasdsadsad"
        },
        {
            id: 3,
            name: 'Remera 3',
            price: 1700,
            stock: 10,
            img: 'remera3.jpg'
        },
        {
            id: 4,
            name: 'Remera 4',
            price: 1200,
            stock: 25,
            img: 'remera4.jpg'
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