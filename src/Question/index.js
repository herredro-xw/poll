import React, { useState, useEffect }  from "react";


let Question = (props) => {
  // Init
  let classes = ["QuestonsContainer"];
  classes.push(props.className);
  let question_instance = props.instance;

  // States
  const [isActive, setIsActive] = useState(0);

  // State handling
  if(isActive){
    classes.push('active');
  }

  // Click handlers
  let onClickHandler = () => {
    console.log('clicked');
    setIsActive( !isActive );
  }

  // Return
  return(
    // Lyrics button gets the toggle function to "setState" of lyrics.

    <div className="questionscontainer">
      <h1>{question_instance}</h1>
    </div>
  )
}

export default Question;
