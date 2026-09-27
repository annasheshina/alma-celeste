export default function ArrowCircle({ onDark = false }) {
  return (
    <span className={`arrow-circle ${onDark ? 'on-dark' : ''}`} aria-hidden="true">
      →
    </span>
  )
}
