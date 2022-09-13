import React, { useState } from 'react';
import styled from 'styled-components';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > initial && setCount(count - 1);

  return (
    <ItemContainer>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button>Añadir al Carrito</button>
    </ItemContainer>  
  )
}

export default ItemCount;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #434343;
  border-radius: 5px;
  padding: 5px;
  align-items: center;

  button {
    background-color: #333;
    color: #FF6701;
    border: none;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
  }
  button:hover {
    background-color: #FF6701;
    color: #333;
  }
  p {
    background-color: #666;
    padding: 8px;
    border-radius: 5px;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
  }
`