const {hash, genSaltSync, compare} = require('bcryptjs');

const encryptPassword = async (pass) => {
  try {
    const salt = genSaltSync(10);
    const passwordHash = await hash(pass, salt);
    return passwordHash;
  } catch (error) {
    throw error;
  }
};

const verifyPassword = async (pass, passHash) => {
  try {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
  } catch (error) {
    throw error;
  }
};

module.exports = {encryptPassword, verifyPassword};
