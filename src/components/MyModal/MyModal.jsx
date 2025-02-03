import React from 'react'
import ChoiceButton from '../ChoiceButton/ChoiceButton'
import { GiBowman, GiPikeman, GiCavalry } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import "./MyModal.scss"

function Modal({setModalStatut}) {
  return (
    <div className='MyModal'>
        <span className='CloseModal'onClick={() => setModalStatut("close")}>X</span>
        <div className='ModalContainer'>
          <div className='ModalContainerTop'>
                <ChoiceButton 
                      image={<GiCavalry />} 
                      backgroundColor="green" 
                  />
                  <FaArrowRight className='Arrow'/>
                  <ChoiceButton 
                      image={<GiBowman />} 
                      backgroundColor="red" 
                  />
              </div>
              <div className='ModalContainerBody'>
                  <ChoiceButton 
                      image={<GiBowman />} 
                      backgroundColor="red" 
                  />
                  <FaArrowRight className='Arrow'/>
                  <ChoiceButton 
                      image={<GiPikeman />} 
                      backgroundColor="blue" 
                  />
              </div>
              <div className='ModalContainerBot'>
                  <ChoiceButton 
                      image={<GiPikeman />} 
                      backgroundColor="blue" 
                  />
                  <FaArrowRight className='Arrow'/>
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