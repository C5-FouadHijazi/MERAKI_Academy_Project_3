import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Dashbord = () => {
  return (
    <div>
      <input type={"text"} placeholder={"email"} />
      <br />
      <input type={"password"} placeholder={"password"} />
    </div>
  );
};

export default Dashbord;


