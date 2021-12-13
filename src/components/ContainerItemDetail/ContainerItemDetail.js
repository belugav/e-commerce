import react, {useState, useEffect}  from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


export default function ContainerItemDetail(){

    const [product, setProduct]= useState([])
    const dataProduct = 
        {
            id: 1,
            name: 'Viaje a Miami',
            price: 1400,
            stock: 10000,
            img: 'miami.jpg',
            description: "Viaje a Miami"
        }

        
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProduct)
        }, 2000)
    })

    useEffect(() => {
        getProduct.then((data) => {
            console.log("respuesta de promesa:", data)
           setProduct (data) 
        })
    }, [])

return (
    <div>
            
                <ItemDetail data={product} />

    </div>
)
}