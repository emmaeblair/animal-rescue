import { useEffect } from 'react'
import { getStatuses, getAnimals } from './api'

function App() {
  useEffect(() => {
    async function testApi() {
      try {
        const [statuses, animals] = await Promise.all([
          getStatuses(),
          getAnimals(),
        ])
        console.log('Statuses:', statuses)
        console.log('Animals:', animals)
      } catch (err) {
        console.error('API test failed:', err)
      }
    }
    testApi()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-900">Animis</h1>
      <p className="text-gray-600 mt-2">Animal rescue – scaffold ready.</p>
      <p className="text-sm text-gray-500 mt-4">
        Open DevTools (F12) → Console to see API test results.
      </p>
    </div>
  )
}

export default App
