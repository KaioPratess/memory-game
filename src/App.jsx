import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import marvel from './assets/marvel.svg'
import './App.css'

function App() {

  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>
          <img src={marvel} alt="marvel pic" />
        </div>
        <h1>Memory Game</h1>
      </header>
      <main className='main'>
        <ScoreBoard />
      </main>
      <footer className='footer'><span>Made by KaioPratess</span><span>Data provided by Marvel. © 2022 Marvel</span></footer>
    </div>
  )
}

export default App
