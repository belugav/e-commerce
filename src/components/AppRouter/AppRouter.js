import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer.js'
import HomePage from '../../pages/HomePage/HomePage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import CustomerPage from '../../pages/CustomerPage/CustomerPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage.js';
import CategoriesList from '../CategoriesList/CategoriesList.js';


export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                <Route path='/category/:category' element={<CategoriesList/>}/>

                <Route path='/travel/:id' element={<ItemDetailPage/>}/>
                <Route path='/travel' element={<HomePage/>}/>
                <Route path='/category' element={<CategoriesPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/customer' element={<CustomerPage/>}/>
                <Route path='/' element={ <HomePage/>}/>
                <Route path='*' element={ <NotFoundPage/>}/>
               

                
                </Routes>
            <Footer/>
        </BrowserRouter>  
    )
}