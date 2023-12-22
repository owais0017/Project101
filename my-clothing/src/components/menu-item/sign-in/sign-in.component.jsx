import React, { useState } from "react";
import './sign-in.style.scss';

function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmail("");
        setPassword("");
    }
    const HandleChange= (event) =>{
        const {name , value} = event.target;
        name === 'email' ? setEmail(value) : setPassword(value);
        
    }

    return (
        <div className="sign-in">
            <h1>I ALREADY HAVE AN ACCOUNT</h1>
            <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

            <form onSubmit={handleSubmit}>
                <input onChange={HandleChange} name="email" type="email" value={email} required />
                <label>Email</label>
                <input name="password" type="password" value={password} required onChange={HandleChange}/>
                <label>Password</label>
                <input type="submit" value="submit form"/>
            </form>
        </div>
    )
}
export default SignIn;