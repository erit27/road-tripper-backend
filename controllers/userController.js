const knex = require("knex")(require("../knexfile"));

exports.getUsers = (req, res) => {
  knex("users")
    .then((data) => {
        const userData = data.map( user => {
          return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.first_name,
            access: user.access,
            username: user.username
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

exports.updateUser = (req, res) => {
  knex("users")
    .where( {id:  req.body.id})
    .update(req.body)
    .then((data) => {
      res.status(200).send('The users access was updated')
    })
    .catch(() => {
      res.status(400).send('We could not update the users access')
    })
}