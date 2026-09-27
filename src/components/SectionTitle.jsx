import { Link } from 'react-router-dom'

export default function SectionTitle({ index, title, note, linkTo, linkLabel }) {
  return (
    <div className="section-head">
      <div className="section-head-left">
        {index && <span className="section-index">{index}</span>}
        <h2 className="section-title display">{title}</h2>
      </div>
      {note && <p className="section-note note">{note}</p>}
      {linkTo && (
        <Link className="link-more" to={linkTo}>
          {linkLabel || 'Все услуги →'}
        </Link>
      )}
    </div>
  )
}
