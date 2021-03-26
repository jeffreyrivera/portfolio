import React from "react";
import './Header.css'
import burger from '../assets/hamburgerSmall.png';
import logo from '../assets/logo.png';

const Header = () => {

  return (
    <div className="ui grid headerPart">
        <div className="four column row">
            <div className="left floated column logo">
                <div className="logoLink">
                    <img src={logo} alt="jeffreyrivera.co"/>
                </div>
            </div>
            <button className="contactButton">
                Contact
            </button>
            <div className="burgerMenu">
                <img src={burger} alt="Menu"/>
            </div>
        </div>
    </div>

  );
}
export default Header;