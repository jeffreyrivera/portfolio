import React from 'react'


const ViewMenu = ({current, views, onViewSelect}) => {
    const returnCurrent = (view) =>{
        return (view === current) ?'active ' : '';
    };
    const renderViews = views.map( (view) => {
        return (
            <span key={view.toString()} className={`${returnCurrent(view)}item`} onClick={()=> onViewSelect(view)}>
                {view}
            </span>
        );
    });
    return (
        <div className="ui text menu algo">
            <div className="menu">
                <div className="header item">View as</div>
                {renderViews}
            </div>
        </div>
    );
};

export default ViewMenu;