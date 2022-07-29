import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import Board from './components/Board'
import marvel from './assets/marvel.svg'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(localStorage.getItem('bestScore') ? localStorage.getItem('bestScore') : 0)

  function changeScore() {
    setScore(prevScore => prevScore + 1)
  }

  function resetScore() {
    setScore(0)
  }

  function changeBestScore(score) {
    setBestScore(score)
    localStorage.setItem('bestScore', JSON.stringify(score))
  }

  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>
          <img src={marvel} alt="marvel pic" draggable='false'/>
        </div>
        <h1>Memory Game</h1>
      </header>
      <main className='main'>
        <ScoreBoard score={score} bestScore={bestScore}/>
        <Board setScore={changeScore} setBestScore={changeBestScore} resetScore={resetScore}/>
      </main>
      <footer className='footer'><span>Made by KaioPratess</span><span>Data provided by Marvel. © 2022 Marvel</span></footer>
    </div>
  )
}

export default App
