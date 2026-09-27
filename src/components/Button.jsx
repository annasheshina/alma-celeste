import { Link } from 'react-router-dom'

export default function Button({ to, variant = 'light', arrow = true, className = '', children }) {
  const cls = `btn btn-${variant} ${className}`.trim()
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <span aria-hidden="true">→</span>}
    </>
  )
  if (to?.startsWith('http')) {
    return (
      <a className={cls} href={to} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }
  return (
    <Link className={cls} to={to}>
      {inner}
    </Link>
  )
}
