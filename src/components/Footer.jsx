export default function Footer() {
  return (
    <footer id="contact" className="text-gray-200 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
          <h3 className="text-white text-xl font-semibold">Napoli Ristorante</h3>
          <p className="mt-2 text-white/80">123 Via Roma, Downtown • (555) 123‑4567</p>
          <p className="mt-1 text-white/80">Open daily 11:30am – 10:00pm</p>
        </div>
        <div className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
          <h4 className="text-white font-semibold mb-2">Follow us</h4>
          <div className="flex gap-3 text-white/80">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <form className="flex gap-2">
            <input className="flex-1 px-3 py-2 rounded bg-black/40 border border-white/15 text-sm text-white placeholder:text-white/60" placeholder="Your email" />
            <button className="px-4 py-2 rounded bg-emerald-600 text-white text-sm hover:bg-emerald-500">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 text-xs text-white/60">© {new Date().getFullYear()} Napoli. All rights reserved.</div>
    </footer>
  )
}
