import { Link } from 'react-router-dom'
import ArrowCircle from './ArrowCircle'

export default function TopicCard({ topic }) {
  return (
    <Link to={topic.to} className="topic-card">
      <img className="topic-img" src={topic.image} alt="" />
      <span className="topic-num">{topic.id}</span>
      <span className="topic-title">{topic.title}</span>
      <span className="topic-caption">{topic.caption}</span>
      <ArrowCircle />
    </Link>
  )
}
