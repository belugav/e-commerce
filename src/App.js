
import React from "react";
import Container from '@mui/material/Container';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Footer from './components/Footer/Footer.js';

function App() {

  return (
<div className="App">


<NavBar/>
  
 
<ItemListContainer />

 
  <Footer />
      </div>
  );
}

export default App;
