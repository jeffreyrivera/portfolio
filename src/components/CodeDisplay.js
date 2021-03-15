import React from 'react';
import RenderedMarkdown from './RenderedMarkdown'
import './CodeDisplay.css';

class CodeDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { answerFile: '' }
    }

    async componentDidMount() {
        const file = await import(`../data/${this.props.answerId}.md`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            answerFile: text
        });
    }

    render() {
        return (
            <div className="ui eleven wide column codeDisplay">
                <RenderedMarkdown 
                    content={this.state.answerFile}
                />
            </div>
        );
    }
}

export default CodeDisplay;