// Write your code here.
import './index.css'
const EmojiCard = props => {
  const {listemojis, emojiTrigger} = props
  const {id, emojiName, emojiUrl} = listemojis
  const isTrigger = () => {
    let statement = false
    emojiTrigger(statement, id)
  }
  return (
    <li className="list-emoji">
      <button className="emoji-button" onClick={isTrigger}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
