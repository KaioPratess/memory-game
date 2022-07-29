import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'

function Board(props) {

  const [cards, setCards] = useState(null);
  let characters = [];

  useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?events=310&apikey=601024a2891990b77b722e7d31a1d305')
    .then(resp => resp.json())
    .then(data => {
        const newArray = data.data.results.map(item => {
        return (
          <div className='card' style={{background: `url(${item.thumbnail.path}.jpg) no-repeat center/cover`}} key={nanoid()} onClick={play}>
            <div className='cover'>
              <h2 className='character-name'>{item.name}</h2>
            </div>
          </div>
        )
        }) 
        setCards(newArray)
    }).catch(error => console.log(error))
  }, [])

  function play(e) {
    const name = e.target.textContent ? e.target.textContent : e.target.childNodes[0].childNodes[0].textContent;
  
    
    setCards(cards => {
      shuffleArr(cards)
      return cards.map(item => item)
    })

    if(!characters.includes(name)) {
      characters.push(name)
      props.setScore()
      console.log(characters)
    } else {
      props.setBestScore(characters.length)
      props.resetScore()
      characters = []
    }
  }

  function shuffleArr (array){
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
  }

  return (
    <div className="board">
      {cards}
    </div>
  )
}

export default Board