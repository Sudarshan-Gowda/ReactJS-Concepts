// import { useState } from "react";
import useInput from "../hooks/use-input";

const BasicValidate = (value) => value.trim() !== "";
const EmailValidate = (value) => BasicValidate && value.includes("@");

const BasicForm = (props) => {
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  // const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  // const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredFirstNameIsValid = firstname.trim() !== "";
  // const enteredLastNameIsValid = lastname.trim() !== "";
  // const enteredEmailIsValid = email.trim() !== "";

  // const firstNameInputIsInvalid =
  //   !enteredFirstNameIsValid && enteredFirstNameTouched;

  // const lastNameInputIsInvalid =
  //   !enteredLastNameIsValid && enteredLastNameTouched;

  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const {
    value: firstname,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(BasicValidate);

  const {
    value: lastname,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastnameInput,
  } = useInput(BasicValidate);

  const {
    value: email,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(EmailValidate);

  let isFormValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid)
    isFormValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredFirstNameTouched(true);
    // setEnteredLastNameTouched(true);
    // setEnteredEmailTouched(true);

    if (
      firstNameInputIsInvalid ||
      lastNameInputIsInvalid ||
      emailInputIsInvalid
    ) {
      return;
    }

    //reset
    // setFirstName("");
    // setLastName("");
    // setEmail("");

    //reset -touched
    // setEnteredFirstNameTouched(false);
    // setEnteredLastNameTouched(false);
    // setEnteredEmailTouched(false);

    resetFirstNameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  // const firstNameChangeHandler = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const lastNameChangeHandler = (event) => {
  //   setLastName(event.target.value);
  // };

  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const firstNameBlurHandler = (event) => {
  //   setEnteredFirstNameTouched(true);
  // };

  // const lastNameBlurHandler = (event) => {
  //   setEnteredLastNameTouched(true);
  // };

  // const emailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            value={firstname}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputIsInvalid && (
            <p className='error-text'>Entered First Name is invalid</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            value={lastname}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputIsInvalid && (
            <p className='error-text'>Entered Last Name is invalid</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Entered Email is invalid</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
