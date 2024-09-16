// Write your code here.
import './index.css'
const ScoreBoard = props => {
  const {score, topscore, isActive} = props
  let scoreview
  if (isActive === false) {
    scoreview = <></>
  } else {
    scoreview = (
      <div className="sub-scores-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topscore}</p>
      </div>
    )
  }
  return (
    <div className="Score-container">
      <div className="Emoji-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="EmojiLogo"
        />
        <h1 className="Emoji-heading">Emoji Game</h1>
      </div>
      {scoreview}
    </div>
  )
}
export default ScoreBoard
