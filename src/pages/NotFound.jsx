import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div style={{ background: 'var(--ink-deep)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="not-found" style={{ color: 'var(--pearl)', flex: 1 }}>
        <h1 className="display" style={{ fontSize: 56 }}>Страница не найдена</h1>
        <Button to="/" variant="light" arrow={false}>
          На главную
        </Button>
      </div>
      <Footer />
    </div>
  )
}
