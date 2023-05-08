const constance = require('../constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constance.VALIDATION_ERROR:
      res.json({
        title: 'validation error',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constance.UNAUTHORIZED:
      res.json({
        title: 'Un authorized',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constance.FORBIDDEN:
      res.json({
        title: 'forbidden',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constance.NOT_FOUND:
      res.json({
        title: 'not found',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constance.SERVER_ERROR:
      res.json({
        title: 'server error',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
        console.log('No error . everything good');
      break;
  }
};
