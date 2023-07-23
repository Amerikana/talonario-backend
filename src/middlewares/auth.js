const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {unauthorized} = require('../errors/customError');
const {verifyToken} = require('../utils/jwt.handle');

const isAuth = async (req, _, next) => {
  let response = {};
  let token = null;

  if (!req.headers.authorization) {
    return next(unauthorized('No se ha provisto el token'));
  } else {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = verifyToken(token);
      req.userId = decoded.id;

      const user = await User.findById(req.userId, {password: 0});
      if (!user) return;
      response.message = 'usuario no encontrado';
      
      req.user = user

      next();
    } catch (error) {
      return next(unauthorized(error.message));
    }
  }
};

module.exports = {isAuth};
