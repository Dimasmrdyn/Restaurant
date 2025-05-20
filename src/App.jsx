
import './App.css'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/Herosection'
import { LocationSection } from './components/LocationSection'
import { MenuSection } from './components/Menusection'
import { Navbar } from './components/Navbar'
import { ReservationSection } from './components/ReservationSection'


function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <MenuSection />
        <ReservationSection />
        <AboutSection />
        <LocationSection />
        <Footer />
      </div>
    </>
  )
}

export default App
