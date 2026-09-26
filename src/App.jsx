import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Moon from './pages/Moon'
import Venus from './pages/Venus'
import Sun from './pages/Sun'
import Abundance from './pages/Abundance'
import Astrology from './pages/Astrology'
import Pleiades from './pages/Pleiades'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/sun" element={<Sun />} />
        <Route path="/abundance" element={<Abundance />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/pleiades" element={<Pleiades />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
