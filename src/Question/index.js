import React from "react";


let Question = (props) => {

  let question_instance = props.instance;

  return(

    <div className="questionscontainer">
      <h1>{question_instance}</h1>
    </div>
  )
}

export default Question;
