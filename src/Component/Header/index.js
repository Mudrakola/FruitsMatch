import './index.css'

const Header = props => {
  const {score, timeLeft} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo"
        alt="website logo"
      />
      <ul className="score-and-timer-container">
        <li>
          <p className="score">
            Score: <span className="scored">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer"
            alt=" timer"
          />
          <p className="score time">{timeLeft} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
