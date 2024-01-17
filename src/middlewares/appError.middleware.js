class AppError extends Error {
  constructor (status, message, code, errors) {
    super();
    this.status = status
    this.message = message
    this.code = code
    this.errors = errors || {}
  }

  static badRequest (message, errors) {
    return new AppError(400, message, 'BAD_REQUEST', errors)
  }

  static unauthorized (message, errors) {
    return new AppError(401, message, 'UNAUTHORIZED', errors)
  }

  static forbidden (message, errors) {
    return new AppError(403, message, 'FORBIDDEN', errors)
  }

  static notFound (message, errors) {
    return new AppError(404, message, 'NOT_FOUND', errors)
  }

  static internalServerError (message, errors) {
    return new AppError(500, message, 'INTERNAL_SERVER_ERROR', errors)
  }
}

export default AppError
