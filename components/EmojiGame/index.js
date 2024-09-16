/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import ScoreBoard from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
class EmojiGame extends Component {
  state = {score: 0, topscore: 0, isActive: null, emojiId: [], totalScores: []}
  emojiTrigger = (statement, id) => {
    const {emojiId, totalScores, score} = this.state
    if (emojiId.includes(id)) {
      this.setState(prevState => ({
        isActive: statement,
        emojiId: [],
        score: prevState.score - 1,
        totalScores: [...totalScores, score],
      }))
    } else if (score === 11) {
      this.setState({
        isActive: statement,
        emojiId: [],
        totalScores: [...totalScores, score + 1],
      })
    } else {
      this.setState({
        isActive: !statement,
        emojiId: [...emojiId, id],
      })
    }
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }
  shuffledEmojisList = () => {
    const {isActive} = this.state
    const {emojisList} = this.props
    if (isActive) {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return emojisList
  }
  initialemojis = trigger => {
    const {totalScores} = this.state
    this.setState({
      isActive: trigger,
      score: 0,
      topscore: Math.max(...totalScores),
    })
  }
  render() {
    const {score, topscore, isActive} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    let maincontainer
    if (isActive === false || score === 12) {
      maincontainer = (
        <WinOrLoseCard score={score} initialemojis={this.initialemojis} />
      )
    } else {
      maincontainer = shuffledEmojisList.map(eachemoji => (
        <EmojiCard
          key={eachemoji.id}
          listemojis={eachemoji}
          emojiTrigger={this.emojiTrigger}
        />
      ))
    }
    return (
      <div className="big-container">
        <ScoreBoard score={score} topscore={topscore} isActive={isActive} />
        <ul className="unordered-container">{maincontainer}</ul>
      </div>
    )
  }
}
export default EmojiGame
