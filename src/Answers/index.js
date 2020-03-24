import React from "react";

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

        <input type="checkbox" name="answer-a" />
          {answers_array[0]} <br/>
        <input type="checkbox" name="answer-b" />
          {answers_array[1]} <br/>
        <input type="checkbox" name="answer-c" />
          {answers_array[2]} <br/>
        <input type="checkbox" name="answer-d" />
          {answers_array[3]} <br/>
      </div>
    </form>
  )
  // Return
  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.
    <div className="answers">
      {html_out}
    </div>
  )
}

export default QuestionsContainer;
