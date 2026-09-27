import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { natalChartProducts } from '../data/products'
import bandBg from '../assets/band-mountains.jpg'

export default function NatalChart() {
  return (
    <>
      <PageHero
        image={bandBg}
        breadcrumb="Астрология · Натальная карта"
        title="Натальная карта"
        subtitle="Глубокое знакомство с собой через карту рождения."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Письменные разборы"
            note="Форматы, которые остаются с вами: подробные гайды по ключевым темам вашей карты."
          />
          <div className="products-grid">
            {natalChartProducts.map((p) => (
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
