// utils
import apiResponse from '../utils/apiResponse';
import { AUT_01, AUT_02 } from '../utils/errorCodes';


export const catchErrors = (fn) => (req, res, next) => fn(req, res, next)
  .catch(next);

export const authErrors = (error, req, res, next) => {
  const {
    code, field, message, statusCode
  } = error;

  return next(apiResponse(
    res,
    'error',
    message,
    statusCode,
    code,
    field
  ));
};
