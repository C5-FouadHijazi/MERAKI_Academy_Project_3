const roleModel = require("../models/rolesSchema")

const createNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new roleModel({ 
      role,
    permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Success role created",
        author: newRole,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    });
};
module.exports = { createNewRole};