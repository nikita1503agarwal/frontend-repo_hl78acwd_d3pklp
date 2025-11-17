import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Reserve from './components/Reserve'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-gray-100 bg-neutral-950">
      {/* Global photographic backdrop */}
      <div className="fixed inset-0 -z-50 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950/90" />

      <Navbar />
      <Hero />
      <MenuSection />
      <Reserve />
      <Footer />
    </div>
  )
}

export default App
