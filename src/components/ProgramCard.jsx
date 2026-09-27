import { Link } from 'react-router-dom'

export default function ProgramCard({ program }) {
  return (
    <Link to={program.to} className="program-card">
      <img className="program-card-bg" src={program.image} alt="" />
      <span className="program-card-veil" />
      <span className="program-card-content">
        <span className="program-card-title" style={{ whiteSpace: 'pre-line' }}>
          {program.title}
        </span>
        <span className="program-card-text">{program.text}</span>
        <span className="btn btn-light">{program.cta} →</span>
      </span>
    </Link>
  )
}
