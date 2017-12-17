import React from 'react';


import {browserHistory} from 'react-router';

import './question.scss';




class Question extends React.Component{

  constructor(props) {
    super(props);
    this.state = { answer: "" };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.selectAns = this.selectAns.bind(this);

  }

  selectAns(ans){
    this.setState({answer : ans});
  }

  nextQuestion(){
    const {index, saveAnswer} = this.props;
    const {answer} = this.state;

    saveAnswer(index, answer);
    let indexNum = parseInt(index)+1;
    if(indexNum === 21){
      browserHistory.push('/results');
    }else{
      browserHistory.push('/questions?q='+indexNum);
    }

  }


  render () {

    const {questionObj, index} = this.props;
    const {question, answers } = questionObj;

    let decodeQuestion = decodeHtml(question);

    let ansArr = answers.map((item , i ) => {

      return(
        <div key={item}>
          <input  type="radio" name="quest" value={item} onClick={this.selectAns.bind(this, item )} /> <span>{item}</span><br/>
        </div>
      );


    });




    return (

      <div className="inside_an">
          <h1 className="text-center "> {index}. Question </h1>
          <div className="question_form">
            <p>{decodeQuestion}</p>
            <form action="" className="radio_btn">
              {ansArr}
            </form>
            <button onClick={this.nextQuestion}>Next</button>
          </div>
      </div>
    );
  }

}




export default Question;


function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
