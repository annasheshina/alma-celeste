import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ProgramCard from '../components/ProgramCard'
import CTASection from '../components/CTASection'
import { programs, deepFormat } from '../data/content'
import bandBg from '../assets/band-mountains.jpg'

export default function Programs() {
  return (
    <>
      <PageHero
        image={bandBg}
        title="Программы"
        subtitle="Глубокие программы, которые соединяют астрологию, психологию и практики для реальных изменений."
      />
      <section className="section">
        <div className="container">
          <SectionTitle index="01" title="Основные программы" />
          <div className="programs-grid">
            {programs.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="02"
            title="Более глубокие форматы"
            note="Для тех, кто хочет не только понимать, но и менять свою жизнь."
          />
          <ProgramCard program={deepFormat} />
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
