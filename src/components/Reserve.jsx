import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reserve() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    name: '', email: '', phone: '', party_size: 2, reservation_date: '', reservation_time: '', notes: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          party_size: Number(form.party_size)
        })
      })
      if (!res.ok) throw new Error('Failed to create reservation')
      const data = await res.json()
      setStatus(`Reservation confirmed. Reference: ${data.id}`)
      setForm({ name: '', email: '', phone: '', party_size: 2, reservation_date: '', reservation_time: '', notes: '' })
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section id="reserve" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Reserve a Table</h2>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
          <div className="grid gap-4">
            <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
            <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-3">
              <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" type="number" min="1" max="20" name="party_size" value={form.party_size} onChange={handleChange} placeholder="Party size" />
              <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" type="date" name="reservation_date" value={form.reservation_date} onChange={handleChange} required />
              <input className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none" type="time" name="reservation_time" value={form.reservation_time} onChange={handleChange} required />
            </div>
            <textarea className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder:text-white/60 border border-white/20 focus:border-emerald-400 outline-none min-h-[100px]" name="notes" value={form.notes} onChange={handleChange} placeholder="Special requests" />
            <button className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/30 w-full">Book Now</button>
            {status && <p className="text-sm text-white/85">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
