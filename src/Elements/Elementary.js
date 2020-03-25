import React, {useState} from "react";
import { Formik, Field, Form } from "formik";
import PropTypes from 'prop-types'

export let Checkbox2 = ({text, checked, setIsChecked}) => {
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

export const CheckFormik = ({answer, id="checkbox", callback}) => (
    <Formik
      initialValues={
        {
        toggle: false
        }
      }
      onSubmit={async values => {
        alert(JSON.stringify(values, null, 2));
        callback(values)
      }}
    >
      {({ values }) => (

          <label>
            <Field type="checkbox" name="toggle" id={id} />
            {answer}
            {`${values.toggle}`}

          </label>

      )}
    </Formik>

);


export const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input
    type={type}
    name={name}
    checked={checked}
    onChange={onChange}
  />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
