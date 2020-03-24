import React, { useState, useEffect }  from "react";

import Question from './../Question'
import Answers from './../Answers'
import Options from './../Options'

let QuestionsContainer = (props) => {

  let [counter, setCounter] = useState(0);
  let questions = props.questions;
  let [focus, setFocus] = useState('start'); // 'start', 'running', 'lastQ', 'end'
  let [currentInstance, setCurrentInstance] = useState(questions[counter]);

  let checkIfLast = () => {
    if ((counter+1) >= questions.length) {
      console.log("checkIfLast: run out of questions");
      setFocus('lastQ')
    }
  }

  let nextQ = (info) => {
    if (focus === 'lastQ') {
      setFocus('end')
    }
    else {setCounter(counter+1);}
  }

  let start = (info) => {
    console.log(info);
    setCounter(0);
    setFocus('running')
    setCurrentInstance(questions[counter]);
  }
  let reset = (info) => {
    console.log('reset');
    setCounter(0);
    setCurrentInstance(questions[counter]);
    setFocus('start');
  }

  let content =(
    <div>
      {/*  This is where the content is shown */}
    </div>);

  let out_option = null;
  let out_question = null;
  let out_answer = null;

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
        <div>
          <Options
            name="next"
            cb={(info) => nextQ(info)}
          />
          <Options
            name="reset"
            cb={(info) => reset(info)}
          />
        </div>
      )
      out_question = (<div><Question instance={currentInstance.question}/></div>)
      out_answer = (<div><Answers instance={currentInstance.answers} /></div>)
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
      out_question = (<div><Question instance={currentInstance.question}/></div>)
      out_answer = (<div><Answers instance={currentInstance.answers} /></div>)
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
      content = <div>None of the cases holded. @dev: Please Check</div>
      break;
  }




  useEffect(()=>{
    console.log("new state: ", focus);
  }, [focus]);

  useEffect(()=>{
    console.log("new counter: ", counter);
  }, [counter]);

  useEffect(() => {
    console.log('updating instance');
    setCurrentInstance(questions[counter]);
    checkIfLast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div>
      {out_question}
      {out_answer}
      {out_option}
    </div>

  )

}


export default QuestionsContainer;
