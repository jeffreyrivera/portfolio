import React from 'react';
import QuestionItem from './QuestionItem';


const QuestionList = ( {current, questions, onQuestionSelect} ) => {

    const renderedList = questions.map((question) => {
        return (
            <QuestionItem
                key={question.id}
                current={current}
                onQuestionSelect={onQuestionSelect}
                question={question}
            />
        )
    });
    //<div className="ui clearing divider"></div>
    return (
        <div className="column">
            <div className="ui menu vertical">
                <header className="item">
                    <h2>List of Questions</h2>
                </header>
                {renderedList}
            </div>
        </div>
    );
};

export default QuestionList;