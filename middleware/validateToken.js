const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validateToken = asyncHandler(async (req, res,next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error('user not authorized');
      }
      req.user = decode.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error('user not authorized or token is missing');
    }
  }
});

module.exports = validateToken;
