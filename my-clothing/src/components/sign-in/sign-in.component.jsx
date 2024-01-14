import React, { useState } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle,auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password)
      setEmail("");
      setPassword("");
    }catch(error){
      console.log(error)
    }
  };
  const HandleChange = (event) => {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div className="sign-in">
      <h1>I ALREADY HAVE AN ACCOUNT</h1>
      <span className="title">SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={HandleChange}
          name="email"
          type="email"
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          required
          onChange={HandleChange}
        />
       <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
      </form>
    </div>
  );
}
export default SignIn;
