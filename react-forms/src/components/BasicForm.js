import useInput from "../hooks/use-input";

const BasicValidate = (value) => value.trim() !== "";
const EmailValidate = (value) =>
  BasicValidate && value.includes("@") && value.length >= 2;

const BasicForm = (props) => {
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

    if (
      firstNameInputIsInvalid ||
      lastNameInputIsInvalid ||
      emailInputIsInvalid
    ) {
      return;
    }

    resetFirstNameInput();
    resetLastnameInput();
    resetEmailInput();
  };

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
