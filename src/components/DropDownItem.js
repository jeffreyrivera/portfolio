import React from 'react'

const DropDownItem = ({current, onQuestionSelect, question, o}) =>{

    const returnCurrent = () =>{
        return (question.id === current.id) ?'active ' : '';
    };

    const activateCallbacks = (q) =>{
        onQuestionSelect(q)

    };
    return (
        <div className={`${returnCurrent()}item`} onClick={activateCallbacks(question)}>
            <h4>{question.title}</h4>
        </div>
    );
};


export default DropDownItem;