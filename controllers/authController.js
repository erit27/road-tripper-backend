const knex = require("knex")(require("../knexfile"));

exports.createUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then((newUserId) => {
      res.status(201).json(newUserId[0]);
    })
    .catch(() => {
      res.status(400).json({
        message: 'Error creating new user'
      })
    })
}

