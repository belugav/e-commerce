import {Link} from 'react-router-dom'

export default function CategoriesList() {
    return(
        <>
       <h1 className='CategoryTitle'>categorias</h1>
       <div className='categoryContainer'>

       <Link to={`/Category/Usa`}>
       <h2>Estados Unidos</h2>
        </Link>

        <Link to={`/Category/España`}>
        <h2>España</h2>
       </Link>

       <Link to={`/Category/Italia `}>
       <h2>Italia</h2>
       </Link>

       <Link to={`/Category/Francia `}>
       <h2>Francia</h2>
       </Link>

       <Link to={`/Category/China `}>
       <h2>China</h2>
       </Link>

       <Link to={`/Category/Australia `}>
       <h2>Australia</h2>
       </Link>

       

       </div>
</>
    )


}