import type { Request, Response, NextFunction } from 'express';
import type { PgError } from '../types/errors.js';

/**
 * Global error handler. Sends a JSON error response and logs the error.
 */
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error(err);

  const pgErr = err as PgError;
  let status = pgErr.statusCode ?? 500;
  let message =
    err instanceof Error ? err.message : 'Internal server error';

  if (pgErr.code === '23503') {
    status = 400;
    message = 'Invalid reference (e.g. status_id does not exist)';
  } else if (pgErr.code === '23502') {
    status = 400;
    message = 'Required field missing or invalid';
  }

  res.status(status).json({ error: message });
}
