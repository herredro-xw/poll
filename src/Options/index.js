import React, { useState, useEffect }  from "react";

let Options = (props) => {

  let ch_next = (info) => {
    console.log('clicked next');
    props.next(info)
  }

  let ch_reset = (info) => {
    props.reset(info)
  }
  if (props.questionsLeft){
    return(
      <div className="optionscontainer">
        <button
          onClick={() => ch_next('next')}>next(cb)</button>
        <button
          onClick={() => props.reset('reset')}>reset(cb)</button>
      </div>

    )
  } else {
    return (
      <div className="optionscontainer">
        <button
          onClick={() => props.start('start')}>start(cb)</button>
      </div>
    )
  }
}

let Start = (props) => {

}

export default Options;
