const {createNewUser, loginUser} = require('../interactors/auth');

const signUp = ({body}, res, next) =>
  createNewUser(body)
    .then((product) => res.status(201).send(product))
    .catch(next);

const signIn = ({body}, res, next) =>
  loginUser(body)
    .then((product) => res.status(200).send(product))
    .catch(next);

module.exports = {signUp, signIn};
