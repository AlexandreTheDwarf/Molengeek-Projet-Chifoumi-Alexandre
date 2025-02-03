import React from 'react'
import "./ScoreBoard.scss"

function ScoreBoard({ count }) {
  return (
    <div className='ScoreBoard'>
        <div>
            <span>Lancier</span>
            <span>Archer</span>
            <span>Cavalier</span>
        </div>
        <div className='DivScore'>
            <span>Score</span>
            <span className='Score'>{count}</span>
        </div>
    </div>
  )
}

export default ScoreBoard