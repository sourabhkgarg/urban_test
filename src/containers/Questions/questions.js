import React from 'react';
import {connect} from 'react-redux';


import './question.scss';
import {getQueryStringValue} from '../../action/cookies';
import {FETCH_QUESTIONS } from '../../action/actionConstants';
import {browserHistory} from 'react-router';


class MakeOrder extends React.Component{

  constructor(props) {
    super(props);
    this.state = { time : 60 , animate: true};
    this.saveAnswer = this.saveAnswer.bind(this);

  }

  componentDidMount(){

    let interval = setInterval(()=>{
      this.setState({time :  (this.state.time -1)});
    }, 1000);

    let timeOut = setTimeout(() => {
      browserHistory.push('/results');

    }, 60000);

    this.setState({interval : interval, timeOut : timeOut});
  }


  componentWillUnmount(){

    clearInterval(this.state.interval);
    clearTimeout(this.state.timeOut);


  }

  saveAnswer(index, answer) {
    const {questions, dispatch} = this.props;
    let newQuestions = [...questions];
    newQuestions[index - 1].userAnswer = answer;
    dispatch({type: FETCH_QUESTIONS, payload : newQuestions});
    this.setState({animate : false});

    let animateYes = setTimeout(() => {
      this.setState({animate : true});
    }, 5);
    this.setState({animateYes : animateYes});


  }





  render () {

    const {questions} =  this.props;
    const {time, animate} = this.state;

    let q = getQueryStringValue("q");
    let questionObj = {};

    try{
      questionObj = questions[parseInt(q)-1];

    }catch (e){

    }



    return (
      <div className="container">

        <div className="max-1200 pad_top question_screen">

          {questions && animate ? React.cloneElement(this.props.children, {
            questionObj : questionObj,
            index : q,
            saveAnswer : this.saveAnswer
          }) : ""}


          <div className="timer">
            <span>{time}s</span>

          </div>

        </div>



      </div>
    );
  }

}



function mapStateToProps(state) {
  return {
    questions :  state.Questions
  };
}

export default connect(mapStateToProps)(MakeOrder);
