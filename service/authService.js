const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey';

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Token não fornecido' });
  }
}

function generateToken(user) {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = { authenticateJWT, generateToken, SECRET_KEY };