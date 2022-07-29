function ScoreBoard(props) {
  return (
    <div className="score-board">
      <div className="score">
        <span>Score:</span>
        <span className="score-number">{props.score}</span>
      </div>
      <div className="best-score">
        <span>Best Score:</span>
        <span className="best-score-number">{props.bestScore}</span>
      </div>
    </div>
  )
}

export default ScoreBoard