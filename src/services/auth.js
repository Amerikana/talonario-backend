const User = require('../models/user');
const {databaseError} = require('../errors/customError');

const findUser = async (email) => {
  try {
    const user = await User.findOne({email});
    return user;
  } catch (error) {
    console.error(error.message);
    throw databaseError('Ha habido un error buscando un usuario');
  }
};

const createUser = async (username, email, password, phone) => {
  try {
    const newUser = new User({
      username,
      email,
      password,
      phone,
    });
    await newUser.save();
  } catch (error) {
    console.error(error.message);
    throw databaseError('Ha habido un error creando un usuario');
  }
};

module.exports = {
  findUser,
  createUser,
};
