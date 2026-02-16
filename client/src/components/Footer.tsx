export function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white shrink-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="font-semibold text-lg">Animis</span>
            </div>
            <p className="text-white/80 text-sm">
              Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every animal deserves a loving home.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-sm hover:bg-white/10">f</a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-sm hover:bg-white/10">📷</a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-sm hover:bg-white/10">𝕏</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#animals" className="hover:text-white">Adopt</a></li>
              <li><a href="#contact" className="hover:text-white">Volunteer</a></li>
              <li><a href="#donate" className="hover:text-white">Donate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
