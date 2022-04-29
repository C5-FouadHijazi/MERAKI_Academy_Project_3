
//Authuntication nedded
const authentication = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log("token: ", token);
    //verify
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        return res.json(err);
      }
      if (result.type === "Admin") {
        next();
      } else {
        res.json("not allowed");
      }
    });
  };
  