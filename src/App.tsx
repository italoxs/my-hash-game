import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/global'

import logoImg from './assets/logoWolves2.png'

interface GameDataProps {
  clickedIndex: () => void
  newGameData: number
}

const winningCombinations = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // vertical
  [3, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //diagonais
  [0, 4, 8],
  [2, 4, 6],
]

export function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null)

  const handleClick = (clickedIndex: GameDataProps) => {
    console.log(clickedIndex)
    if (gameData[clickedIndex] !== 0) {
      return;
    }
    if (winningCombo) {
      return
    }

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;

      return newGameData
    })

    setTurn(prev => prev === 1 ? 2 : 1);
  }

  useEffect(() => {
    checkWinner()
    checkGameEnded()
  }, [gameData])

  useEffect(() => {
    if (winningCombo) {
      alert('Você perdeu Grazielly S2')
    }
  }, [winningCombo])

  const checkGameEnded = () => {
    if (gameData.every(item => item !== 0)) {
      alert('Esculhambou o jogo Victor S2')
    }
  }

  const checkWinner = () => {
    let winner = null

    for (let values of winningCombinations) {
      if (
        gameData[values[0]] === 1 &&
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1
      ) {
        winner = 'player1'
      }

      if (
        gameData[values[0]] === 2 &&
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2
      ) {
        winner = 'player2'
      }
      if (winner) {
        setWinningCombo(values)
        break
      }
    }
  }

  return (
    <>
      <img src={logoImg} alt="" />

      <div className='board-game'>
        <GlobalStyle />

        {gameData.map((value, index) => (
          <span key={index} onClick={() => { handleClick(index) }}>
            <abbr title="">{index}</abbr>
            {value === 1 && '❌'}
            {value === 2 && '⭕'}
          </span>
        ))}
      </div>
    </>
  )
}
