import React from 'react';
import ItemCount from './ItemCount';
import styled from 'styled-components';


const ItemListContainer = ({greeting}) => {
  return (
    <DivContainer>
      <div className='msj'>{greeting}</div>
      <ItemCount initial={1} stock={10} onAdd={() => {}}/>
    </DivContainer>

    
  )
}

export default ItemListContainer;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .msj {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`