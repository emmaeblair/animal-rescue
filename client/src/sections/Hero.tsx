export function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-white/70 to-[var(--color-bg)]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] leading-tight">
            Saving Lives, One Paw at a Time
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)] text-lg">
            At Animis, we believe every animal deserves a loving home. Join us in our mission to rescue, rehabilitate, and rehome animals in need.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#animals"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-lg font-medium"
            >
              Adopt a Pet
            </a>
            <a
              href="#contact"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 px-6 py-3 rounded-lg font-medium"
            >
              Volunteer
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-[var(--color-border)] aspect-[4/3] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"
            alt="Happy dog"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
