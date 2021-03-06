import React, { useEffect, useState } from 'react'
import './ItemList.css'
import CircularProgress from '@mui/material/CircularProgress';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';

const ItemList = ({title}) => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    const {category} =useParams()
    console.log("categoria: ", category)
    

            async function getViajes(db){

                    const ViajesCol = collection(db, 'Viajes');
                    const ViajesSnapshot = await getDocs(ViajesCol);
                    const ViajesList = ViajesSnapshot.docs.map(doc => {
                        let viaje = doc.data()
                        viaje.id = doc.id
                        return viaje
                    });
                    return ViajesList;
                }
                 


    useEffect(()=>{
        getViajes(db).then((resultsProducts) =>{
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