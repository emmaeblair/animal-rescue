import { useEffect, useState } from 'react'
import { getAnimals } from './api'
import type { Animal } from './api'

function App() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setError(null)
        const animalsData = await getAnimals()
        setAnimals(animalsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 shrink-0 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Animis</h1>
        <p className="text-sm text-gray-600 mt-0.5">Animal rescue</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 flex-1 w-full">
        {loading && (
          <p className="text-gray-500">Loading…</p>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Animals
            </h2>
            {animals.length === 0 ? (
              <p className="text-gray-500">No animals yet.</p>
            ) : (
              <ul className="space-y-3">
                {animals.map((animal) => (
                  <li
                    key={animal.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-medium text-gray-900">
                        {animal.name}
                      </span>
                      <span className="text-sm text-gray-500 capitalize">
                        {animal.species}
                      </span>
                      {animal.status_name && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                          {animal.status_name}
                        </span>
                      )}
                    </div>
                    {(animal.age != null || animal.sex || animal.description) && (
                      <div className="mt-2 text-sm text-gray-600">
                        {animal.age != null && <span>Age: {animal.age} · </span>}
                        {animal.sex && <span>{animal.sex} · </span>}
                        {animal.description && (
                          <span className="line-clamp-2">{animal.description}</span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>

      <footer className="border-t border-gray-200 bg-white mt-12 shrink-0">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Contact
          </h2>
          <p className="text-gray-600 text-sm">
            Get in touch with us about adoptions or surrenders.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>Email: contact@animis.example</li>
            <li>Phone: (111) 111-1111</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
