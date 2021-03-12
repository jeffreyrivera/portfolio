import React from 'react';

const QuestionsCategory = ( {category, current, onCategorySelect} ) => {
    const returnCurrent = () =>{
        return (category === current) ?'active ' : '';
    }
    return (
        <div className={`${returnCurrent()}item`} onClick={() => onCategorySelect(category)}>
            {category}
        </div>
    );
};

export default QuestionsCategory;