import React from 'react';

function Input(props) {
  return (
    <form id="input" onSubmit={props.submitHandler}>
      <div id="checkboxDiv">
        <label htmlFor="evenOnly">Even Numbers Only</label>
        <input type="checkbox" id="evenOnly"></input>
        <label htmlFor="oddOnly">Odd Numbers Only</label>
        <input type="checkbox" id="oddOnly"></input>
      </div>
      <button id="submitButton">Generate Number</button>
    </form>
  );
}

export default Input;
