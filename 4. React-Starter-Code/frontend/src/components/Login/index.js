import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [message, setMessage] = useState("");
  const [islogin, setIslogin] = useState(false);

  const [token, setToken] = useContext(tokenContext).token; 

  const LogIN = () => {
    axios
      .post("http://localhost:5000/login/", {
        email,
        password,
      })

      .then((result) => {
        console.log(result);
/*         setToken(result.data.token); */
        setIslogin(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setMessage(err.response.data.message);
        setIslogin(false);
      });
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