import type { Request, Response, NextFunction } from 'express';

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => void;
