import React, {useEffect} from "react";
import {Checkbox} from '../Elements/Elementary.js';

let QuestionsContainer = (props) => {

  // Init
  const getArray = (answers) => {
    let arr = []
    Object.keys(answers).forEach(function(key) {
      arr.push(answers[key]);
    });
    return(arr);
  };

  let answers_array = null;


  answers_array = getArray(props.instance);


  let html_out = (
    <form>
      <div id="answers">

        <input type="checkbox" name="answer-a" id="cb1" onChange={()=>{document.getElementById('cb1').click();console.log("clicked");}}/>
          {answers_array[0]} <br/>
        <input type="checkbox" name="answer-b" className="checkbox"/>
          {answers_array[1]} <br/>
        <input type="checkbox" name="answer-c" />
          {answers_array[2]} <br/>
        <input type="checkbox" name="answer-d" />
          {answers_array[3]} <br/>


      </div>
    </form>)

  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div className="answers">
      {html_out}
    </div>
  )
}

export default QuestionsContainer;
