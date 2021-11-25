import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import './NavBar.css'

//import logo from './assets/logo.png'

export default function  NavBar (){
    return(
        <AppBar>
        <nav>
            <div className="contenedor-logo">

        <img src={process.env.PUBLIC_URL + "./assets/logo.png"} alt="logo"/>
        </div>
        <ul>
            <li><Button variant="contained">Inicio</Button></li>
            <li><Button variant="contained">Prductos</Button></li>
            <li><Button variant="contained">Clientes</Button></li>
            <li><Button variant="contained">Contacto</Button></li>
        </ul>
</nav>
</AppBar>


    )

}