import React, { useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > initial && setCount(count - 1);

    const controlStock = (count, stock) => {
      if (stock === 0) {
        swal({
          title: "Lo sentimos.",
          text: "Sin Stock disponible",
          icon: "error",
        });
      } else {
        onAdd(count);
      }
    }

  return (
    <ItemContainer>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={() => controlStock(count, stock)}>Añadir al Carrito</button>
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