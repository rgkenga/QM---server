import { AppError } from './index.js'
import { ValidationError } from 'sequelize'

const ErrorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message, code: err.code, errors: err.errors })
  }
  if (err instanceof ValidationError) {
    const formattedErrors = {}
    for (const error in err.errors) {
      if (!formattedErrors[err.errors[error].path]) {
        formattedErrors[err.errors[error].path] = {
          type: err.errors[error].type,
          msg: [],
          path: err.errors[error].path,
          location: "body"
        }
      }
      formattedErrors[err.errors[error].path].msg.push(err.errors[error].message)
    }
    const formattedErrorsArray = Object.values(formattedErrors)
    return res.status(400).json({ message: 'Ошибка валидации данных', code: 'SEQUELIZE_VALIDATION_ERROR', errors: formattedErrorsArray })
  }
  return res.status(500).json({
    message: 'Internal server error',
    code: 'INTERNAL_ERROR',
    errors: {}
  })
}

export default ErrorHandler