import { validationResult } from "express-validator"

const validate = validations => {
  return async (req, res, next) => {
    for (let validation of validations) {
      await validation.run(req)
    }
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const formattedErrors = {}
    errors.array().forEach(error => {
      if (!formattedErrors[error.path]) {
        formattedErrors[error.path] = {
          type: error.type,
          msg: [],
          path: error.path,
          location: error.location
        }
      }
      formattedErrors[error.path].msg.push(error.msg)
    })
    const formattedErrorsArray = Object.values(formattedErrors)
    res.status(400).json({ message: 'Ошибка валидации', code: 'VALIDATION_ERROR', errors: formattedErrorsArray })
  }
}

export default validate