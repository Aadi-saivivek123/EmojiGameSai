// Write your code here.
import './index.css'
const WinOrLoseCard = props => {
  const {score, initialemojis} = props
  const triggerbutton = () => {
    const trigger = true
    initialemojis(trigger)
  }
  let winOrLose
  if (score === 12) {
    winOrLose = (
      <>
        <div className="score-card">
          <h1 className="lose-heading">You Won</h1>
          <p className="Lose-paragraph">Best Score</p>
          <p className="Score-paragraph">{score}/12</p>
          <button className="play-lose" onClick={triggerbutton}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="game-img"
          alt="win or lose"
        />
      </>
    )
  } else {
    winOrLose = (
      <>
        <div className="score-card">
          <h1 className="lose-heading">You Lose</h1>
          <p className="Lose-paragraph">Score</p>
          <p className="Score-paragraph">{score}/12</p>
          <button className="play-lose" onClick={triggerbutton}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="game-img"
          alt="win or lose"
        />
      </>
    )
  }
  return <li className="Lose-container">{winOrLose}</li>
}
export default WinOrLoseCard
