-- Animis: Initial animals database schema
-- Run this against your PostgreSQL database to create the Status and Animals tables.

-- =============================================================================
-- Lookup: Status (available, adopted, etc.)
-- =============================================================================
CREATE TABLE IF NOT EXISTS status (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

-- Seed common statuses
INSERT INTO status (name) VALUES
  ('available'),
  ('adopted'),
  ('pending'),
  ('deceased')
ON CONFLICT (name) DO NOTHING;

-- =============================================================================
-- Enums for animals
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE animal_species AS ENUM ('dog', 'cat');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE animal_sex AS ENUM ('male', 'female');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- =============================================================================
-- Animals table
-- =============================================================================
CREATE TABLE IF NOT EXISTS animals (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(255) NOT NULL,
  species     animal_species NOT NULL,
  sex         animal_sex,
  size        INTEGER,
  age         INTEGER,
  status_id   INTEGER NOT NULL REFERENCES status(id),
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index for common lookups
CREATE INDEX IF NOT EXISTS idx_animals_status_id ON animals(status_id);
CREATE INDEX IF NOT EXISTS idx_animals_species ON animals(species);
CREATE INDEX IF NOT EXISTS idx_animals_created_at ON animals(created_at);

-- =============================================================================
-- Auto-update updated_at on row change
-- =============================================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS animals_updated_at ON animals;
CREATE TRIGGER animals_updated_at
  BEFORE UPDATE ON animals
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();
