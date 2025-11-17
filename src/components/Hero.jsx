import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28">
      {/* Cinematic background with vignette and subtle grain */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.15),rgba(0,0,0,0))]" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-24">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/25 shadow-2xl shadow-black/40">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white tracking-tight">
            Napoli Ristorante
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-prose">
            Authentic Neapolitan flavors — wood‑fired pizzas, handmade pastas, and seasonal Italian classics served with warmth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-md bg-emerald-500/90 text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/30">View Menu</a>
            <a href="#reserve" className="px-5 py-3 rounded-md border border-white/70 text-white hover:bg-white/10 transition">Book a Table</a>
          </div>
          <p className="mt-4 text-white/80 text-sm">Open daily · 11:30am – 10:00pm</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden md:block">
          {/* Photoreal dish card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1546549039-99aa4a171e9f?q=80&w=1200&auto=format&fit=crop"
              alt="Wood‑fired Pizza Margherita"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-5 text-white">
              <div className="text-sm uppercase tracking-wider text-white/80">Signature</div>
              <div className="text-2xl font-semibold">Pizza Margherita DOP</div>
              <div className="text-white/80 text-sm">San Marzano • Fior di Latte • Basil • EVOO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
