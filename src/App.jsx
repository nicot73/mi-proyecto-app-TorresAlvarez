import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { Form } from './components/Cart/Form';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path={'/'} element={<ItemListContainer greeting="Bienvenidos a Tienda Gamer" />}/>
            <Route path={'/category/:category'} element={<ItemListContainer greeting="Bienvenidos a Tienda Gamer" />}/>
            <Route path={'/product/:id'} element={<ItemDetailContainer/>}/>
            <Route path={'/cart'} element={<CartView/>}/>
            <Route path={'/form'} element={<Form/>}/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>  
    </>
  )
}

export default App;