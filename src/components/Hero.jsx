export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Napoli Ristorante
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Authentic Neapolitan flavors. Wood‑fired pizzas, handmade pastas, and seasonal Italian classics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-md bg-emerald-500/90 text-white hover:bg-emerald-600 transition">View Menu</a>
            <a href="#reserve" className="px-5 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition">Book a Table</a>
          </div>
          <p className="mt-4 text-white/80 text-sm">Open daily · 11:30am – 10:00pm</p>
        </div>
      </div>
    </section>
  )
}
