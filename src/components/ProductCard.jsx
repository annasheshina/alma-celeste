import Button from './Button'

export default function ProductCard({ product, ctaLabel = 'Записаться' }) {
  return (
    <article className="product-card">
      <img className="product-img" src={product.image} alt={product.title} />
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div>
          <p className="product-block-label">Для кого</p>
          <p className="product-desc">{product.forWhom}</p>
        </div>
        <div>
          <p className="product-block-label">Что внутри</p>
          <ul className="product-list">
            {product.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Button to="/contact" variant="dark">
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
