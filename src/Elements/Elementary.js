import React, {useState} from "react";
import { Formik, Field, Form } from "formik";
import PropTypes from 'prop-types'

export const CheckboxGit = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
        key={label}
      />
      {label}
    </label>
  </div>
);


// export let Checkbox2 = ({text, checked, setIsChecked}) => {
//   // const [isChecked, setIsChecked] = useState(checked);
//
//   return(
//     <label>
//       <input
//         type="checkbox"
//         onClick={() => setIsChecked(!checked)}
//         onChange={(event) => setIsChecked(event.currentTarget.checked)}
//         checked={checked}
//       />
//         {text} <br/>
//     </label>
//   )
// }
//
// export const CheckFormik = ({answer, id="checkbox", callback}) => (
//     <Formik
//       initialValues={
//         {
//         toggle: false
//         }
//       }
//       onSubmit={async values => {
//         alert(JSON.stringify(values, null, 2));
//         callback(values)
//       }}
//     >
//       {({ values }) => (
//
//           <label>
//             <Field type="checkbox" name={id} id={id} />
//             {answer}
//             {` (${values.toggle})`}
//
//           </label>
//
//       )}
//     </Formik>
//
// );



// export const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
//   <input
//     type={type}
//     name={name}
//     checked={checked}
//     onChange={onChange}
//   />
// );
