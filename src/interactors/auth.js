const {createUser, findUser} = require('../services/auth');
const {encryptPassword, verifyPassword} = require('../utils/bcrypt.handle');
const {generateToken} = require('../utils/jwt.handle');
const {conflict, notFoundError, unauthorized} = require('../errors/customError');

const createNewUser = async ({username, email, password, phone}) => {
  try {
    const user = await findUser(email);
    if (user) {
      throw conflict('Usuario ya existente');
    }
    const encryptedPass = await encryptPassword(password);
    //creates user
    await createUser(username, email, encryptedPass, phone);
  } catch (error) {
    throw error;
  }
};

const loginUser = async ({email, password}) => {
  try {
    const userFound = await findUser(email);
    if (!userFound) {
      throw notFoundError('Credenciales incorrectas');
    }
    const matchPassword = await verifyPassword(password, userFound.password);
    if (!matchPassword) {
      throw unauthorized('Credenciales incorrectas');
    }
    const token = generateToken(userFound.id);
    const username = userFound.username;
    
    return {
      message: `Welcome ${username}`,
      access_token: token,
      user: username
    };
  } catch (error) {
    throw error;
  }
};


 
module.exports = {createNewUser, loginUser};
