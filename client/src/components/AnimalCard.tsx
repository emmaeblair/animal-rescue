import type { Animal } from '../api'

type AnimalCardProps = {
  animal: Animal
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <li className="bg-white border border-[var(--color-border)] rounded-lg p-4 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="font-medium text-[var(--color-text)]">{animal.name}</span>
        <span className="text-sm text-[var(--color-text-muted)] capitalize">{animal.species}</span>
        {animal.status_name && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg-soft)] text-[var(--color-primary)]">
            {animal.status_name}
          </span>
        )}
      </div>
      {(animal.age != null || animal.sex || animal.description) && (
        <div className="mt-2 text-sm text-[var(--color-text-muted)]">
          {animal.age != null && <span>Age: {animal.age} · </span>}
          {animal.sex && <span>{animal.sex} · </span>}
          {animal.description && <span className="line-clamp-2">{animal.description}</span>}
        </div>
      )}
    </li>
  )
}
