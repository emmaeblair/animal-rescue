import { StatCard } from '../components/StatCard'

type OurImpactProps = {
  availableCount: number
}

const STATS: Array<{
  icon: string
  iconBgColor: string
  label: string
  getValue: (availableCount: number) => string
}> = [
  { icon: '❤️', iconBgColor: 'bg-amber-100 text-amber-800', label: 'Animals Adopted', getValue: () => '0' },
  { icon: '🐾', iconBgColor: 'bg-[#e8ebe0] text-[var(--color-primary)]', label: 'Available for Adoption', getValue: (n) => n.toString() },
  { icon: '🏠', iconBgColor: 'bg-stone-100 text-stone-700', label: 'Foster Homes', getValue: () => '0' },
  { icon: '👥', iconBgColor: 'bg-[#e0e6dc] text-[var(--color-primary-dark)]', label: 'Active Volunteers', getValue: () => '0' },
]

export function OurImpact({ availableCount }: OurImpactProps) {
  return (
    <section id="impact" className="bg-white py-16 border-t border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--color-text)] text-center">
          Our Impact
        </h2>
        <p className="text-[var(--color-text-muted)] text-center mt-2 max-w-2xl mx-auto">
          Together, we're making a difference in the lives of animals across our community.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              iconBgColor={stat.iconBgColor}
              value={stat.getValue(availableCount)}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
