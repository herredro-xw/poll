import React, { useState, useEffect }  from "react";

import Question from './../Question'
import Answers from './../Answers'
import Options from './../Options'

let QuestionsContainer = (props) => {

  let [counter, setCounter] = useState(0);
  let questions = props.questions;
  let [questionsLeft, setQuestionsLeft] = useState(true);
  let [currentInstance, setCurrentInstance] = useState(questions[counter]);
  console.log('init state', counter, currentInstance);

  let nextQ = (info) => {
      if ((counter) < questions.length) {
        console.log('shifting state', counter, currentInstance);
        setCounter(3);
        setCurrentInstance(questions[counter]);
        console.log('shifted state', counter, currentInstance);
      } else {
        setQuestionsLeft(false);
        console.log("no more qs.");
        setCurrentInstance(false)
      }
  }

  let reset = (info) => {
    console.log(info);
    setCounter(0);
    setQuestionsLeft(true);
    setCurrentInstance(counter);
  }

  useEffect(() => {

  })


  let out_question = <Question instance={currentInstance.question}/>;
  let out_answer = <Answers instance={currentInstance.answers} />;
  let out_option = <Options
    next={(info) => nextQ(info)}
    reset={(info) => reset(info)}/>;

  // Return
  if (props.questionsLeft){

  }
  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div className="questionscontainer">
      {out_question}
      {out_answer}
      {out_option}
    </div>
  )
}

export default QuestionsContainer;
