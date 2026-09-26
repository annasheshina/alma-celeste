import { useMemo } from 'react'

const rand = (seed) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

export default function Particles({ count = 28 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: rand(i * 4 + 1) * 100,
        top: rand(i * 4 + 2) * 100,
        size: 1.5 + rand(i * 4 + 3) * 2.5,
        duration: 14 + rand(i * 4 + 4) * 18,
        delay: -rand(i * 4 + 5) * 20,
      })),
    [count]
  )

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
