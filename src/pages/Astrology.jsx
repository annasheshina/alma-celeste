import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { astrologyServices } from '../data/products'
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
          <div className="services-grid">
            {astrologyServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
