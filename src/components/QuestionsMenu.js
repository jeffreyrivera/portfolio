import React from 'react'
import QuestionsCategory from './QuestionsCategory';


const QuestionsMenu = ( {categories, current, onCategorySelect} ) => {
    //TODo needs categories to be displkayed and map here
    //displaying active the first category 
    //eventually also using a search box to find question
    const renderCategories = categories.map( (category) => {
        return (
            <QuestionsCategory
                key={category.id} 
                current= {current}
                category={category.value}
                onCategorySelect={onCategorySelect}
            />
        );
    });
    return (
        <div className="ui pointing menu algo">
            {renderCategories}
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsMenu;