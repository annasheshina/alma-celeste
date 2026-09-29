import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { astrologyServices, astrologyNav } from '../data/products'
import bandBg from '../assets/band-mountains.jpg'

export default function Astrology() {
  return (
    <>
      <PageHero
        image={bandBg}
        title="Астрология"
        subtitle="Инструмент, который помогает лучше понять себя, свои циклы и направления, увидеть возможности и принимать решения осознанно."
      />
      <section className="section band on-photo">
        <img className="band-bg" src={bandBg} alt="" />
        <div className="band-veil" />
        <div className="container">
          <SectionTitle title="Направления" />
          <nav className="anchor-nav">
            {astrologyNav.map((n) => (
              <a
                key={n.anchor}
                href={`#${n.anchor}`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById(n.anchor)
                  if (!el) return
                  document.querySelectorAll('.svc-anchor.is-active').forEach((x) => x.classList.remove('is-active'))
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  el.classList.add('is-active')
                  history.replaceState(null, '', `#${n.anchor}`)
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="services-grid">
            {astrologyServices.map((s) => (
              <div className="svc-anchor" id={`svc-${s.id}`} key={s.id}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
