import { Logo } from './Logo'

export function Header() {
  return (
    <header className="bg-white border-b border-[var(--color-border)] px-6 py-4 shrink-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-8">
          <a href="#home" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Home</a>
          <a href="#impact" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Our Impact</a>
          <a href="#about" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">About Us</a>
          <a href="#contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Contact</a>
          <a
            href="#donate"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-5 py-2 rounded-lg font-medium"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  )
}
