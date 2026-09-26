import { Link } from 'react-router-dom'

export default function RoomButton({ room }) {
  return (
    <Link to={room.path} className="room-button">
      <span className="room-button-glyph">{room.glyph}</span>
      <span className="room-button-name">{room.name}</span>
      <span className="room-button-tagline">{room.tagline}</span>
      <span className="room-button-desc">{room.description}</span>
    </Link>
  )
}
