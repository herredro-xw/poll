import React, {useState, useEffect, Fragment} from "react";
import {CheckboxGit} from '../Elements/Elementary.js';


let AnswersContainer = (props) => {
  let answers = [];
  answers = props.instance;
  let cb = props.updateChoices;
  // let handleFormSubmit = (state) => props.onSubmit(state);
  // console.log("AC:preUseState", answers);
  const [state, setState] = useState({
     checkboxes: answers.reduce(
       (options, option) => ({
         ...options,
         [option]: false
   }),{})});
   console.log("AC:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


  let createCheckboxes = () => answers.map(createCheckbox);

  useEffect(() => {
    console.log("AC:state: ", state.checkboxes);
  }, [state]);

  let createCheckbox = option => (
    <CheckboxGit
      label={option}
      isSelected={state.checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  let handleCheckboxChange = changeEvent => {
    const name = changeEvent.target.name;
    setState( (prevState) => {
      console.log('prevState', prevState);
      console.log('state', prevState);
      return{
        checkboxes: {
          ...prevState.checkboxes,
          [name]: !prevState.checkboxes[name]
        }
      }
    });
    console.log("stateAtHandle", state.checkboxes)
  };


  useEffect(() => {
    cb(state.checkboxes);
  }, [state]);


  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div className="answers">
      <form
        // onSubmit={handleFormSubmit}
        >
        {createCheckboxes()}
      </form>
    </div>
  )
}


export default AnswersContainer;
