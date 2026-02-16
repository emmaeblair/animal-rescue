import { useEffect, useState } from 'react'
import { getAnimals } from './api'
import type { Animal } from './api'
import { Header, Footer } from './components'
import { Hero, OurImpact, AboutSection, AnimalsSection, ContactSection } from './sections'

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

  const availableCount = animals.filter((a) => a.status_name === 'available').length

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1 w-full">
        <Hero />
        <OurImpact availableCount={availableCount} />
        <AboutSection />
        <AnimalsSection animals={animals} loading={loading} error={error} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
