import React, {useEffect, Fragment} from "react";
import {Checkbox, Checkbox2, CheckFormik} from '../Elements/Elementary.js';

let AnswersContainer = (props) => {

  let answers = props.instance;
  console.log(answers);

  let gotResponse = (response) => {
    console.log("parent got response:", response);
  }

  let out = (
    answers.map(answer => {
      return (
        <Fragment key={answer.toString()}>
          {/* <p>
            <input type="checkbox"  id={"answer-"+(answers.indexOf(answer)+1)} />
            {answer}
          </p> */}

          <p>
            <CheckFormik answer={answer} id={"answer-"+(answers.indexOf(answer)+1)} callback={gotResponse} />
          </p>
        </Fragment>
      )
    })
  )
  // let html_out = (
  //   <form>
  //     <div id="answers">
  //
  //       <input type="checkbox" name="answer-a" id="cb1" onChange={()=>{document.getElementById('cb1').click();console.log("clicked");}}/>
  //         {answers_array[0]} <br/>
  //       <input type="checkbox" name="answer-b" className="checkbox"/>
  //         {answers_array[1]} <br/>
  //       <input type="checkbox" name="answer-c" />
  //         {answers_array[2]} <br/>
  //       <input type="checkbox" name="answer-d" />
  //         {answers_array[3]} <br/>
  //
  //     </div>
  //   </form>)

  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div className="answers">
      {out}
      {/* <CheckFormik /> */}
    </div>
  )
}

export let AnswersDyn = (props) => {

  const stories = [
    { "name": "Didact introduction", "url": "http://bit.ly/2pX7HNn" },
    { name: "Rendering DOM elements ", url: "http://bit.ly/2qCOejH" },
    { name: "Element creation and JSX", url: "http://bit.ly/2qGbw8S" },
    { name: "Instances and reconciliation", url: "http://bit.ly/2q4A746" },
    { name: "Components and state", url: "http://bit.ly/2rE16nh" }
  ];
  const data = props.instance;
  console.log(data);
  return (
    <div>
      <h1>AnswersDyn</h1>
      <ul>
        {data.map(answer => {
          return (<p name={answer}>{answer} </p>)
        })}
      </ul>
    </div>
  );
}

export default AnswersContainer;
