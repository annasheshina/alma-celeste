import { useState } from 'react'
import { reviews, REVIEW_CATEGORIES } from '../data/reviews'
import ReviewCard from './ReviewCard'

export default function ReviewsBlock({ limit }) {
  const [category, setCategory] = useState('all')
  const filtered = reviews.filter((r) => category === 'all' || r.category === category)
  const visible = limit ? filtered.slice(0, limit) : filtered
  return (
    <>
      <div className="reviews-filters">
        {REVIEW_CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`review-chip ${category === c.id ? 'active' : ''}`}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="reviews-grid">
        {visible.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </>
  )
}
