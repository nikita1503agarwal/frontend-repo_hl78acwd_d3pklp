import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-wide text-white">
          <span className="text-emerald-400">Napoli</span> Ristorante
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
          <a href="#menu" className="hover:text-emerald-400">Menu</a>
          <a href="#reserve" className="hover:text-emerald-400">Reserve</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-white/10 text-white" aria-label="Open Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
