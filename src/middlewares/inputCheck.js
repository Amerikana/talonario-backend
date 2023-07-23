const { check, validationResult } = require("express-validator");

const createUserValidation = () => {
  return [
    check("username", "username field is required").not().isEmpty(),
    check("username", "username field must be a string").isString(),
    check("email", "email field is required").not().isEmpty(),
    check("email", "email field must be a string").isString(),
    check("password", "password field is required").not().isEmpty(),
    check("password", "password field must be a string").isString(),
    check(
      "password",
      "password field must greater than 7 and less than 13"
    ).isLength({ min: 8, max: 12 }),
  ];
};

const createProductValidation = () => {
  return [
    check("title", "title field is required").not().isEmpty(),
    check("title", "title field must be a string").isString(),
    check("description", "description field is required").not().isEmpty(),
    check("description", "description field must be a string").isString(),
    check("price", "price field is required").not().isEmpty(),
    check("price", "price field must be a number").isNumeric(),
  ];
};

const createOrderValidation = () => {
  return [
    check("title", "title field is required").not().isEmpty(),
    check("title", "title field must be a string").isString(),
    check("description", "description field is required").not().isEmpty(),
    check("description", "description field must be a string").isString(),
    check("totalprice", "price field is required").not().isEmpty(),
    check("totalprice", "price field must be a number").isNumeric(),
    check("quantity", "price field is required").not().isEmpty(),
    check("quantity", "price field must be a number").isNumeric(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  let response = { message: null };
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));

  response.message = extractedErrors;
  return res.status(422).send(response);
};

module.exports = {
  createUserValidation,
  validate,
  createProductValidation,
  createOrderValidation,
};
