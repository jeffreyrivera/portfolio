import React from "react";
import './Header.css'
import DropDownMenu from "./DropDownMenu";
import { Link } from 'react-scroll';


const Header = () => {

    const menuLinks = [ 
        {id: 'header', name: 'Home'},
        {id: 'projects', name: 'Projects'},
        {id: 'App', name: 'Latest Project'},
        {id: 'contact', name: 'Contact'}
    ];

  return (
    <div className="ui grid headerPart" id="header">
        


        <div className="four column row">
            <div className="left floated column logo">
                <div className="logoLink">
                    <h1>
                        <span className="name-logo">jeffreyrivera</span>
                        <span className="name-short-logo">&#123;jr</span>
                        <span className="domain-logo">.co</span>
                        <span className="name-short-logo">&#125;</span>
                    </h1>
                </div>
            </div>
            <button className="contactButton">
                <Link activeClass="contactButton" to="contact" spy={true} smooth={true} duration={2000}>
                    Contact
                </Link>
            </button>
            <DropDownMenu links={menuLinks}/>
            
        </div>
    </div>

  );
}
export default Header;