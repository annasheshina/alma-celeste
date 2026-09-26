export default function RoomCards({ cards }) {
  return (
    <div className="room-cards">
      {cards.map((card) => (
        <button key={card} type="button" className="room-card">
          <span className="room-card-title">{card}</span>
        </button>
      ))}
    </div>
  )
}
