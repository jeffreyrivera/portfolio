import React from 'react';

class ContactForm extends React.Component {   

    state = {
        name: '',
        email: '',
        message: '',
        status: ''
    }
    onInputChange = (event) =>{
        this.setState({ [event.target.id] : event.target.value});
    };
    
    onFormSubmit = (event) =>{
        event.preventDefault();
        // TODO make sure we call callback from parent component App
        this.props.onFormSubmit(
            this.state.name, this.state.email, this.state.message, this.state.status,
        );
    };


    render() {
        let buttonText = "Let's Talk"
        return (      
            
            <form onSubmit={this.onFormSubmit} className="form">
                <h3>Feel free to fill out this quick contact form</h3>
                <div>
                <label for="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.onInputChange}
                    required
                />
                </div>
                <div>
                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                    required
                />
                </div>
                <div>
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.onInputChange}
                    required
                />
                </div>
                <button type="submit">{buttonText}</button>
            </form>      
        );
    }
}
export default ContactForm;
