import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import createUser from "./createUser";
import login from "./login";
import "./style.css";

const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
const checkData = (reg, inputData) => {
  return reg.test(inputData);
};

const Registration = () => {

  let history = useHistory();
  const [register, isRegiter] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let buttonSubmitText = "Sign In";
  let buttonRegisterText = "Registration";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkData(regEmail, email) && checkData(regPassword, password)) {
      const user = {
        email: email,
        password: password
      };
      await createUser(user);
      const content = await login(user);
      console.log(content);
      history.push("/start", { token: content.token });
    }
  };
  const checkButton = () => {
    register ? isRegiter(false) : isRegiter(true);
  };
  if (register) {
    buttonSubmitText = "Sign In";
    buttonRegisterText = "Registration";
  }
  else {
    buttonSubmitText = "Log In";
    buttonRegisterText = "I am already registered";
  }

  return (
    <>
      < form className="form" onSubmit={onSubmit} >

        <input
          onChange={(event) => setEmail(event.target.value)}
          className="input-form"
          type="email"
          name="useremail"
          placeholder="Email "
          title="Must be in the following order: characters@characters.domain"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          className="input-form"
          type="password"
          name="userPassword"
          placeholder="Password"

          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />

        <button className="submit" type="submit" >
          {buttonSubmitText}
        </button>
      </form >
      <div className="registration" onClick={checkButton}>
        <button className="register-button" >
          {buttonRegisterText}
        </button>
      </div>
    </>
  );

};
export default Registration;