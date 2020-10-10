import React from "react";
import { useFormInput, useWindowResize, useDocumentTitle } from "../../hooks";
import "./index.css";

function SignupForm() {
  const firstname = useFormInput("");
  const lastname = useFormInput("");
  const width = useWindowResize();
  useDocumentTitle(firstname.value, lastname.value);

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        width: width,
      })
    );
    firstname.setValue("");
    lastname.setValue("");
  }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="field-container">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={firstname.value}
          onChange={firstname.handleValueChange}
        />
      </div>
      <div className="field-container">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={lastname.value}
          onChange={lastname.handleValueChange}
        />
      </div>

      <div className="field-container">
        <span>Window Width: {width}</span>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
