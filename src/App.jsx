import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Tienda Gamer" /> 
    </>
    
  )
}

export default App