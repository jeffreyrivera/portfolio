import React from 'react';
import ReactMarkdown from "react-markdown"

class RenderContentMarkDown extends React.Component {
    state = { projectFile: '', title: '' }

    componentDidMount() {
        this.loadCode(this.props.file);
    }

    loadCode = async (urlFile) => {
        const file = await import(`../assets/projects/${urlFile}`);
        const text = await fetch(file.default).then(response => response.text());

        this.setState({
            projectFile: text,
            title: this.props.title
        });
    }

    componentDidUpdate(prevProps) {
        // check whether client has changed
        if (prevProps.file !== this.props.file) {
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