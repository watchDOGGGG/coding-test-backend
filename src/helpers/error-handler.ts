/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express'

export const errorHandler = (error: any, _: Request, res: Response, next: NextFunction) => {
  let finalMessage = error.message
  let duplicateError = undefined

  if (error.code === 11000) {
    finalMessage = `${Object.keys(error.keyValue)} already exists`
    duplicateError = [
      {
        msg: `${Object.keys(error.keyValue)} already exists`,
        field: Object.keys(error.keyValue)[0],
      },
    ]
  }

  res.status(error.status || 500).json({
    message: finalMessage,
    data: undefined,
    success: false,
    errors: error?.errors || duplicateError || {},
  })
  next()
}
