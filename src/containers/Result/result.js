import React from 'react';
import {connect} from 'react-redux';

import './result.scss';

import {Link} from 'react-router';



class Main extends React.Component{

  constructor(props) {
    super(props);

  }



  render () {

    const {userDetail, questions} = this.props;

    // if(!questions){
    //   window.location = "/";
    // }

    let correctAns = findNoOfCorrectAnswer(questions);

    const {name , email , mobile} = userDetail;


    return (
      <div className="container">

        <div className="max-1200 pad_top welcome_screen score_screen">

          <h1 className="text-center "> Time Up!</h1>

          <p className="result_label">{(correctAns > 8 ? "Congratulations " : "Hey ") +name} </p>

          <p className="score">You have Scored {correctAns} out of 20</p>

        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    userDetail : state.UserDetail,
    questions : state.Questions

  };
}

export default connect(mapStateToProps)(Main);




function findNoOfCorrectAnswer(questions){

  let count = 0;

  questions.forEach((item ) => {

    if(item.correct_answer === item.userAnswer){
      count++;
    }
  });

  return count;

}
