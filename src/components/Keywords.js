import React from 'react'

const Keywords = ({keywords}) =>{
    
    const renderedList = keywords.map((keyword,i) => {
        return (
            <h1 key={i}>
                {keyword}
            </h1>
        );
    });

    return (
        <div className="column project-keywords">
            {renderedList}
        </div>
    );
}

export default Keywords;