const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");
JWT_SECRET = process.env.JSONSECRETKEY;
const jwt = require("jsonwebtoken");


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
    access: "read",
  };
  try {
    knex("users")
      .insert(newUser)
      .then((newUserId) => {
        res.status(201).json(newUserId[0]);
      })
      .catch(() => {
        res.status(400);
      });
  } catch {
    res.status(500).send;
  }
};

exports.login = (req, res) => {
  knex("users")
    .where({ username: req.body.username })
    .then((user) => {
      bcrypt.compare(
        req.body.password,
        user[0].hashed_pw,
        (error, data) => {
          if (!error) {
            const jwtToken = jwt.sign({ id: user[0].id, username: user[0].username, access: user[0].access}, JWT_SECRET);
            res.status(200).json({
              message: "login success",
              token: jwtToken,
            });
            console.log(error);
            console.log(data);
            console.log(user[0]);
          } else {
            res.status(401).send("This is not a valid user/password");
          }
        }
      );
    })
    .catch(() => {
      res.status(400).send('invalid username/pw');
    });
};