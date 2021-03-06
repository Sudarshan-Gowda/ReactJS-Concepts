import { useState } from "react";

const BasicForm = (props) => {
  // const [isFormvalid, setIsFormValid] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [enteredFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredEmailTouched(true);

    if (firstname.trim() === "") {
      setEnteredFirstNameIsValid(false);
      return;
    }
    if (lastname.trim() === "") {
      setEnteredLastNameIsValid(false);
      return;
    }
    if (email.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }

    //reset
    setFirstName("");
    setLastName("");
    setEmail("");

    //reset -touched
    setEnteredFirstNameTouched(false);
    setEnteredLastNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredFirstNameIsValid(true);
    }
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredLastNameIsValid(true);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredEmailIsValid(true);
    }
  };

  const firstNameBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
    if (event.target.value.trim() === "") {
      setEnteredFirstNameIsValid(false);
    }
  };

  const lastNameBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
    if (event.target.value.trim() === "") {
      setEnteredLastNameIsValid(false);
    }
  };

  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    if (event.target.value.trim() === "") {
      setEnteredEmailIsValid(false);
    }
  };

  const firstNameInputIsInvalid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const lastNameInputIsInvalid =
    !enteredLastNameIsValid && enteredLastNameTouched;

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
