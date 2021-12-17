import react from 'react'
import './ItemDetail.css'

export default function ItemDetail({data}){

console.log("esta es la data", data)

return (
    
           <>
           <div className="detailParent">
        
        
        <img className="imgItemDetail" src={`../../assets/${data.img}`} alt="imagen"/>

        <div className="detailData">
               <h1 className="tituloProducto"> {data.name}</h1>
                <h2 className="detalleProducto">Precio:{data.price}</h2>
                <h2 className="detalleProducto">Stock:{data.stock}</h2>
              
             </div>

           </div>
           </>

   
)
}