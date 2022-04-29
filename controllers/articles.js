const articleModel = require("../models/articleSchema");
const commentModel = require("../models/commentSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//**P2.A] 2.getAllArticles
const getAllArticles = (req, res) => {
  articleModel
    .find({})
    .then((result) => {
      res.send({
        success: true,
        message: "All the articles",
        articles: result,
      });
    })
    .catch((err) => {
      res.send({ success: false, message: "Server Error", err: err.massage });
    });
};

/* const getArticleByAuthor = (req, res) => {
  const author = req.query.author;
  const find = articles.filter((element) => {
    return element.author === author;
  });
  if (find.length === 0) {
    res.status(404).json();
  } else {
    res.status(200).json(find);
  }
}; */

///////////////////////////////////

//**P2.A] 3.getAllArticles
const getArticleByAuthor = (req, res) => {
  const author = req.query.author;
  articleModel
    .find({ author: author })

    .then((result) => {
      if (result.length === 0) {
        res.status(404).json({
          success: false,
          message: `The author => ${author} has no articles`,
        });
      } else {
        res.json({
          success: true,
          message: `All the articles for the author → ${author}`,
          articles: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

///////////////

//**P2.A] 4.getArticleByID
const getArticleByID = (req, res) => {
  const id = req.query.id;
  articleModel
    .find({ _id: id })

    .then((result) => {
      if (result.length === 0) {
        res.status(404).json({
          success: false,
          message: "The article is not found",
        });
      } else {
        res.json({
          success: true,
          message: `Tauthorhe article with id → ${id}`,
          articles: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

////////////////Q4/////////////

/* const createNewArticle = (req, res) => {
  let newArticle = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  };
  articles.push(newArticle);

  res.status(201).json(newArticle);
};
 */
/////////////////////////////////////

//**P2.A] 1.createNewArticle
const createNewArticle = (req, res) => {
  const { title, description, author } = req.body;
  const newArticle = new articleModel({
    title,
    description,
    author,
  });

  newArticle
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Article created",
        author: newArticle,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

///////////////////////////////////

/* const userModel = require("../models/userSchema");
const { query } = require("express");

const user = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}; */

////////////Q5/////////////////////////

/* const updateArticleById = (req, res) => {
  let done = articles.find((elemnt) => {
    return elemnt.id == req.params.id;
  });

  done.title = req.body.title;
  done.description = req.body.description;
  done.author = req.body.author;

  res.status(200);
  res.json(done);
}; */

/////////////////////////////////////

//**P2.A] 5.updateArticleById
const updateArticleById = (req, res) => {
  const id = req.params.id;

  //const { title, description, author } = req.body;

  articleModel
    /*  .findOneAndUpdate({ _id: id }, { title:req.body.title, description:req.body.description, author:req.body.author }, { new: true }) */
    .findOneAndUpdate({ _id: id }, req.body)
    .then((result) => {
      if (result === null) {
        res.status(404).json({
          success: false,
          message: "The article is not found",
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Article updated",
          article: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.massage,
      });
    });
};

//**P2.A] 6.deleteArticleById
const deleteArticleById = (req, res) => {
  const id = req.params.id;

  //const { title, description, author } = req.body;

  articleModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      if (result === null) {
        res.status(404).json({
          success: false,
          message: `The article with id ⇾ ${id} is not found`,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Article deleted",
          article: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.massage,
      });
    });
};
/////////////////////////////////////

/* const deleteArticleById = (req, res) => {
  let doneObj;
  let doneindex;
  //
  articles.forEach((elemnt, index) => {
    if (elemnt.id == req.params.id) {
      doneObj = elemnt;
      doneindex = index;
    }
  });

  if (doneObj) {
    articles.splice(doneindex, 1);

    res.status(200);

    res.json({
      success: true,
      message: `Succeeded to delete article with id: ${req.params.id}`,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `Failed to delete article with id:_${req.params.id}`,
    });
    console.log("not found");
  }
}; */


/* 
const deleteArticlesByAuthor = (req, res) => {
  articles = articles.filter((elemnt) => {
    return elemnt.author !== req.body.author;
  });

  if (articles) {
    res.status(200);

    res.json({
      success: true,
      message: `Succeeded to delete article with the author: ${req.body.author}`,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `Failed to delete article with the author:${req.body.author}`,
    });
    console.log("not found");
  }
}; */

/////////////////////////////////////

//**P2.A] 7.deleteArticlesByAuthor
const deleteArticlesByAuthor = (req, res) => {
  const author = req.body.author;

  //const { title, description, author } = req.body;
  console.log(author);
  articleModel
    .deleteMany({ author: author })
    .then((result) => {
      console.log(result);
      if (result === null) {
        res.status(404).json({
          success: false,
          message: `No articles for this author`,
        });
      } else {
        res.status(200).send({
          success: true,
          message: `Deleted articles for the author => ${author}`,
          article: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.massage,
      });
    });
};


//**P2.B] 7.createNewComment
const createNewComment = (req, res) => {
  const { comment, commenter } = req.body;
  const newComment = new commentModel({
    comment,
    commenter,
  });

  newComment
    .save()
    .then((result) => {
      console.log(result); //result=>(newComment)
      res.status(201).json(result);
      articleModel
        .findByIdAndUpdate(
          { _id: req.params.article_id },
          { $push: { comments: result._id } }
        )
        .then((result) => {
          console.log(result);
        });
    })
    .catch((err) => {
      res.status(500);
      res.json({ 
        massage: "server error",
         err: err.message });
    });
};






module.exports = {
  getAllArticles,
  getArticleByAuthor,
  getArticleByID,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
  createNewComment,
};