import { NextFunction, Response } from 'express'

const errorHandler = (err: Error, req: any, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message: err.message,
  })

  console.error(err.stack)
}

export default errorHandler
