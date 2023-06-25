import React from 'react'

function Square({value, onClick}) {
  
  return (
    <div className='square-container'>
        <button className='square-btn' onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square