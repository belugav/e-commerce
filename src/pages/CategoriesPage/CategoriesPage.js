import  './CategoriesPage.css'
import { Link } from 'react-router-dom'
                                                                                                                                                                

export default function CategoriesPage(data) {
    return (
        <>
         <Link to={`/category/${1}`}>
      <h2> Estados Unidos </h2>
        </Link>

        <Link to={`/category/${2}`}>
      <h2> España </h2>
        </Link>

        
        <Link to={`/category/${3}`}>
      <h2> Italia </h2>
        </Link>
        
        
        </>

         
    )
}
                                                                          