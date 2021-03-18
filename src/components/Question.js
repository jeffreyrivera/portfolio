import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import CodeDisplay from './CodeDisplay';
import SolutionList from './SolutionList';

class Question extends React.Component {

    state = {
        code: null
    }

    componentDidMount(){
        this.updateCode(this.props.answer.code)
        //TODO vr. 2 loading component until api request finishes
    }

    onSolutionSelect = (solution) => {
        //console.log('from App Question is : ', question);
        if (solution !== this.state.solutionSelected){

            this.setState( { 
                solutionSelected: solution,
                codeSelected: solution.code
            });
            console.log(solution);

        } else {
            console.log('Same Solution Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };

    updateCode = (code) => {
        this.setState({
            code: code
        });
    }

    render () {
        return (
            <div className="thirteen wide two column grid question">
                <div className="ui segment question">
                    <QuestionDisplay
                        question={this.props.question}
                    />
                    <div className="ui stackable doubling two column grid">
                        <CodeDisplay 
                            file={this.props.answer.code}
                        />
                        <div className="five wide column solutions">
                            <div className="ui segment">
                                {/* <SolutionList
                                    current={this.state.solutionSelected}
                                    solutions={this.props.answers}
                                    onSolutionSelect={this.onSolutionSelect}
                                /> */}
                                <p>{this.props.answer.description}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <p>Category</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;