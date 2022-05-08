import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { tokenContext } from "../../App";

const Navbar = () => {
  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setIslogin(false);
    setToken("");
  };

  return (
    <div className="Navbar">
      {islogin === true ? (
        <>
          <Link to="/dashbord">Dashboard</Link>
          <Link to="/addnewarticle">Add New Article</Link>
          <Link to="/login" onClick={logOut}>
            logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/Register/">Register</Link>
          <Link to="/login">login</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
