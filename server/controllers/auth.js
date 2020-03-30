const { validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const encryption = require('../util/encryption');

function validateUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: 'Validation failed, entered data is incorrect',
      errors: errors.array()
    });
    return false;
  }

  return true;
}

module.exports = {
  register: (req, res, next) => {

    if (validateUser(req, res)) {
      const {  username, password, email} = req.body;
      const salt = encryption.generateSalt();
      const hashedPass = encryption.generateHashedPassword(salt, password);

      User.create({ 
        email,
        hashedPass,
        username,
        salt,
        roles: ['user']
      }).then((user) => {
        console.log(user)
        res.status(201)
          .json({ message: 'User created!', userId: user._id, username: user.username, email: user.email, roles: user.roles });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
          error.message = 'An error occurred!'
        }

        next(error);
      });
    }
  },
  login: (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({ username })
      .then((user) => {
        if (!user) {
          const error = new Error('A user with this username could not be found');
          error.statusCode = 401;
          console.log(error)
          throw error;
        }

        if(!user.authenticate(password)) {
          const error = new Error('A user with this password could not be found');
          error.statusCode = 401;
          throw error;
        }

        const token = jwt.sign({ 
          username: user.username,
          userId: user._id.toString()
        }
        , 'susipahadurjavata'
        , { expiresIn: '1h' });

         res.status(200).json(
           { 
             message: 'User successfully logged in!', 
             token, 
             userId: user._id.toString(),
             username: user.username,
             isAdmin: user.roles.indexOf('Admin') != -1,
             email: user.email,
           });
      })
      .catch(error => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }

        next(error);
      })
  },

  getProfile: (req, res, next) => {
    const {userId} = req.params;

    User.findById(userId)
        .then(user => {
          res.status(200)
            .json({message: `Got user with id ${userId}`, user})
        })
        .catch(err => {
          console.log(err);
          next(err);
        })
  }
};