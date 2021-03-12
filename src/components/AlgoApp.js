import './AlgoApp.css';
import React from 'react';
import QuestionsMenu from './QuestionsMenu';
import ViewMenu from './ViewMenu';
import PrismCode from './PrismCode';


const code = `
def fib_iterative(n):
    a, b = 0, 1
    while n > 0:
        a, b = b, a + b
        n -= 1
    return a
`

class AlgoApp extends React.Component {
    state = { 
        questions: [], categories: [], categorySelected: null, 
        views: ['Single','Grid','Most Popular'], currentView: 'Single',
    }

    componentDidMount(){
        this.setTempData();
    }

    setTempData = () => {
        const questionsArray = [
            {question_id: 1, 
                title: "Fibonacci Series", description: "You are required to return the nth element (n) and print it out to the console from Fibonacci series.",
                answers: [
                    { 
                        answerId: 1,
                        text: 'fsdfasdfsdf',
                        code: ''
                    },
                    { 
                        answerId: 2,
                        text: 'fsdfasdfsdf',
                        code: ''
                    },
                    { 
                        answerId: 3,
                        text: 'fsdfasdfsdf',
                        code: ''
                    },
                ]
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
                <div className="ui segment">
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
                <div className="ui segment">
                    <PrismCode
                        code={code}
                        language='python'
                    />
                </div>
            </div>
        );
    }
}


export default AlgoApp;