import React from 'react'
import './ChoiceContainer.scss'
import ChoiceButton from '../ChoiceButton/ChoiceButton'
import { GiBowman, GiPikeman, GiCavalry } from "react-icons/gi";

function ChoiceContainer({ setChoice, choice, botChoice, setBotChoice, count, setCount, setResult }) {

    // Fonction qui gère le choix du joueur et celui du bot
    function handlePlayerChoice(choice) {
        console.log('Player choice before update:', choice);
        BotChoice()
        setChoice(choice);
        console.log('Player choice after update:', choice); // Cela devrait refléter la mise à jour
        // Le bot fait son choix après que le joueur ait fait le sien
    }
    
    // Fonction qui génère un choix aléatoire pour le bot
    function BotChoice() {
        const unites = ["Archer", "Pikeman", "Cavalry"];
        const botPick = unites[Math.floor(Math.random() * unites.length)];
        setBotChoice(botPick);
        // winlose(choice, botPick);
    }

    return (
        <div className='ChoiceContainer'>
            <div className='ChoiceContainerTop'>
                <ChoiceButton 
                    image={<GiBowman />} 
                    backgroundColor="red" 
                    setChoice={() => handlePlayerChoice("Archer")} 
                />
            </div>
            <div className='ChoiceContainerBot'>
                <ChoiceButton 
                    image={<GiPikeman />} 
                    backgroundColor="blue" 
                    setChoice={() => handlePlayerChoice("Pikeman")} 
                />
                <ChoiceButton 
                    image={<GiCavalry />} 
                    backgroundColor="green" 
                    setChoice={() => handlePlayerChoice("Cavalry")} 
                />
            </div>
        </div>
    )
}

export default ChoiceContainer

