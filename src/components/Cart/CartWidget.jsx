import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../../context/CartContext';
import styled from 'styled-components';

const CartWidget = () => {

  const { totalQuantity } = useCartContext();

  return (
    <WidgetContainer>
      <AddShoppingCartIcon fontSize="large"/>
      <p className='totalQuantity'>{totalQuantity()}</p>
    </WidgetContainer>
  )
}

export default CartWidget;

const WidgetContainer = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-weight: bolder;

  .totalQuantity {
    background-color: #555;
    padding: 5px;
    border-radius: 50%;
  }
`