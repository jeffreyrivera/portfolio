
import React from 'react';
//import Prism from 'prismjs';

import './PrismLucario.css';

class PrismCode extends React.Component {
    
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        window.Prism.highlightAll();
    }

    // highlight = () => {
    //     if (this.ref && this.ref.current) {
    //         console.log(Prism)
    //         Prism.highlightElement(this.ref.current);

    //     }
    // };

    render() {
        const {code,language} = this.props;
        return (
            <pre>
                <code ref={this.ref} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        );
    }
}

export default PrismCode;