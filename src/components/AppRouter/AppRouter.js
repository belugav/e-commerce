import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer.js'
import HomePage from '../../pages/HomePage/HomePage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import CustomerPage from '../../pages/CustomerPage/CustomerPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';



export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                
                <Route path='/travel/:id' element={<ItemDetailPage/>}/>
                <Route path='/travel' element={<HomePage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/customer' element={<CustomerPage/>}/>
                <Route path='/' element={ <HomePage/>}/>
                <Route path='*' element={ <NotFoundPage/>}/>
               

                
                </Routes>
            <Footer/>
        </BrowserRouter>  
    )
}