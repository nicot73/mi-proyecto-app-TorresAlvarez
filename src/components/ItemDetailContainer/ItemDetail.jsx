import React, { useState } from 'react';
import ItemCount from './ItemCount';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ listProduct }) => {

  const [isAdded, setIsAdded] = useState(false);
  
  const { addToCart } = useCartContext();
  
  const onAdd = (quantity) => {
    addToCart(listProduct, quantity);
    setIsAdded(true);
  }

  return (
    <Container>
      <div className='divContainer'>
        <h3>{listProduct.category.toUpperCase()}</h3>
        <img src={listProduct.image} alt="img" />
      </div>
      <div className='divContainer'>
        <h4>{listProduct.title}</h4>
        <p>{listProduct.description}</p>
        <p className='price'>Precio: ${listProduct.price}</p>
        {isAdded 
          ? 
            <NavLink to='/cart'><button>Ir al Carrito</button></NavLink> 
          : 
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        }  
      </div> 
    </Container>
    
  )
}

export default ItemDetail;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .divContainer {
    width: 40%;
    @media (max-width: 830px) {
      width: 70%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  img {
    width: 330px;
    height: 260px;
    margin: 20px;
  }
  h4 {
    font-weight: 600;
    font-size: 15px;
    text-align: center;
  }
  .price {
    font-size: 20px;
  }

  button {
    background-color: #333;
    color: #FF6701;
    border: none;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
    font-size: 15px;
  }
  button:hover {
    background-color: #FF6701;
    color: #333;
  }
`