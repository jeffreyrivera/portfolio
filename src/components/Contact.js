import React from 'react';
import './Contact.css'

const Contact = () => {

    return(
        <div className="ui column grid">
            <div className="three column row">
                <div className="thirteen wide floated column">
                    <h1>jeffreyrivera<span>.co</span></h1>
                </div>                
                <div className="ui two wide column">
                    <div className="ui left floated contactMe">
                        <h3>Contact</h3>
                    </div>
                </div>
                <div className="ui one wide column cornerMenu">
                    <h1>menu</h1>
                    <img></img>
                </div>
            </div>
        </div>

    );
};



export default Contact;