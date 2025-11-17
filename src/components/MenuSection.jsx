import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    <section id="menu" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Our Menu</h2>
          <div className="flex gap-2 overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full border backdrop-blur ${active===cat ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="text-gray-300">Loading menu...</p>}
        {error && <p className="text-red-300">{error}</p>}

        <div className="grid md:grid-cols-2 gap-6">
          {items.filter(i => i.category===active).map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
              {/* Photographic tile background by category */}
              <div className={`absolute inset-0 -z-10 bg-cover bg-center opacity-30 ${
                item.category === 'Pizza' ? "bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop')]" :
                item.category === 'Pasta' ? "bg-[url('https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=1200&auto=format&fit=crop')]" :
                item.category === 'Antipasti' ? "bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')]" :
                item.category === 'Secondi' ? "bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop')]" :
                "bg-[url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop')]"
              }`} />

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-white drop-shadow">{item.name}</h3>
                    {item.description && <p className="text-sm text-white/85 mt-1 max-w-prose">{item.description}</p>}
                  </div>
                  <span className="font-semibold text-white bg-black/50 px-2 py-1 rounded-md">${Number(item.price).toFixed(2)}</span>
                </div>
                <div className="mt-3 text-xs text-white/85 flex gap-3">
                  {item.is_vegetarian && <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-400/50">Vegetarian</span>}
                  {item.is_spicy && <span className="px-2 py-0.5 rounded-full bg-red-500/30 border border-red-400/50">Spicy</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
