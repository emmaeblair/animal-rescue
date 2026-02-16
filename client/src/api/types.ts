/** Status from GET /api/statuses */
export interface Status {
  id: number
  name: string
}

/** Animal from GET /api/animals or POST /api/animals. GET includes status_name. */
export interface Animal {
  id: string
  name: string
  species: 'dog' | 'cat'
  sex: 'male' | 'female' | null
  size: number | null
  age: number | null
  status_id: number
  status_name?: string
  description: string | null
  created_at: string
  updated_at: string
}

/** Body for POST /api/animals */
export interface CreateAnimalBody {
  name: string
  species: 'dog' | 'cat'
  status_id: number
  sex?: 'male' | 'female'
  size?: number
  age?: number
  description?: string
}
