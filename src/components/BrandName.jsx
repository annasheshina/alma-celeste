const Letter = ({ ch, i }) => <span key={i}>{ch === ' ' ? ' ' : ch}</span>

export default function BrandName() {
  return (
    <span className="brand-name">
      <strong>
        {'АННА ИЗИ'.split('').map((ch, i) => (
          <Letter key={i} ch={ch} i={i} />
        ))}
      </strong>
      <span className="brand-sub">
        {'Alma Celeste'.split('').map((ch, i) => (
          <Letter key={i} ch={ch} i={i} />
        ))}
      </span>
    </span>
  )
}
