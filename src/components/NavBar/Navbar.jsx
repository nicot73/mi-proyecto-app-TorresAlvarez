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
                    <CartWidget />
                </NavLink>
                
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`links ${clicked ? 'active' : ''}`}></BgDiv>    
            </NavContainer>
        </>    
    )
}

export default Navbar;

const NavContainer = styled.nav`
    padding: .2rem;
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
        left: 0;
        right: 0;
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
            top: 12%;
            left: 0;
            right:0;
            text-align: center;
            a {
                font-size: 1.5rem;
                color: #FF6701;
                margin-top: 2.2rem;
            }
        }
    }
    .burger {
        @media(min-width: 768px) {
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background-color: #333;
    position: relative;
    top: -800px;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    @media(max-width: 768px) {
        &.active {
            border-radius: 0 0 5% 5%;
            top: 0;
            width: 100%;
            height: 50%;
        } 
    }
`