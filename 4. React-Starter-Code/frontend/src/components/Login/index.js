import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);


  const LogIN = () => {
    axios
      .post("http://localhost:5000/login/", {
        email:email,
        password:password,
      })

      .then((result) => {
        // console.log(result.data.token);
        localStorage.setItem("token", result.data.token);
        setToken(localStorage.getItem("token"));
        // console.log(islogin);
        setIslogin(true);
        console.log(setIslogin);
      }).catch((err)=>{
        console.log(err.data);
      })
      
  };

  return (

    <div>
      <p>Login</p>

      <input
        type={"text"}
        placeholder={"email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type={"password"}
        placeholder={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <button onClick={LogIN}>Login</button>

      <p className={islogin ? "successful" : "error Try Again"}>{message}</p>
    </div>
  );
};

export default Login;
