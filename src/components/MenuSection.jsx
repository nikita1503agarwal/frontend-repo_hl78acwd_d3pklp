import { useEffect, useState } from 'react'

const CATEGORIES = ['Antipasti', 'Pizza', 'Pasta', 'Secondi', 'Dolci']

export default function MenuSection() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [active, setActive] = useState('Antipasti')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function fetchMenu(category) {
    try {
      setLoading(true)
      const url = category ? `${baseUrl}/api/menu?category=${encodeURIComponent(category)}` : `${baseUrl}/api/menu`
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to load menu')
      const data = await res.json()
      setItems(data)
      setError(null)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchMenu(active) }, [])
  useEffect(() => { fetchMenu(active) }, [active])

  return (
    <section id="menu" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Our Menu</h2>
          <div className="flex gap-2 overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full border ${active===cat ? 'bg-emerald-600 text-white border-emerald-600' : 'hover:bg-gray-50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="text-gray-500">Loading menu...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid md:grid-cols-2 gap-6">
          {items.filter(i => i.category===active).map((item) => (
            <div key={item.name} className="p-5 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                </div>
                <span className="font-semibold">${Number(item.price).toFixed(2)}</span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                {item.is_vegetarian && <span className="mr-2">Vegetarian</span>}
                {item.is_spicy && <span>Spicy</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
