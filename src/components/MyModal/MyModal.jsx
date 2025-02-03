import React from 'react'
import ChoiceButton from '../ChoiceButton/ChoiceButton'
import { GiBowman, GiPikeman, GiCavalry } from "react-icons/gi";
import './MyModal.scss'

function Modal(setModalStatut) {
  return (
    <div className='Modal'>
        <span className='CloseModal'onClick={() => setModalStatut("close")}>X</span>
        <div className='ModalContainer'>
          <div className='ModalContainerTop'>
                  <ChoiceButton 
                      image={<GiBowman />} 
                      backgroundColor="red" 
                  />
              </div>
              <div className='ModalContainerBot'>
                  <ChoiceButton 
                      image={<GiPikeman />} 
                      backgroundColor="blue" 
                  />
                  <ChoiceButton 
                      image={<GiCavalry />} 
                      backgroundColor="green" 
                  />
            </div>
        </div>
    </div>
  )
}

export default Modal