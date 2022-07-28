function ScoreBoard(props) {
  return (
    <div className="score-board">
      <div className="score">
        <span>Score:</span>
        <span className="score-number">0</span>
      </div>
      <div className="best-score">
        <span>Best Score:</span>
        <span className="best-score-number">0</span>
      </div>
    </div>
  )
}

export default ScoreBoard