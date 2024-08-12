import './index.css'

const EmojiCard = props => {
  const {emojiObject, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiObject

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
