import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import ReviewsBlock from '../components/ReviewsBlock'
import CTASection from '../components/CTASection'
import bandBg from '../assets/band-mountains.jpg'

export default function Reviews() {
  return (
    <>
      <PageHero
        image={bandBg}
        title="Отзывы"
        subtitle="Реальные истории и результаты людей, с которыми мы работали."
      />
      <section className="section">
        <div className="container">
          <ReviewsBlock />
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
