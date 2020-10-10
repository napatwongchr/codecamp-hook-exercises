import React from "react";
import { useFormInput, useWindowResize } from "../../hooks";
import "./index.css";

function ContactForm() {
  const firstname = useFormInput("");
  const lastname = useFormInput("");
  const complain = useFormInput("");
  const ratings = useFormInput("");
  const width = useWindowResize();

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        ratings: ratings.value,
        complain: complain.value,
        width: width,
      })
    );
    resetForm();
  }

  function resetForm() {
    firstname.setValue("");
    lastname.setValue("");
    ratings.setValue("");
    complain.setValue("");
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
        <label htmlFor="complain">Complain</label>
        <textarea
          id="complain"
          name="complain"
          type="text"
          rows={5}
          value={complain.value}
          onChange={complain.handleValueChange}
        />
      </div>

      <div className="field-container">
        <label htmlFor="ratings">Ratings</label>
        <select
          name="ratings"
          id="ratings"
          value={ratings.value}
          onChange={ratings.handleValueChange}
        >
          <option value="">Select Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>
      <div className="field-container">
        <span>Window Width: {width}</span>
      </div>

      <button className="button button-submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
