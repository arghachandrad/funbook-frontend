import { ErrorMessage, useField } from "formik"
import React from "react"
import "./style.css"

function LoginInput({ ...props }) {
  const [field, meta] = useField(props)
  console.log(props)
  console.log(field)
  console.log(meta)
  return (
    <div className="input_wrap">
      <div className="input_error">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        name={field.name}
        {...props}
        {...field}
      />
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  )
}

export default LoginInput
