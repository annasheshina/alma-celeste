export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-head">
        <span className="review-avatar initials" aria-hidden="true">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="review-name">{review.name}</p>
          <p className="review-tag">{review.tag}</p>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </article>
  )
}
