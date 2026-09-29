import ArrowCircle from './ArrowCircle'

export function scrollToAnchor(e, anchor) {
  e.preventDefault()
  const el = document.getElementById(anchor)
  if (!el) return
  document
    .querySelectorAll('.scroll-anchor.is-active')
    .forEach((x) => x.classList.remove('is-active'))
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  el.classList.add('is-active')
  history.replaceState(null, '', `#${anchor}`)
}

export default function TopicCard({ topic }) {
  return (
    <a
      href={`#${topic.anchor}`}
      className="topic-card"
      onClick={(e) => scrollToAnchor(e, topic.anchor)}
    >
      <img className="topic-img" src={topic.image} alt="" />
      <span className="topic-num">{topic.id}</span>
      <span className="topic-title">{topic.title}</span>
      <span className="topic-caption">{topic.caption}</span>
      <ArrowCircle />
    </a>
  )
}
