import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {

    return(
        <div className="ui grid projects contact">
            <div className="four column row spacing footer">
            </div>
            <div className="ui grid inner">
                <div className="three column stackable row projects">
                    <div className="column project-keywords contact">
                        <h1>Contact me</h1>
                        <p>Id porta nibh venenatis cras. Mus mauris vitae ultricies leo. 
                        Dictum at tempor commodo ullamcorper. Dui id ornare arcu odio. 
                        Facilisis volutpat est velit egestas. Phasellus vestibulum lorem 
                        sed risus ultricies tristique. </p>
                        <p>Nam aliquam sem et tortor consequat
                        id porta nibh venenatis. Et netus et malesuada fames ac turpis egestas. 
                        Pharetra convallis posuere morbi leo urna molestie at elementum.</p>
                        <p>Id porta nibh venenatis cras. Mus mauris vitae ultricies leo. 
                        Dictum at tempor commodo ullamcorper. Dui id ornare arcu odio. 
                        Facilisis volutpat est velit egestas. Phasellus vestibulum lorem </p>
                    </div>
                    <div className="column project-contents contact">
                        <div className="column">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Contact;