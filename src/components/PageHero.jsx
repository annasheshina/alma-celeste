import Header from './Header'

export default function PageHero({
  image,
  imagePosition,
  breadcrumb = 'АННА ИЗИ',
  title,
  subtitle,
  children,
}) {
  return (
    <section className="page-hero">
      <img
        className="band-bg"
        src={image}
        alt=""
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="band-veil" />
      <Header />
      <div className="container">
        <div className="page-hero-content">
          <p className="breadcrumb">{breadcrumb}</p>
          <h1 className="page-hero-title display" style={{ whiteSpace: 'pre-line' }}>
            {title}
          </h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
