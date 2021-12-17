import React, { useState } from 'react'
import './Item.css'

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



export default function Item({ data }) {
   
    return (
        <div className="card-item-product">
            
                
                    
                   
                    <Link to={`/travel/${data.id}`} style={{textDecoration: 'none'}}>
                    <div className="item-info">
                        <h2>{data.name}</h2>
                        <div className="item-image">
                        <img className='imgViajes' src={`../../assets/${data.img}`} alt="product image" />
                    </div>
                    <span className="stock-text">Stock : {data.stock}</span>
                        <div className="item-count">
                            <div className="item-count__info">
                                <span>Cantidad: </span>
                            </div>
                            
                        </div>
                       
                        <Button variant="contained" color="background">Agregar al carrito</Button>
                    </div>
            </Link>     
        </div>

    )
}
