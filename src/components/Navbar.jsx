import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-wide">
          <span className="text-emerald-600">Napoli</span> Ristorante
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#menu" className="hover:text-emerald-600">Menu</a>
          <a href="#reserve" className="hover:text-emerald-600">Reserve</a>
          <a href="#contact" className="hover:text-emerald-600">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Open Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
