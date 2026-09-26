import BackButton from './BackButton'
import RoomCards from './RoomCards'
import Particles from './Particles'

export default function RoomPage({ room }) {
  return (
    <div className="page room-page">
      <img className="page-bg" src={room.image} alt={room.name} />
      <div className="page-veil" />
      <Particles />

      <header className="room-header">
        <BackButton />
        <div className="room-title">
          <span className="room-breadcrumb">Пространство · {room.name}</span>
          <h1>{room.name}</h1>
          <p className="room-subtitle">{room.tagline}</p>
        </div>
      </header>

      <p className="room-description">{room.description}</p>

      <RoomCards cards={room.cards} />
    </div>
  )
}
