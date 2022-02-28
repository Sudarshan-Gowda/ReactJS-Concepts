import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// const emailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: "", isValid: false };
// };

// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.length > 6 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.length > 6 };
//   }
//   return { value: "", isValid: false };
// };

const formReducer = (state, action) => {
  let formState = {
    emailState: "",
    isEmailValid: null,
    passwordState: "",
    isPasswordValid: null,
  };
  if (action.type === "EMAIL_INPUT") {
    formState = {
      emailState: action.val,
      isEmailValid: action.val.includes("@"),
      passwordState: state.passwordState,
      isPasswordValid: state.isPasswordValid,
    };
  }

  if (action.type === "PASSWORD_INPUT") {
    formState = {
      emailState: state.emailState,
      isEmailValid: state.isEmailValid,
      passwordState: action.val,
      isPasswordValid: action.val.length > 6,
    };
  }

  if (action.type === "EMAIL_INPUT_BLUR") {
    formState = {
      emailState: state.emailState,
      isEmailValid: state.emailState.includes("@"),
      passwordState: state.passwordState,
      isPasswordValid: state.isPasswordValid,
    };
  }

  if (action.type === "PASSWORD_INPUT_BLUR") {
    formState = {
      emailState: state.emailState,
      isEmailValid: state.isEmailValid,
      passwordState: state.passwordState,
      isPasswordValid: state.passwordState.length > 6,
    };
  }

  return formState;
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  //  const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const [emailState, dispatchEmail] = useReducer(emailReducer, {
  //   value: "",
  //   isValid: null,
  // });

  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: "",
  //   isValid: null,
  // });

  const [formState, dispatchFormAction] = useReducer(formReducer, {
    emailState: "",
    isEmailValid: null,
    passwordState: "",
    isPasswordValid: null,
  });

  const { isEmailValid: emailIsValid } = formState;

  const { isPasswordValid: passwordIsvalid } = formState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsvalid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsvalid]);

  const emailChangeHandler = (event) => {
    // dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    dispatchFormAction({ type: "EMAIL_INPUT", val: event.target.value });

    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    //dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    dispatchFormAction({ type: "PASSWORD_INPUT", val: event.target.value });

    // setFormIsValid(
    //   passwordState.value.trim().length > 6 && emailState.value.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    // dispatchEmail({ type: "INPUT_BLUR" });
    dispatchFormAction({ type: "EMAIL_INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    // dispatchPassword({ type: "INPUT_BLUR" });
    dispatchFormAction({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(emailState.value, passwordState.value);
    props.onLogin(formState.emailState, formState.passwordState);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={formState.emailState}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={formState.passwordState}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
