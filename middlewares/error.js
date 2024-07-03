/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';

/**
 * Reps an error in this API.
 */
export class APIError extends Error {
  constructor(code, message) {
    super();
    this.code = code || 500;
    this.message = message;
  }
}

/**
 * Applies Basic authentication to a route.
 * @parameter {Error} err The error object.
 * @parameter {Request} req The Express request object.
 * @parameter {Response} res The Express response object.
 * @parameter {NextFunction} next The Express next function.
 */
export const errorResponse = (err, req, res, next) => {
  const defaultMsg = `Failed to process ${req.url}`;

  if (err instanceof APIError) {
    res.status(err.code).json({ error: err.message || defaultMsg });
    return;
  }
  res.status(500).json({
    error: err ? err.message || err.toString() : defaultMsg,
  });
};
