export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-semibold">Napoli Ristorante</h3>
          <p className="mt-2 text-gray-400">123 Via Roma, Downtown • (555) 123‑4567</p>
          <p className="mt-1 text-gray-400">Open daily 11:30am – 10:00pm</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow us</h4>
          <div className="flex gap-3 text-gray-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <form className="flex gap-2">
            <input className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm" placeholder="Your email" />
            <button className="px-4 py-2 rounded bg-emerald-600 text-white text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Napoli. All rights reserved.</div>
    </footer>
  )
}
