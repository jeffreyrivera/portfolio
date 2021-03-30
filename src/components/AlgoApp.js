import './AlgoApp.css';
import React from 'react';
import QuestionsMenu from './QuestionsMenu';
import ViewMenu from './ViewMenu';
import QuestionList from './QuestionList';
import Question from './Question';
import DropDownList from './DropDownList';


class AlgoApp extends React.Component {
    state = { 
        questions: [], categories: [], answers: [], solutionsAvailable: [], 
        categorySelected: null, questionAnswers: null, questionSelected: null, answerSelected: null, 
        views: ['Single','List'], currentView: 'List', menuType: 'pointing',
        questionRef : React.createRef(), dropDownRef : React.createRef()
    }

    componentDidMount(){
        this.setData();
        //TODO vr. 2 loading component until api request finishes
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        if (window.innerWidth <= 760){
            this.setState({
                menuType: 'vertical'
            });
        } else {
            this.setState({
                menuType: 'pointing'
            });
        }
    };
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }
    

    setData = async () => {
        const categoriesAPI = [{id: 1, value:'Array'}, {id: 2,value:'Sorting'}, {id: 3,value:'DP'}, {id: 4,value:'Recursion'}, {id: 5,value:'Tree'}];
        const initialCategory = categoriesAPI[0]['value'];

        //TODO questions API request Vr. 2
        const questionsResponse = await require(`../assets/questions/${initialCategory}Questions.json`);
        const questionSelected = questionsResponse[0];
        
        //TODO asnswers API request Vr. 2
        const answerResponse = await require(`../assets/answers/${initialCategory}Answers.json`); 
        
        const answersAvailable = answerResponse.filter((answer) => {
            return answer.q_id === questionSelected.id;
        });
        
        const solutions = [];
        answersAvailable.forEach((answer) => {
            solutions.push([answer.id, answer.title]);
        });

        //TODO response stagging loading screen while loading API request Vr. 2
        this.setState({
            categories: categoriesAPI,
            categorySelected: categoriesAPI[0]['value'],
            questions: questionsResponse,
            questionSelected: questionSelected,
            answers: answerResponse,
            questionAnswers: answersAvailable,
            answerSelected: answersAvailable[0],
            solutionsAvailable : solutions
        });
        
    }

    onQuestionSelect = (question) => {
        //console.log('from App Question is : ', question);
        if (question !== this.state.questionSelected){

            const newAnswers= this.state.answers.filter((answer) => {
                return answer.q_id === question.id;
            });
            const solutionsUpdate = [];
            newAnswers.forEach((answer) => {
                solutionsUpdate.push([answer.id, answer.title]);
            });
            
            //console.log(newAnswers);
            this.setState( { 
                questionSelected: question,
                questionAnswers: newAnswers,
                answerSelected: newAnswers[0],
                solutionsAvailable : solutionsUpdate
            });
            this.updateChild();
            if (this.state.currentView === 'Single'){
                this.updateDropDown();
            }
            

        } else {
            console.log('Same Question Selected');
        }
        //TODO load appropiate questions array from API and update current questions state
    };
    updateChild = () => {
        this.state.questionRef.current.updateCode(); 
    };

    updateDropDown = () => {
        this.state.dropDownRef.current.handleClickParent(); 
    };


    onSolutionSelect = (solutionId) => {
        //console.log('from App Question is : ', question);
        if (solutionId !== this.state.answerSelected.id){

            const newAnswer = this.state.answers.find((answer) => {
                return answer.id === solutionId;
            });

            this.setState( { 
                answerSelected: newAnswer,
            });
            this.updateChild();

        } else {
            console.log('Same Solution Selected');
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
                    solutions={this.state.solutionsAvailable}
                    onSolutionSelect={this.onSolutionSelect}
                />
            );
        }
    }

    renderDropDown = (view) => {
        if (view === 'Single'){
            return (
                <DropDownList 
                    current={this.state.questionSelected}
                    questions={this.state.questions}
                    onQuestionSelect={this.onQuestionSelect}
                    ref={this.state.dropDownRef}
                />
            );
        }
    }

    renderDifferentViews = (view) => {
        if (view === 'Single'){
            return (
                <div className="ui stackable two column grid">
                    <div className="sixteen wide two column grid question">
                        {this.renderQuestionContent()}                           
                    </div>
                    
                </div>
            );
        } else  {
            return (
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
            );
        }
    }


    render() {
        return (
            <div id="App">
                <div className="ui container grid">
                    <div className="sixteen wide column category">
                        <QuestionsMenu  
                            categories = {this.state.categories}
                            current = {this.state.categorySelected}
                            onCategorySelect = {this.onCategorySelect}
                            menuType={this.state.menuType}
                        />
                        
                    </div>
                    <div className="ui container grid algo">
                        <div className="sixteen wide column algo">
                            <ViewMenu
                                current = {this.state.currentView}
                                views = {this.state.views}
                                onViewSelect = {this.onViewSelect}
                            />
                            {this.renderDropDown(this.state.currentView)}
                        </div>
                    </div>
                </div>
                <div className="ui container grid">
                    {this.renderDifferentViews(this.state.currentView)}
                </div>
                <div className="four column row spacing footer">
                </div>
            </div>
        );
    }
}


export default AlgoApp;