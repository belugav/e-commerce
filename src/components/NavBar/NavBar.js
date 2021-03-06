import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'


//import logo from './assets/logo.png'

export default function  NavBar (){
    return(
        
        <nav>
            <div className="contenedor-logo">

        <img src={process.env.PUBLIC_URL + "./assets/logo.png"} alt="logo"/>
        </div>
        <ul>
            <li> <Link to = "/" style={{textDecoration:'none' }}
> <Button variant="contained">Inicio</Button></Link></li>
            <li><Link to = "/category" style={{textDecoration:'none' }}
><Button variant="contained">Viajes</Button></Link></li>
            <li><Link to = "/customer" style={{textDecoration:'none' }}
><Button variant="contained">Clientes</Button></Link></li>
            <li><Link to = "/contact" style={{textDecoration:'none' }}
><Button variant="contained">Contacto</Button></Link></li>
        </ul>
        <CartWidget/>
</nav>



    )

}