const CONTACT_ITEMS = [
  { icon: '📍', title: 'Address', lines: ['123 Rescue Lane', 'Animal City, AC 12345'] },
  { icon: '📞', title: 'Phone', lines: ['(555) 123-4567'] },
  { icon: '✉️', title: 'Email', lines: ['info@animis.org'] },
  { icon: '🕐', title: 'Hours', lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'] },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-md p-8 border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Get in touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Contact info</h2>
            {CONTACT_ITEMS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8ebe0] flex items-center justify-center shrink-0 text-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text)]">{item.title}</p>
                  <div className="text-[var(--color-text-muted)] text-sm mt-0.5">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
