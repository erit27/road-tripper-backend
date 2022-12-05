const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
const {uuid} = require('uuidv4');

exports.createAccount = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newId = uuid();
    const newUser = {
			username: req.body.username,
			hashed_pw: hashedPassword,
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			id: newId,
      access: "read"
		}
  try {
    knex("users")
    .insert(newUser)
    .then((newUserId) => {
      res.status(201).json(newUserId[0])
    }
      )
    .catch(() => {
      res.status(400);
    })
  } catch {
    res.status(500).send
  }
}

// exports.login = async (req, res) => {

// try {
//   knex("users")
//   .where({ username: req.params.username})
//   .then((data))
//   .catch(() => {
//     res.status(400);
//   })
// } catch {
//   res.status(500).send
// }
// }

// app.post("/login", (request, response, next) => {
//   database("user")
//   .where({username: request.body.username})
//   .first()
//   .then(user => {
//      if(!user){
//         response.status(401).json({
//            error: "No user by that name"
//         })
//      }else{
//         return bcrypt
//         .compare(request.body.password, user.password_digest)
//         .then(isAuthenticated => {
//            if(!isAuthenticated){
//               response.status(401).json({
//                  error: "Unauthorized Access!"
//               })
//            }else{
//               return jwt.sign(user, SECRET, (error, token) => {
//                  response.status(200).json({token})
//               })
//            }
//         })
//      }
//   })
// })