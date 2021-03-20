import React from 'react';
import RenderedMarkdown from './RenderedMarkdown'
import './CodeDisplay.css';

class CodeDisplay extends React.Component {
    state = { answerFile: '' }

    componentDidMount() {
        //this.loadCode(this.props.file);
    }

    loadCode = async (code) => {
        const file = await import(`../assets/code/${code}`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            answerFile: text
        });
    }

    componentDidUpdate(prevState) {
        // check whether client has changed
        if (prevState.answerFile !== this.state.answerFile) {
            this.loadCode(this.props.file);
        }
    }

    renderCodeContent = () => {
        if (this.state.answerFile === '') {
            return <div>Loading Code....... </div>;
        } else {
            return(
                <RenderedMarkdown 
                    content={this.state.answerFile}
                />
            );
        }
    }

    render() {
        return (
            <div className={`ui ${this.props.size} wide column codeDisplay`}>
                {this.renderCodeContent()}
            </div>
        );
    }
}

export default CodeDisplay;