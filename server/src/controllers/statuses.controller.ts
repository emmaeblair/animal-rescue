import type { Request, Response, NextFunction } from 'express';
import pool from '../config/database.js';

/**
 * GET /api/statuses
 * List all statuses (for dropdowns, etc.)
 */
export async function list(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { rows } = await pool.query(
      'SELECT id, name FROM status ORDER BY id'
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
}
