import React, { useState, useEffect }  from "react";

import Question from './../Question'
import Answers, {AnswersDyn} from './../Answers'
import Options from './../Options'

let QuestionsContainer = (props) => {

  let [counter, setCounter] = useState(0);
  let questions = props.data;
  let [focus, setFocus] = useState('running'); // 'start', 'running', 'lastQ', 'end'
  let [currentInstance, setCurrentInstance] = useState(questions[counter]);
  let [answers, setAnswers] = useState([]);

  let updateAnswers = (answersArray) => {
    console.log("updateAnswers, got: ", answersArray);
    setAnswers(answersArray);
  };

  let start = (info) => {
    console.log("QC.start():", info);
    setCounter(0);
    setFocus('running')
    setCurrentInstance(questions[counter]);
  }
  let nextQ = (info) => {
    // console.log("QC.nextQ():should update database with", answers);
    if (focus === 'lastQ') {
      setFocus('end')
    }
    else {setCounter(counter+1);}
  }

  let backQ = (info) => {
    setCounter(counter-1);
  }

  let reset = (info) => {
    console.log('QC: RESETING');
    setCounter(0);
    setCurrentInstance(questions[counter]);
    setFocus('start');
  }

  let checkIfLast = () => {
    if ((counter+1) >= questions.length) {
      setFocus('lastQ')
  } }


  let out_option = null;
  let out_question = null;
  let out_answer =
    <Answers
      instance={currentInstance.answers}
      updateChoices={(choices) => {updateAnswers(choices)}}/>;

  switch(focus){
    case 'start':
      out_option = (
        <div>
          <Options
            name="start"
            cb={(info) => start(info)}
          />
        </div>
      )
      break;
    case 'running':
      out_option = (
        <div id="buttons">
          <Options
            name="next"
            cb={(info) => {
              nextQ(info);
            }}
          />
          <Options
            name="back"
            cb={(info) => backQ(info)}
          />
          <Options
            name="reset"
            cb={(info) => reset(info)}
          />
        </div>
      )
      out_question = (<div>
        <Question
          instance={currentInstance.question}/></div>)
      break;
    case 'lastQ':
      out_option = (
        <div>
          <Options
            name="finish"
            cb={(info) => nextQ(info)}
          />
          <Options
            name="reset"
            cb={(info) => reset(info)}
          />
        </div>
      )
      out_question = (<div>
        <Question
          instance={currentInstance.question}/></div>)
      break;
    case 'end':
      out_option = (
        <div>
          <Options
            name="reset"
            cb={(info) => reset(info)}
          />
        </div>
      )
      break;
    default:
      out_question = <div>None of the cases holded. @dev: Please Check</div>
      break;
  }

  useEffect(()=>{
    // console.log("new counter: ", counter);
  }, [counter]);

  useEffect(()=>{
    // console.log("Effect: answers updated! ", answers);
  }, [answers]);

  useEffect(() => {
    // console.log('updating instance...');
    setCurrentInstance(questions[counter]);
    checkIfLast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.

      <div
        // onSubmit={}
      >
        {out_question}
        {out_answer}
        {out_option}
      </div>

  )
}

export default QuestionsContainer;
