import React from 'react'

const Solution = ({current, solution, onSolutionSelect}) =>{
    const [id, title] = solution;
    const returnCurrent = () =>{
        return (id === current.id) ?'active ' : '';
    };
    return (
        <span className={`${returnCurrent()}item`} title={title} onClick={() => onSolutionSelect(id)}>
            {title}
        </span>
    );
};

export default Solution;
