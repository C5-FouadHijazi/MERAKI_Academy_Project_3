import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashbord from "./components/Dashboard";

import AddArticle from "./components/AddArticle";

export const tokenContext = createContext();

const App = () => {
  const [login, isLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [islogin, setIslogin] = useState(false);

  //hook useEffect for Token

 /*  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  return (
    <div className="App">
      <tokenContext.Provider
        value={{
          token,
          setToken,
          login,
          isLoggedIn,
          message,
          setMessage,
          islogin,
          setIslogin,
        }}
      >
        <h1>Welcome To APP</h1>

        <Navbar />

        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route
            path="/login" element={ <Login />}
          />

          <Route path="/addnewarticle" element={<AddArticle />} />

          <Route path="/dashbord" element={<Dashbord />} />

          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </tokenContext.Provider>
    </div>
  );
};

export default App;
