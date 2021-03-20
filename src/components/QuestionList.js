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

        <div className="ui menu vertical questionList">
            <header className="item">
                <h2>List of Questions</h2>
            </header>
            {renderedList}
        </div>

    );
};

export default QuestionList;