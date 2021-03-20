import React from 'react';
import Solution from './Solution';

const SolutionList = ({current, solutions, onSolutionSelect}) => {

    const renderedList = solutions.map((solution) => {
        return (
            <Solution
                key={solution[0]}
                current={current}
                solution={solution}
                onSolutionSelect={onSolutionSelect}
            />
        )
    });
    //<div className="ui clearing divider"></div>
    return (
        <div className="row solutions">
            <header className="column" title="Solutions">
                <h2>Solutions</h2>
            </header>
            <div className="ui text menu solutions">
                {renderedList}
            </div>
            <p>{current.description}</p>
        </div>
    );
};

export default SolutionList;