const {sign, verify} = require('jsonwebtoken');
const secret = process.env.API_SECRET || 'secret_api_00123';
const timeExpiration = process.env.TOKEN_EXPIRATION || 3600;

const generateToken = (id) => {
  const jwt = sign({id}, secret, {
    expiresIn: timeExpiration,
  });
  return jwt;
};

const verifyToken = (jwt) => {
  const decoded = verify(jwt, secret);
  return decoded;
};

module.exports = {generateToken, verifyToken};
