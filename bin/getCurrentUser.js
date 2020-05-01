const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SIGNATURE;

const getCurrentUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        console.log(req.email);
        res.json({ email: req.email });
        // now find a way to access this from whomever called the route!
      }
    });
  }
}

module.exports = getCurrentUser;