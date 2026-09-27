import { Link } from 'react-router-dom'
import ArrowCircle from './ArrowCircle'

export default function ServiceCard({ service, showList = true }) {
  return (
    <Link to={service.to} className="service-card">
      <span className="service-icon" aria-hidden="true">
        {service.icon}
      </span>
      <span className="service-title">{service.title}</span>
      <span className="service-text">{service.text}</span>
      {showList && (
        <ul className="service-list">
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <ArrowCircle onDark />
    </Link>
  )
}
