const errors = require('./customError');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.BAD_REQUEST]: 400,
  [errors.NOT_FOUND_ERROR]: 404,
  [errors.UNAUTHORIZED]: 401,
  [errors.FORBIDDEN_ERROR]: 403,
  [errors.CONFLICT]: 409,
  [errors.VALIDATION_ERROR]: 422,
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500,
  [errors.EMAIL_ERROR]: 500
};

exports.errorHandler = (error, _, res, next) => {
  if (error.internalCode) res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  else {
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  console.error(error);
  return res.send({ message: error.message, internal_code: error.internalCode || 'default_error' });
};
