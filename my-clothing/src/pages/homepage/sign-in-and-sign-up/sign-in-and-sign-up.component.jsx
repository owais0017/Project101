import React from "react";
import './sign-in-and-sign-up.style.scss';
import SignIn from "../../../components/menu-item/sign-in/sign-in.component";
import SignUp from "../../../components/menu-item/sign-up/sign-up.component";

const SignInAndSignUp = () => {
    return(
        <div className="sign-in-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignInAndSignUp;