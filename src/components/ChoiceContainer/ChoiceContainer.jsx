import React from 'react'
import './ChoiceContainer.scss'
import ChoiceButton from '../ChoiceButton/ChoiceButton'
import { GiBowman, GiPikeman, GiCavalry } from "react-icons/gi";

function ChoiceContainer({ setChoice, choice, botChoice, setBotChoice, count, setCount, setResult }) {
    
    
    // Fonction qui génère un choix aléatoire pour le bot
    function ChooseBotChoice() {
        const unites = ["Archer", "Pikeman", "Cavalry"];
        const botPick = unites[Math.floor(Math.random() * unites.length)];
        return botPick

    }

      // Fonction pour voir qui a gagner ou draw
      function winlose(c , b) {
    
        if (c === b) {
           return "draw"
        } else if (
            (c === "Archer" && b === "Pikeman") ||
            (c === "Pikeman" && b === "Cavalry") ||
            (c === "Cavalry" && b === "Archer")
        ) {
           return "win"
        } else {
           return "lose"
        }
    }


    // Fonction qui gère le choix du joueur et celui du bot
    function handlePlayerChoice(c) {
        let b = ChooseBotChoice()
        
        console.log("test");
        console.log(c, "VS" , b);
        

        if (winlose(c, b) == "win") { 
                setCount(count+1)
        }else if (winlose(c, b) == "lose"){
            setCount(count-1)
        }else{
            count
        }
        setBotChoice(b)
        setChoice(c)
    }

    

    return (
        <div className='ChoiceContainer'>
            {choice}
            {botChoice}
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

