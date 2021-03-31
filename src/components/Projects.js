import './Projects.css'
import React from 'react';
import Keywords from './Keywords';
import RenderContentMarkDown from './RenderContentMarkDown';
import ProjectsMenu from './ProjectsMenu';


class Projects extends React.Component {

    state = { 
        currentProject: 'Latest Project', currentKeywords : null,  currentFile :null, 
        projects : [['Latest Project', 'latestProject.md', ['Code', 'Algorithm', 'Interview', 'Preparation', 'Python','React JS']],
                ['Software Developer', 'software.md', ['Python', 'Data Science', 'Java', 'Full Stack', 'Web','Solutions']],
                ['Sales Consultant', 'sales.md', ['Customer', 'Sales', 'Persuasive', 'Teamwork', 'Results','Mentor','E-commerce']]]
    }

    componentDidMount(){
        this.setData('Software Developer');
    }

    setData = (currentProject) => {

        const current = this.state.projects.find((project) => {
            return currentProject === project[0]
        })
        // console.log(current);
        this.setState({
            currentProject: currentProject,
            currentKeywords: current[2],
            currentFile: current[1]
        });

    }
    onProjectSelect = (project) => {
        this.setData(project);
    }
    renderContent = () => {
        if (this.state.currentKeywords === null || this.state.currentFile === null) {
            return <div>Loading Projects Data....... </div>;
        } else {
            return(
                <div className="three column stackable row projects">
                    <Keywords 
                        keywords={this.state.currentKeywords}
                    />
                    <div className="column project-contents">
                        <ProjectsMenu
                            projects={this.state.projects}
                            current={this.state.currentProject}
                            onProjectSelect={this.onProjectSelect}
                        />
                        <RenderContentMarkDown
                            title={this.state.currentProject}
                            file={this.state.currentFile}
                        />
                    </div>
                </div>
            );
        }
    }

    render () {
        return(
            <div className="ui grid projects" id="projects">
                <div className="ui grid inner">
                    {this.renderContent()}
                </div>
                <div className="four column row spacing projects">
                </div>
            </div>

        );
    }
};

export default Projects;