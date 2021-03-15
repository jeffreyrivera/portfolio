import React from 'react';

const QuestionsCategory = ( {category, current, onCategorySelect} ) => {
    const returnCurrent = () =>{
        return (category === current) ?'active ' : '';
    }
    return (
        <div className={`${returnCurrent()}item`} onClick={() => onCategorySelect(category)}>
            <h4>{category}</h4>
        </div>
    );
};

export default QuestionsCategory;