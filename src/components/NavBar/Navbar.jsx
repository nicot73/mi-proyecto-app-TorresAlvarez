import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import BurgerButton from '../BurguerButton/BurgerButton';
import CartWidget from '../Cart/CartWidget';
import './Header.css';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <NavLink to={'/'}><img src={logo} alt="logotype"/></NavLink>
                <h1 className='fluido'>Tienda Gamer</h1>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <NavLink onClick={handleClick} to={'/category/hardware'}>HARDWARE</NavLink>
                    <NavLink onClick={handleClick} to={'/category/perifericos'}>PERIFERICOS</NavLink>
                    <NavLink onClick={handleClick} to={'/category/notebooks'}>NOTEBOOKS</NavLink>
                    <NavLink onClick={handleClick} to={'/category/pc-armada'}>PC ARMADAS</NavLink>
                </div>

                <NavLink to={'/cart'}>
                    <CartWidget/>
                </NavLink>
                
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>

                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>    
    )
}

export default Navbar;

const NavContainer = styled.nav`
    padding: .5rem;
    background-color: #222;
    color: #FF6701;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: #FF6701;
        @media (min-width: 768px){
            margin-right: 1rem;
        }
    }
    a:hover {
        color: #FF6701;
        text-shadow: 0 0 5px #FF6701, 0 0 25px #FF6701, 0 0 50px #FF6701, 0 0 100px #FF6701;
    }
    a.active {
        color: #FF6701;
        text-shadow: 0 0 5px #FF6701, 0 0 5px #FF6701, 0 0 10px #FF6701, 0 0 15px #FF6701,  0 0 25px #FF6701; 
    }
    h1 {
        text-align: center;
    }
    @media (min-width: 768px) {
        div {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
        }
        div :nth-child(1) {
            margin-left: 1rem;
        }
    }
    .links {
        position: absolute;
        top: -1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a {
            color: #FF6701;
            font-size: 2rem;
            display: block;
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                color: #FF6701;
                display: inline;
            }

        }
    }
    @media (max-width: 768px) {
        .links.active{
            width: 100%;
            display: block;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 15%;
            left: 0;
            right:0;
            text-align: center;
            z-index: 2;
            a {
                font-size: 1.5rem;
                color: #FF6701;
                margin-top: 2.2rem;
            }
        }
    }
    .burger {
        z-index: 2;

        @media(min-width: 768px) {
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background-color: transparent;
    position: fixed;
    top: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease-in-out;
    
    @media(max-width: 768px) {
        &.active {
            background-color: #333;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        } 
    }
`