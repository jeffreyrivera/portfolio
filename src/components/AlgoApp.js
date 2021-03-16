import './AlgoApp.css';
import React from 'react';
import QuestionsMenu from './QuestionsMenu';
import ViewMenu from './ViewMenu';
import CodeDisplay from './CodeDisplay'
import QuestionList from './QuestionList';
import QuestionDisplay from './QuestionDisplay';


class AlgoApp extends React.Component {
    state = { 
        questions: [], categories: [], categorySelected: null, 
        questionSelected: null, source: './algo.md',
        views: ['Single','Grid','Most Popular'], currentView: 'Single',
        post: 'algo',
    }

    componentDidMount(){
        this.setCategoryData();
        this.setQuestionData('array');
    }

    setCategoryData = () => {

        const categoriesAPI = [{id: 1, value:'Array'}, {id: 2,value:'Sorting'}, {id: 3,value:'DP'}, {id: 4,value:'Recursion'}, {id: 5,value:'Tree'}];
        this.setState({
            categories: categoriesAPI,
            categorySelected: categoriesAPI[0]['value']
        });
        
    };
    setQuestionData = (term) =>{
        //TODO questions API request Vr. 2

        const response = require(`../data/questions/${term}Questions.json`);
        console.log(response);
        console.log(response[0]);
        this.setState({
            questions: response,
            questionSelected: response[0]
        });
    };
    onQuestionSelect = (question) => {
        //console.log('from App Question is : ', question);
        if (question !== this.state.questionSelected){
            this.setState( { questionSelected: question });
        } else {
            console.log('Same Question Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };

    onCategorySelect = (category) => {
        //console.log('from App Category is : ', category);
        if (category !== this.state.categorySelected){
            this.setState( { categorySelected: category });
        } else {
            console.log('Same Category Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };
    onQuestionView = (view) => {
        if (view !== this.state.currentView){
            this.setState({currentView: view});
        } 
    };

    onViewSelect = (view) => {
        if (view !== this.state.currentView){
            this.setState({currentView: view});
        } 
    };

    //Helper Function
    questionRenderContent = () => {
        if ( this.state.questionSelected == null) {
            return <div>Loading....... </div>;
        } else {
            return (
                <QuestionDisplay
                    question={this.state.questionSelected}
                />
            );
        }
    }
    

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
                <div className="ui container grid">
                    <div className="ui stackable two column grid">
                        <div className="thirteen wide two column grid question">
                            <div className="ui segment question">

                                {this.questionRenderContent()}
                                <div className="ui stackable doubling two column grid">
                                    <CodeDisplay 
                                        answerId={this.state.post}
                                    />
                                    <div className="five wide column solutions">
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
                                            Array ---   DP  --- Mediumd
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        <div className="three wide stackable two column grid">
                            <QuestionList
                                current={this.state.questionSelected}
                                questions={this.state.questions}
                                onQuestionSelect={this.onQuestionSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AlgoApp;