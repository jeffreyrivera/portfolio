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
                    <h1>
                        <span className="name-logo">jeffreyrivera</span>
                        <span class="name-short-logo">&#123;jr</span>
                        <span className="domain-logo">.co</span>
                        <span class="name-short-logo">&#125;</span>
                    </h1>
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