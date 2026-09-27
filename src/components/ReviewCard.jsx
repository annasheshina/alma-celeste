export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-head">
        <img className="review-avatar" src={review.avatar} alt={review.name} />
        <div>
          <p className="review-name">{review.name}</p>
          <p className="review-tag">{review.tag}</p>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </article>
  )
}
