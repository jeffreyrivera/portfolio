import React from 'react';



const QuestionDisplay = ({question}) => {

    const renderedList = question.examples.map( (example) => {
        return (
            <div>
                <p><b>Input</b>: {example[0]} - <b>Output</b>: {example[1]}</p>
            </div>
            
        );
    });

    return (
        <div className="questionDisplay">
            <h1>{question.title}</h1> 
            <p>{question.description}</p>
            {renderedList}   
        </div>
    );
};

export default QuestionDisplay;