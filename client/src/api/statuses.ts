import api from './client'
import type { Status } from './types'

export async function getStatuses(): Promise<Status[]> {
  const { data } = await api.get<Status[]>('/api/statuses')
  return data
}
