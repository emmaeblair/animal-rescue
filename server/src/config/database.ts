import pg from 'pg';

const { Pool } = pg;

function getPoolConfig(): pg.PoolConfig {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (connectionString) {
    return { connectionString };
  }

  const user = process.env.PGUSER?.trim();
  const password = process.env.PGPASSWORD;
  const host = process.env.PGHOST?.trim() || 'localhost';
  const port = process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432;
  const database = process.env.PGDATABASE?.trim();

  if (!user || database === undefined || database === '') {
    throw new Error(
      'Set either DATABASE_URL or (PGUSER, PGPASSWORD, PGDATABASE) in server/.env. See .env.example.'
    );
  }

  return {
    user,
    password: password === undefined ? undefined : String(password).trim(),
    host,
    port,
    database,
  };
}

const pool = new Pool(getPoolConfig());

export default pool;
