import React from 'react';
import ReactMarkdown from "react-markdown"

class RenderContentMarkDown extends React.Component {
    state = { projectFile: '', title: '' }

    componentDidMount() {
        this.loadCode(this.props.file);
    }

    loadCode = async (urlFile) => {
        const file = await import(`../assets/projects/${urlFile}`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            projectFile: text,
            title: this.props.title
        });
    }

    componentDidUpdate(prevState) {
        // check whether client has changed
        if (prevState.projectFile !== this.state.projectFile) {
            this.loadCode(this.props.file);
        }
    }

    renderProjectContent = () => {
        if (this.state.projectFile === '') {
            return <div>Loading Markdown File....... </div>;
        } else {
            return(
                <ReactMarkdown
                    source={this.state.projectFile}
                />
            );
        }
    }

    render() {
        return (
            <div className="column project-content">
                {this.renderProjectContent()}
            </div>
        );
    }
}

export default RenderContentMarkDown;