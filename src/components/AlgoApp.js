import './AlgoApp.css';
import React from 'react';
import QuestionsMenu from './QuestionsMenu';
import ViewMenu from './ViewMenu';
import CodeDisplay from './CodeDisplay'



class AlgoApp extends React.Component {
    state = { 
        questions: [], categories: [], categorySelected: null, source: './algo.md',
        views: ['Single','Grid','Most Popular'], currentView: 'Single',
        post: 'algo',
    }

    componentDidMount(){
        this.setTempData();
    }

    setTempData = () => {
        const questionsArray = [
            {question_id: 1, 
                title: "Fibonacci Series", description: "You are required to return the nth element (n) and print it out to the console from Fibonacci series.",
            },
            {question_id: 2, questionTitle: "Second Question", description: "What are Design Patterns Seriously ?"},
            {question_id: 3, questionTitle: "Thirst Question", description: "What are Design Patterns No Way?"}
        ];
        const categoriesAPI = [{id: 1,value:'Array'}, {id: 2,value:'Sorting'}, {id: 3,value:'DP'}, {id: 4,value:'Recursion'}, {id: 5,value:'Tree'}];

        this.setState({
            questions: questionsArray,
            categories: categoriesAPI,
            categorySelected: categoriesAPI[0]['value']
        });
        //Fibonacci Series
        //You are required to return the nth element (n) and print it out to the console from Fibonacci series.
    };

    onCategorySelect = (category) => {
        console.log('from App Category is : ', category);
        if (category !== this.state.categorySelected){
            this.setState( { categorySelected: category });
        } else {
            console.log('Same Category Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };
    onViewSelect = (view) => {
        if (view !== this.state.currentView){
            this.setState({currentView: view});
        } 
    };

    render() {
        return (
            <div>
                <div className="ui container">
                    <QuestionsMenu 
                        categories = {this.state.categories}
                        current = {this.state.categorySelected}
                        onCategorySelect = {this.onCategorySelect}
                    />
                    <ViewMenu
                        current = {this.state.currentView}
                        views = {this.state.views}
                        onViewSelect = {this.onViewSelect}
                    />
                </div>
                <div className="ui container">
                    <div className="ui stackable two column grid">
                        <div className="twelve wide two column grid">
                            
                            <div className="ui segment">
                                <h3>Title</h3> 
                                <p>It doesn't break on MSIE6 or other legacy browsers. 
                                    It either uses a fall-back or simply does nothing.</p>   
                            </div>
                            
                            <div className="ui stackable doubling two column grid">
                                <div className="eleven wide column">
                                    <CodeDisplay 
                                        answerId={this.state.post}
                                    />
                                </div>
                                <div className="five wide column">
                                    <div className="ui segment">
                                        <h5>Solutions</h5>
                                        <p><b>Array</b>  > Greedy</p>
                                        
                                        <p>DOMPurify is written in JavaScript and works in 
                                            all modern browsers (Safari (10+), Opera (15+), 
                                            Internet Explorer (10+), Edge, Firefox and Chrome - 
                                            as well as almost anything else using Blink or WebKit).</p>
                                        <p>It doesn't break on MSIE6 or other legacy browsers. 
                                        It either uses a fall-back or simply does nothing.</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui segment">
                                        Array ---   DP  --- Medium
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        <div className="four wide column">
                            <div className="ui segment">
                                Content
                                Content
                                Content
                                Content
                                Content
                                ContentContent
                                Content
                                Content
                                Content
                                Content
                                Content
                                ContentContent

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AlgoApp;