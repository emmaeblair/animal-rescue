import type { Request, Response, NextFunction } from 'express';
import pool from '../config/database.js';

/**
 * GET /api/animals
 * List all animals with status name.
 */
export async function list(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { rows } = await pool.query(`
      SELECT a.id, a.name, a.species, a.sex, a.size, a.age,
             a.status_id, s.name AS status_name, a.description,
             a.created_at, a.updated_at
      FROM animals a
      JOIN status s ON s.id = a.status_id
      ORDER BY a.created_at DESC
    `);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/animals
 * Create a new animal.
 * Body: { name, species, sex?, size?, age?, status_id, description? }
 */
export async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, species, sex, size, age, status_id, description } =
      req.body as {
        name?: string;
        species?: string;
        sex?: string;
        size?: number;
        age?: number;
        status_id?: number;
        description?: string;
      };

    if (!name || !species || status_id == null) {
      res.status(400).json({
        error: 'Validation failed',
        details: 'name, species, and status_id are required',
      });
      return;
    }

    if (!['dog', 'cat'].includes(species)) {
      res.status(400).json({
        error: 'Validation failed',
        details: 'species must be "dog" or "cat"',
      });
      return;
    }

    const { rows } = await pool.query(
      `INSERT INTO animals (name, species, sex, size, age, status_id, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, name, species, sex, size, age, status_id, description, created_at, updated_at`,
      [
        name.trim(),
        species,
        sex || null,
        size != null ? Number(size) : null,
        age != null ? Number(age) : null,
        Number(status_id),
        description ? description.trim() : null,
      ]
    );

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
}
