import * as React from 'react';
import  { useEffect, useState } from "react";
import { useLogin, useNotify, Notification } from 'react-admin';
import "./MyloginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const login = useLogin();
    const notify = useNotify();
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);
    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
<div className="wrapper">
  <div className="container">
    <div className="col-left">
      <div className="login-text">
        <h2>Welcome Back</h2>
        <p>Create your account.<br></br>It's totally free.</p>
        <a className="btn" href="">Sign Up</a>
      </div>
    </div>
    <div className="col-right">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username or email address<span>*</span></label>
            <input placeholder="Username or Email" type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}                 name="email"
                required></input>
          </p>
          <p>
            <label>Password<span>*</span></label>
            <input type="password" placeholder="Password" name="password"
                
                value={password}
                onChange={e => setPassword(e.target.value)} required></input>
          </p>
          <p>
            <input type="submit" value="Sing In"  onClick={() => signInWithGoogle} />
          </p>
          <p>
            <a href="">Forget Password?</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  
</div>
       
    );
};

export default MyLoginPage;