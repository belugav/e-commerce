import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {doc,getDoc } from "firebase/firestore"
import db from '../../firebase'

export default function ContainerItemDetail() {
    const [product, setProduct] = useState([])

console.log("Parametros de ruta",useParams ())

    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    //const getProduct = new Promise((resolve, reject) => {
       // setTimeout(() => {
        //    resolve(dataProducts)
      //  }, 1000)
  //  })

  async function getProduct(db) {
    const docRef = doc(db, "Viajes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let viaje = docSnap.data();
        viaje.id = docSnap.id
        setProduct(viaje)
        setLoader(false)
      

    } else {
        console.log("esta vacio");
    }
} 
useEffect(() => {
    getProduct(db)
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