import { homeImage, rooms } from '../rooms'
import RoomButton from '../components/RoomButton'
import Particles from '../components/Particles'

export default function Home() {
  return (
    <div className="page home-page">
      <img className="page-bg" src={homeImage} alt="Alma Celeste" />
      <div className="page-veil" />
      <Particles />

      <header className="home-logo">
        <span className="logo-mark">✦</span>
        <span className="logo-text">Alma Celeste</span>
      </header>

      <div className="home-hero">
        <h1 className="home-title">Твоё пространство</h1>
        <p className="home-subtitle">
          Выбери комнату и войди в своё виртуальное пространство
        </p>
      </div>

      <nav className="room-grid">
        {rooms.map((room) => (
          <RoomButton key={room.path} room={room} />
        ))}
      </nav>
    </div>
  )
}
