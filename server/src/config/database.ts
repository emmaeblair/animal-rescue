import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
if (typeof connectionString !== 'string' || !connectionString.trim()) {
  throw new Error(
    'DATABASE_URL is required. Copy server/.env.example to server/.env and set DATABASE_URL=postgresql://user:password@localhost:5432/your_db'
  );
}

const pool = new Pool({
  connectionString,
});

export default pool;
