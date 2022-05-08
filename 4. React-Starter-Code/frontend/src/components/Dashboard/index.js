import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./style.css";

import { tokenContext } from "../../App";

const Dashbord = () => {
  const [articles, setArticles] = useState([]);
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");

  const [comment, setComment] = useState("");

  const [description, setDescription] = useState("");

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
        setArticles(result.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  // this function will delete the Article we chose by Id

  return (
    <div>
      {articles &&
        articles.map((element, index) => {
          return (
            <div key={element.id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
              {element.comments.map((el) => {
                return <p>{el.comment}</p>;
              })}
              <button
                className={element._id}
                onClick={(e) => {
                  axios
                    .delete(
                      `http://localhost:5000/articles/${e.target.className}`,
                      {
                        headers: {
                          authorization: `Bearer ${token}`,
                        },
                      }
                    )
                    .then((result) => {
                      console.log(result);
                      setUpdate(!update);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                x
              </button>
              <br />
              <button
                className={element._id}
                onClick={(e) => {
                  axios
                    .put(
                      `http://localhost:5000/articles/${e.target.className}`,
                      {
                        title: title,
                        description: description,
                      }
                    )
                    .then((result) => {
                      console.log(result);
                      setUpdate(!update);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                update
              </button>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <br />
              <button
                className={element._id}
                onClick={(e) => {
                  axios
                    .post(
                      `http://localhost:5000/articles/${e.target.className}/comments/`,
                      {
                        comment: comment,
                      },
                      {
                        headers: {
                          authorization: `Bearer ${token}`,
                        },
                      }
                    )
                    .then((result) => {
                      console.log(result);
                      setUpdate(!update);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Add Comment
              </button>
              <input
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Dashbord;
