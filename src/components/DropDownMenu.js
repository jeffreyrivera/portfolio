import React from 'react';
import { Link } from 'react-scroll';
import burger from '../assets/hamburgerSmall.png';

class DropDownMenu extends React.Component {

    state = { 
        open: false, ref: React.createRef()
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleButtonClick = () => {
        this.setState({
            open: !this.state.open
        })
    };
    handleClickOutside = (event) => {
        if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
        
    };
    handleClickParent = () =>{
        this.setState({
            open: false,
        });
    }

    render() {
        const { links } = this.props;
        const renderedList = links.map((section, i) => {
            return (
                <li key={i}>
                    <Link activeClass="active" to={section.id} spy={true} smooth={true} duration={2000}>
                        <span className="yellowArrow">
                            <span className="hide-arrow">=</span>&gt; 
                        </span> {section.name}
                    </Link>
                </li>
            )
        });
        // 
        return (
            <div ref={this.state.ref}>
                <div className="burgerMenu" onClick={this.handleButtonClick} onMouseEnter={this.handleButtonClick}>
                    <img src={burger} alt="Menu"/>
                </div>
                {this.state.open && 
                (<nav className="nav-bar" onMouseLeave={this.handleClickParent}>
                    <ul>
                        {renderedList}
                    </ul>
                </nav>)}
            </div>
        );
    }
}

export default DropDownMenu;