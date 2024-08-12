import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <div className="navbar-container">
      <div className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="nav-text">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className=" logo-title-container  score">
          <h1 className="nav-text">Score:{currentScore}</h1>
          <h1 className="nav-text">Top Score:{topScore}</h1>
        </div>
      )}
    </div>
  )
}

export default NavBar
