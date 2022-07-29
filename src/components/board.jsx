import {useState, useEffect} from 'react'

function Board(props) {

const [data, setData] = useState(null)

useEffect(() => {
  fetch('https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=601024a2891990b77b722e7d31a1d305')
  .then(resp => resp.json())
  .then(data => {
    setData(data)
  })
}, [])

console.log(data)


  return (
    <div className="board">

    </div>
  )
}

export default Board