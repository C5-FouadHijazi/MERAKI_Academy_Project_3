import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [message, setMessage] = useState("");
  const [isRegistered, setIsReg] = useState(false);
  const role = "626b6d93a63ed20d4ea34b10";

  const addUser = () => {
    axios
      .post("http://localhost:5000/users/", {
        email,
        password,
        country,
        lastName,
        firstName,
        age,
        role,
      })
      .then((result) => {
        console.log(result);
        setMessage(result.data.message);
        setIsReg(true);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setIsReg(false);
      });
  };
  return (
    <div>
      <p>Register</p>

      <br />
      <input
        type={"text"}
        placeholder={"first name"}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <br />
      <input
        type={"text"}
        placeholder={"last name"}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <br />
      <input
        type={"number"}
        placeholder={"age"}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <br />
      <input
        type={"text"}
        placeholder={"country"}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />

      <br />
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
      <button onClick={addUser}>Register</button>

      <p className={isRegistered ? "successful" : "error Try Again"}>
        {message}
      </p>
      
    </div>
  );
};

export default Register;
