import React from 'react';
import QuestionItem from './QuestionItem';
import "./DropDownList.css";

class DropDownList extends React.Component {

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
        console.log("click")
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
        const { current, questions, onQuestionSelect} = this.props;

        const renderedList = questions.map((question) => {
            return (
                <QuestionItem
                    key={question.id}
                    current={current}
                    onQuestionSelect={onQuestionSelect}
                    question={question}
                />
            )
        });

        return (
            <div className="dropdown" ref={this.state.ref}>
                <header className="item" onClick={this.handleButtonClick}>
                    <h2>List of Questions <i className="arrow alternate circle down outline icon"></i></h2>
                </header>
               
                {this.state.open && (
                    <div className="ui menu vertical questionList dropDown" >
                        {renderedList}
                    </div>
                )}
            </div>
        );
    }
}

export default DropDownList;