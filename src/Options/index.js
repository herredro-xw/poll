import React from "react";

let Options = (props) => {

  let ch_next = (info) => {
    console.log('clicked next');
    props.next(info)
  }

  let ch_reset = (info) => {
    props.reset(info)
  }

  return (
    <div className="optionscontainer">
      <button
        onClick={() => props.cb('')}>{props.name}</button>
    </div>
  )
}

let Start = (props) => {

}

export default Options;
