import React from 'react'
import "./ChoiceButton.scss"

function ChoiceButton({ image, backgroundColor, setChoice }) {
    
  return (
    <div 
      className='ChoiceButton' 
      style={{ backgroundColor }} 
      onClick={setChoice} // Met à jour le choix quand on clique
      
    >
        <span>
            {image}
        </span>
    </div>
  )
}

export default ChoiceButton

