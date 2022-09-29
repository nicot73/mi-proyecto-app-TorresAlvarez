import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  return (
    <NavLink to={'/cart'}>
      <AddShoppingCartIcon fontSize="large"/>
    </NavLink>
  )
}

export default CartWidget;