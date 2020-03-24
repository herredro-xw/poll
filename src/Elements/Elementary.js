import React, {useState} from "react";

export let Checkbox = ({text, checked, setIsChecked}) => {
  // const [isChecked, setIsChecked] = useState(checked);

  return(
    <label>
      <input
        type="checkbox"
        onClick={() => setIsChecked(!checked)}
        onChange={(event) => setIsChecked(event.currentTarget.checked)}
        checked={checked}
      />
        {text} <br/>
    </label>
  )
}
