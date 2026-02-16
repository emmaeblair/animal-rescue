const BULLET_POINTS = [
  'Comprehensive veterinary care for all rescued animals',
  'Behavioral rehabilitation and training programs',
  'Community education on responsible pet ownership',
]

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2 border border-[var(--color-border)]">
          <div className="bg-[var(--color-border)] aspect-[4/3] md:aspect-auto md:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600"
              alt="Cat in care"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">About Animis</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Founded in 2015, Animis has been dedicated to rescuing and rehabilitating animals in need. Our team of passionate volunteers and veterinary professionals work tirelessly to provide a safe haven for abandoned, neglected, and injured animals.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              We believe that every animal deserves a second chance at life and a loving forever home. Through our adoption program, foster network, and community outreach, we've successfully placed over 1,200 animals with caring families.
            </p>
            <ul className="mt-6 space-y-2">
              {BULLET_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
