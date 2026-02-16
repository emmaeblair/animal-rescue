import type { Animal } from '../api'
import { AnimalCard } from '../components/AnimalCard'

type AnimalsSectionProps = {
  animals: Animal[]
  loading: boolean
  error: string | null
}

export function AnimalsSection({ animals, loading, error }: AnimalsSectionProps) {
  return (
    <section id="animals" className="bg-[var(--color-bg-soft)] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Animals</h2>
        {loading && <p className="text-[var(--color-text-muted)]">Loading…</p>}
        {error && (
          <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}
        {!loading && !error && (
          animals.length === 0 ? (
            <p className="text-[var(--color-text-muted)]">No animals yet.</p>
          ) : (
            <ul className="space-y-3">
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </ul>
          )
        )}
      </div>
    </section>
  )
}
