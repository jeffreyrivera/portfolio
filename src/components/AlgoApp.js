import './AlgoApp.css';
import React from 'react';
import QuestionsMenu from './QuestionsMenu';
import ViewMenu from './ViewMenu';
import CodeDisplay from './CodeDisplay'
import QuestionList from './QuestionList';
import QuestionDisplay from './QuestionDisplay';
import Question from './Question';


class AlgoApp extends React.Component {
    state = { 
        questions: [], categories: [], answers: [], categorySelected: null, 
        questionAnswers: null, questionSelected: null, answerSelected: null, 
        views: ['Single','Grid','List'], currentView: 'Single',
        post: '101_501', questionRef : React.createRef()
    }

    componentDidMount(){
        this.setData();
        //TODO vr. 2 loading component until api request finishes
    }
    

    setData = async () => {
        const categoriesAPI = [{id: 1, value:'Array'}, {id: 2,value:'Sorting'}, {id: 3,value:'DP'}, {id: 4,value:'Recursion'}, {id: 5,value:'Tree'}];
        const initialCategory = categoriesAPI[0]['value']

        //TODO questions API request Vr. 2
        const questionsResponse = await require(`../data/questions/${initialCategory}Questions.json`);
        console.log(questionsResponse);
        console.log(questionsResponse[0]);
        const questionSelected = questionsResponse[0]
        
        //TODO asnswers API request Vr. 2
        const answerResponse = await require(`../data/questions/${initialCategory}Answers.json`); 
        
        const answersAvailable = answerResponse.filter((answer) => {
            return answer.q_id === questionSelected.id;
        });
        
        //pick one answer


        //TODO response stagging loading screen while loading API request Vr. 2
        this.setState({
            categories: categoriesAPI,
            categorySelected: categoriesAPI[0]['value'],
            questions: questionsResponse,
            questionSelected: questionSelected,
            answers: answerResponse,
            questionAnswers: answersAvailable,
            answerSelected: answersAvailable[0],
        });
        
    }

    onQuestionSelect = (question) => {
        //console.log('from App Question is : ', question);
        if (question !== this.state.questionSelected){

            const newAnswers= this.state.answers.filter((answer) => {
                return answer.q_id === question.id;
            });
            
            //console.log(newAnswers);
            this.setState( { 
                questionSelected: question,
                questionAnswers: newAnswers,
                answerSelected: newAnswers[0]
            });
            this.updateChild(newAnswers[0]);

        } else {
            console.log('Same Question Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };
    updateChild = (code) => {
        this.state.questionRef.current.updateCode(code); 
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

    onViewSelect = (view) => {
        if (view !== this.state.currentView){
            this.setState({currentView: view});
        } 
    };

    //Helper Function
    renderQuestionContent = () => {
        if (this.state.questionSelected === null || this.state.answerSelected === null) {
            return <div>Loading....... </div>;
        } else {
            return(
                <Question
                    question={this.state.questionSelected}
                    answer={this.state.answerSelected}
                    ref={this.state.questionRef}
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
                            {this.renderQuestionContent()}                           
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