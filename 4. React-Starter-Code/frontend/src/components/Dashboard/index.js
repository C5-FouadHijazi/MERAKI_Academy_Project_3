import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";

import { tokenContext } from "../../App";

const Dashbord = () => {
const [articles, setArticles]=useState([])

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
    setToken(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setArticles(result.data.articles)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(articles);
  return (
    <div>
      {articles && articles.map((element, index) => {
        return (
          <div key={element.id}>
            
            <p>{element.title}</p>
            <p>{element.description}</p>
            <button>delete</button>
            <br />
            <button>update</button>
            <br />
            <button>Add Comment</button>
          </div>
        );
      })}
    </div>
  );
};

export default Dashbord;
