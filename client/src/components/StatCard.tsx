type StatCardProps = {
  icon: string
  iconBgColor: string
  value: string
  label: string
}

export function StatCard({ icon, iconBgColor, value, label }: StatCardProps) {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 shadow-sm text-center">
      <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center mx-auto text-xl`}>
        {icon}
      </div>
      <p className="mt-3 text-2xl font-bold text-[var(--color-text)]">{value}</p>
      <p className="text-sm text-[var(--color-text-muted)] mt-1">{label}</p>
    </div>
  )
}
