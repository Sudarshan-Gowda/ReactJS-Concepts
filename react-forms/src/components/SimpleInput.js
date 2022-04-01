// import { useRef, useState } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    //   setEnteredName("");
    // nameInputRef.current.value = "";
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      console.log("Inside if");
      return;
    }
    console.log("after if");

    setEnteredName("");
    setEnteredNameIsValid(true);
  };

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className='error-text'>Entered name is invalid</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
