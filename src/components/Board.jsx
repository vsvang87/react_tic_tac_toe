import React from 'react'
import Square from './Square'

function Board({squares, onClick}) {
    
  return (
    <div className='board-container'>
       <div className="board-content">
        {squares.map((square, i) => {
            return (
                <Square key={i} value={square} onClick={() => onClick(i)}/>
            )
        })}
       </div>
    </div>
  )
}

export default Board