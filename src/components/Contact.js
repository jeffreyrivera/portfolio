import React from 'react';
import Footer from './Footer';
import ContactHook from './ContactHook';
import RenderContentMarkDown from './RenderContentMarkDown';
import './Contact.css';

const Contact = () => {

    return(
        <div className="ui grid projects contact" id="contact">
            <div className="ui grid inner">
                <div className="three column stackable row contactme">
                    <div className="column project-keywords contact aboutme">
                        <RenderContentMarkDown
                            title={'Contact Me'}
                            file={'contact.md'}
                        />
                    </div>
                    <div className="column project-contents contact">
                        <div className="column project-keywords contact-hook">
                            <ContactHook />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};



export default Contact;