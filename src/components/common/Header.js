import React from 'react';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    return(
        <div className="Header">
            <img src={logo} alt="ReactCoin Logo" className="Header-logo"></img>
        </div>
    );
}

export default Header;