
import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Footer from './components/Footer/Footer.js';
import ItemList from "./components/ItemList/ItemList";
import ItemCount from "./components/ItemCount/ItemCount";
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
