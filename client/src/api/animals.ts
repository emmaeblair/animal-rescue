import api from './client'
import type { Animal, CreateAnimalBody } from './types'

export async function getAnimals(): Promise<Animal[]> {
  const { data } = await api.get<Animal[]>('/api/animals')
  return data
}

export async function createAnimal(body: CreateAnimalBody): Promise<Animal> {
  const { data } = await api.post<Animal>('/api/animals', body)
  return data
}
