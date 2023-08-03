import './index.css'

const GameOverCard = props => {
  const {score, onReset} = props
  const onPlayAgain = () => {
    onReset()
  }
  return (
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="tropy"
        alt="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="your-score total-sc">{score}</p>
      <button type="button" className="button" onClick={onPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
