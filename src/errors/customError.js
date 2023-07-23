const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.NOT_FOUND_ERROR = 'not_found_error';
exports.notFoundError = message => internalError(message, exports.NOT_FOUND_ERROR);

exports.UNAUTHORIZED = 'unauthorized';
exports.unauthorized = message => internalError(message, exports.UNAUTHORIZED);

exports.FORBIDDEN_ERROR = 'forbidden_error';
exports.forbiddenError = message => internalError(message, exports.FORBIDDEN_ERROR);

exports.VALIDATION_ERROR = 'validation_error';
exports.validationError = message => internalError(message, exports.VALIDATION_ERROR);

exports.BAD_REQUEST = 'bad_request';
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);

exports.CONFLICT = 'conflict';
exports.conflict = message => internalError(message, exports.CONFLICT);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);
