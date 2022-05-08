import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";
/* import "../../../../backend/controllers/articles"; */
import { tokenContext } from "../../App";

const AddArticle = () => {
  const { token, setToken } = useContext(tokenContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  setToken(localStorage.getItem("token"));

  const creatNewArticle = () => {
    axios
      .post(
        "http://localhost:5000/articles/",
        {
          title,
          description,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      .then((result) => {
        console.log(result.data);
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <p> AddArticle:</p>

      <input
        type={"text"}
        placeholder={"Title"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <textarea
        type={"text"}
        placeholder={"Description"}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>

      <br />

      <button onClick={creatNewArticle}>Create New Article</button>
      <h2>{message}</h2>
    </div>
  );
};

export default AddArticle;
