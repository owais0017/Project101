import React, { useState } from "react";
import "./sign-up.style.scss";
import CustomButton from '../custom-button/custom-button.component'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    auth,
    createUserProfileDocument,
} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

function SignUp() {
    const [userInfo, setUserInfo] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handlesubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInfo;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(auth,email, password);
      await createUserProfileDocument(user, { displayName });
      setUserInfo({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    
  };


  const { displayName, email, password, confirmPassword } = userInfo;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handlesubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handlechange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handlechange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlechange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handlechange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
