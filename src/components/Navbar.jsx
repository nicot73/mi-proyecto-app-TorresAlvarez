import React from 'react';
import logo from '../assets/logo.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Header.css";

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h1>Tienda Gamer</h1>
            <nav>
                <span><a href="">Categoria 1</a></span>
                <span><a href="">Categoria 2</a></span>
                <span><a href="">Categoria 3</a></span>
            </nav>
            <AddShoppingCartIcon fontSize="large"/>
        </header>
    )
}

export default Navbar;