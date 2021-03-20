import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import CodeDisplay from './CodeDisplay';
import SolutionList from './SolutionList';

class Question extends React.Component {

    componentDidMount(){
        this.updateCode()
        //TODO vr. 2 loading component until api request finishes
    }

    updateCode = () => {
        this.setState({
        });
    }
    
    render () {
        const fullsize = 'sixteen';
        return (
            // <div className="thirteen wide two column grid question">
                <div className="ui segment question">
                    <QuestionDisplay
                        question={this.props.question}
                    />
                    <div className="stackable two column ">
                        <SolutionList
                            current={this.props.answer}
                            solutions={this.props.solutions}
                            onSolutionSelect={this.props.onSolutionSelect}
                        />
                    </div>
                    <div className="ui stackable doubling two column grid">
                        <CodeDisplay 
                            file={this.props.answer.code}
                            size={fullsize}
                        />
                        {/* <div className="five wide column solutions">
                            <div className="stackable two column ">
                                <p>{this.props.answer.description}</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                
            
        );
    }
}

export default Question;