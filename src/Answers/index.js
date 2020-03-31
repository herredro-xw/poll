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
   console.log("AC:xxsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


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


  // ( prevState => ({ checkboxes: {...prevState.checkboxes,[name]: !prevState.checkboxes[name]}}));


  useEffect(() => {
    cb(state.checkboxes);
  }, [state]);

  // let handleFormSubmit = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();
  //   let outcome = []
  //   Object.keys(state.checkboxes)
  //     .filter(checkbox => state.checkboxes[checkbox])
  //     .forEach(checkbox => {
  //       outcome.push(checkbox, state.checkboxes[checkbox]);
  //
  //     });
  // };

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


class AnswersContainerC extends React.Component {
  constructor(props) {
    super();
    this.answers = props.instance;
    this.cb = props.updateChoices;
    this.state = {
       checkboxes: this.answers.reduce(
         (options, option) => ({
           ...options,
           [option]: false
     }),{})};
     // console.log("stateAFTERConstr",this.state);
     console.log("AC:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  }


  createCheckboxes = () => this.answers.map(this.createCheckbox);
  createCheckbox = option => (
    <CheckboxGit
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option} />);

  handleCheckboxChange = (changeEvent) => {
    const name = changeEvent.target.name;
    console.log("stateBeforeHandle", this.state.checkboxes);
    this.state.checkboxes[name] = !this.state.checkboxes[name]
    console.log("stateAfterHandle", this.state.checkboxes);
  };

  render() {
    let createCheckboxes = () => this.answers.map(this.createCheckbox);
    let createCheckbox = option => (
      <CheckboxGit
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option} />);

    let handleCheckboxChange = (changeEvent) => {
      const name = changeEvent.target.name;
      console.log("stateBeforeHandle", this.state.checkboxes);
      this.state.checkboxes[name] = !this.state.checkboxes[name]
      console.log("stateAfterHandle", this.state.checkboxes);
    };
    return (
      <div className="answers">
        <form
          // onSubmit={handleFormSubmit}
          >
          {createCheckboxes()}
        </form>
      </div>
    );
  }
}


export default AnswersContainer;
