const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = process.env.JWT_SIGNATURE;

const authenticate = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal error, please try again' });
    } else if (!user) {
      res.status(401).json({ error: 'Incorrect email or password' });
    } else {
      user.isCorrectPassword(password, (err, same) => {
        if (err) {
          res.status(500).json({ error: 'Internal error, please try again' });
        } else if (!same) {
          res.status(401).json({ error: 'Incorrect email or password' });
        } else {
          // Issue Token
          const payload = { id: user._id, email: user.email };
          const token = jwt.sign(payload, secret, { expiresIn: '1h' });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
}

module.exports = authenticate;