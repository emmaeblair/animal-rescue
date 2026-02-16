import axios from 'axios'

/**
 * Axios instance pointing at the Animis API.
 * Vite exposes env vars as import.meta.env; in dev the server runs on 3000.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
})

export default api
