export interface PgError extends Error {
  code?: string;
  statusCode?: number;
}
