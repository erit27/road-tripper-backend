const knex = require("knex")(require("../knexfile"));

exports.getUsers = (req, res) => {
  knex("users")
    .then((data) => {
        const userData = data.map( user => {
          return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.first_name,
          }
        }
          )
        res.json(userData)
      })
    .catch((err) => {
      res.status(400).json({
        'message': 'There was an error getting user data',
        'error': err
      })
    })
}
