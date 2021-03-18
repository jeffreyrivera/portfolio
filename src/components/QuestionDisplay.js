import React from 'react';

const QuestionDisplay = ({question}) => {

    const renderedList = question.examples.map( (example) => {

        const explanation = (example[2] != null) ? `- <b>Explanation</b>: ${example[2]}` : ``;

        return (
            <div  key={example}>
                <p><b>Input</b>: {example[0]} - <b>Output</b>: {example[1]}{explanation}</p>
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