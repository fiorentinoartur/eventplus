import React from 'react';
import logoMobile from "../../assets/icons/logo-white.svg";
import logoDesktop from "../../assets/icons/logo-pink.svg";
import { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
    return (
        <nav className='navbar'>
            <span className='navbar__close'>x</span>
            <Link to="/" className='eventlogo'>
                <img
                className='eventlogo__logo-image' 
                src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                alt="Event Plus Logo"/>
            </Link>

            <div className='navbar__items-box'>
                <Link to="/" className='navbar__item'>Home</Link>
                <Link to="/tipos-evento" className='navbar__item'>Tipos de Evento</Link>
                <Link to="/teste" className='navbar__item'>Usuários</Link>
            </div>
        </nav>
    );
};

export default Nav;