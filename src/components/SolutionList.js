import React from 'react';
import Solution from './Solution';

const SolutionList = ({solutions, onSolutionSelect}) => {

    const renderedList = solutions.map((solution) => {
        return (
            <Solution
                key={solution.id}
                solution={solution}
                onSolutionSelect={onSolutionSelect}
            />
        )
    });
    //<div className="ui clearing divider"></div>
    return (
        <div className="ui menu">
            <header className="item">
                <h2>Solutions</h2>
            </header>
            {renderedList}
        </div>
    );
};

export default SolutionList;