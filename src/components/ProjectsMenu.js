import React from 'react'

const ProjectsMenu = ({projects, current, onProjectSelect}) =>{
    
    const returnCurrent = (project) => {
        // console.log(project,current)
        return (project === current) ?'active ' : '';
    };

    const renderedList = projects.map((project, i) => {
        let title = project[0];
        return (
            <span key={i} className={`${returnCurrent(title)}item`} onClick={()=> onProjectSelect(title)}>
                {title}
            </span>
        );
    });

    return (
        <div className="ui tabular menu latest">
            {renderedList}
        </div>
    );
}

export default ProjectsMenu;
