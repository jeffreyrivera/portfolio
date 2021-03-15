import React from 'react'

const QuestionItem = ({current, onQuestionSelect, question}) =>{

    const returnCurrent = () =>{
        return (question.id === current.id) ?'active ' : '';
    };
    return (
        <div className={`${returnCurrent()}item`} onClick={() => onQuestionSelect(question)}>
            <h4>{question.title}</h4>
        </div>
    );
};


export default QuestionItem;
