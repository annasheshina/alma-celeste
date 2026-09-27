import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { forecastProducts } from '../data/products'
import bandBg from '../assets/band-mountains.jpg'

export default function Forecast() {
  return (
    <>
      <PageHero
        image={bandBg}
        breadcrumb="Астрология · Прогноз и соляр"
        title="Прогноз и соляр"
        subtitle="Все варианты прогнозирования в одном месте — от краткого ориентира до полного разбора личного года."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Форматы прогноза"
            note="Прогноз и соляр — один раздел услуг: выберите глубину, которая подходит вам сейчас."
          />
          <div className="products-grid">
            {forecastProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
