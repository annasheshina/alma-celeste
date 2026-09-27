import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Astrology from './pages/Astrology'
import NatalChart from './pages/NatalChart'
import Forecast from './pages/Forecast'
import Consultation from './pages/Consultation'
import Programs from './pages/Programs'
import Venus from './pages/Venus'
import AstrologyForYou from './pages/AstrologyForYou'
import PersonalWork from './pages/PersonalWork'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/natal-chart" element={<NatalChart />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/astrology-for-yourself" element={<AstrologyForYou />} />
        <Route path="/personal-work" element={<PersonalWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
