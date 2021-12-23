import React, {useEffect,useState} from "react";

import Item from '../Item/Item';

import CircularProgress  from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";



const CategoriesList =() => {

  




const {category} = useParams();

const [loader,setLoader]=useState(true);
const [products,setProducts]=useState([]);

const dataProducts = [
    {
        id: 1,
        name: 'Viaje a Miami', 
        price: 1400,
        stock: 10000,
        img: 'miami.jpg',
        description: "Viaje a Miami",
        category:1,
    },
    {
        id: 2,
        name: 'Viaje Nueva York',
        price: 1500,
        stock: 5000,
        img: 'nuevayork.jpg',
        description: "Viaje a New York",
        category:1,
        
    },
    {
        id: 3,
        name: 'Viaje a Orlando',
        price: 1700,
        stock: 10000,
        img: 'orlando.jpg',
        description: "Viaje a Orlando",
        category:1,
        
    },
    {
        id: 4,
        name: 'Viaje a Los Ángeles',
        price: 1200,
        stock: 25,
        img: 'losangeles.jpg',
        description: "Viaje a Los Ángeles",
        category:1,
        
    },
    {
        id: 5,
        name: 'Viaje a Madrid',
        price: 1200,
        stock: 25,
        img: 'madrid.jpg',
        description: "Viaje a Madrid",
        category:2,
        
    },

    {
        id: 6,
        name: 'Viaje a Barcelona',
        price: 1200,
        stock: 25,
        img:'sevilla.jpg',
        description: "Viaje a Barcelona",
        category:2,
        
    },

    {
        id: 7,
        name: 'Viaje a Sevilla',
        price: 1200,
        stock: 25,
        img: 'sevilla.jpg',
        description: "Viaje a Sevilla",
        category:2,
        
    },


    {
        id: 8,
        name: 'Viaje a Toledo',
        price: 1200,
        stock: 25,
        img: 'toledo.jpg',
        description: "Viaje a Toledo",
        category:2,
        
    },

    {
        id: 9,
        name: 'Viaje a Roma',
        price: 1200,
        stock: 25,
        img: 'roma.jpg',
        description: "Viaje a Roma",
        category:3,
        
    },

    {
        id: 10,
        name: 'Viaje a Venecia',
        price: 1200,
        stock: 25,
        img: 'venecia.jpg',
        description: "Viaje a Venecia",
        category:3,
        
    },

    {
        id: 11,
        name: 'Viaje a Pisa',
        price: 1200,
        stock: 25,
        img: 'pisa.jpg',
        description: "Viaje a Pisa",
        category:3,
        
    },

    {
        id: 12,
        name: 'Nápoles',
        price: 1200,
        stock: 25,
        img: 'napoles.jpg',
        description: "Viaje Nápoles",
        categories:3,
        
    }

]

    const getProducts= new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(dataProducts)
        },2000)
    })

    useEffect(()=>{
        getProducts.then((resultsProducts) =>{
             resultsProducts.filter(resultProduct => {
                if(resultProduct.category === parseInt(category)){
                
                    const list = []

                   list.push(resultProduct)

                    setProducts(list)


                   setLoader(false)
                 
                }
            
        })

        
        })
    },[])


    return(
        <>
        
         <h2 className="tituloProductos">Productos</h2>
         
         {console.log ('viajes: ', products)}

        <div className="itemCardContainer">

            {
                loader ? <CircularProgress /> :

                <div >
                {
                
                    products.map((product) =>{
                        return( 
                            
                        <div  key={product.id}>
                            
                            <Item data={product}/>
                            
                        </div>
            
                        )
                    })
                }
        </div> 
            }
   
        </div>

    </>
 
    )

}
export default CategoriesList