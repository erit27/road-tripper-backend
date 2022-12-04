const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
const {uuid} = require('uuidv4');

// exports.newUser = (req, res) => {
//   knex("users")
//   .insert(req.body)
//   .then((newUserId) => {
//     res.status(201).json(newUserId[0])
//   }
//     )
//   .catch(() => {
//     res.status(400);
//   })

//     // res.status(500).send();
  
// }

exports.createAccount = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.hashed_pw, salt);
		console.log('salt', salt);
		console.log('hashedpw', hashedPassword);
    const newId = uuid();
    const newUser = {
			username: req.body.username,
			hashed_pw: hashedPassword,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
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
  

    // res.status(500).send();
  
}