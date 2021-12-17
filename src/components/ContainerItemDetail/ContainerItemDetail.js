import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


export default function ContainerItemDetail() {
    const [product, setProduct] = useState([])

console.log("Parametros de ruta",useParams ())

    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    const dataProducts = [{
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

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 1000)
    })

    useEffect(() => {
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    setProduct(resultProduct)
                    setLoader(false)
                }
            })
        })
    }, [id])

    return (
        <div>
            {loader ?
                <CircularProgress />
                    :
                <ItemDetail data={product} />
            }
        </div>
    )

}