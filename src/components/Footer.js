import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
        <div className="ui grid footer">
            <div className="four column centered row">
                <div className="socialmedia">
                    LinkedIn - Github - Youtube
                </div>
                <div className="copyrighted">
                    Copyrighted 2021 &#169; Jeffreyrivera.co
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;