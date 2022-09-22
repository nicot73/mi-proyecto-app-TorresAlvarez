import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Tienda Gamer" />
      <ItemDetailContainer/>
    </>
    
  )
}

export default App;