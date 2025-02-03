import React from 'react';
import './BattleContainer.scss';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import { GiBowman, GiPikeman, GiCavalry } from "react-icons/gi";
import { VscDebugRestart } from "react-icons/vsc";

function BattleContainer({ choice, botChoice, result, setResult, setChoice, setBotChoice, count, setCount }) {

  // Fonction pour récupérer l'icône correspondante au player
  function Logo(choice) {
    if (choice === "Archer") {
      return <GiBowman />;
    } else if (choice === "Pikeman") {
      return <GiPikeman />;
    } else {
      return <GiCavalry />;
    }
  }

      // Fonction pour voir qui a gagner ou draw
      function winlose(choice, botChoice) {
        console.log('Player choice:', choice);
        console.log('Bot choice:', botChoice);
    
        if (choice === botChoice) {
           return "draw"
        } else if (
            (choice === "Archer" && botChoice === "Pikeman") ||
            (choice === "Pikeman" && botChoice === "Cavalry") ||
            (choice === "Cavalry" && botChoice === "Archer")
        ) {
          // setCount(count+1)
           return "win"
        } else {
           return "lose"
        }
    }


  // Fonction pour récupérer l'icône correspondante au bot
  function Logo(botChoice) {
    if (botChoice === "Archer") {
      return <GiBowman />;
    } else if (botChoice === "Pikeman") {
      return <GiPikeman />;
    } else {
      return <GiCavalry />;
    }
  }

  // Fonction pour récupérer la couleur de fond associée au player choice
  function getBackgroundColor(choice) {
    if (choice === "Archer") {
      return "red";
    } else if (choice === "Pikeman") {
      return "blue";
    } else {
      return "green";
    }
  }

  // Fonction pour récupérer la couleur de fond associée au bot choice
  function getBackgroundColor(botChoice) {
    if (botChoice === "Archer") {
      return "red";
    } else if (botChoice === "Pikeman") {
      return "blue";
    } else {
      return "green";
    }
  }

  function restart() {
    setChoice("");
    setBotChoice("");
    setResult("");
  }  


  const r = winlose(choice, botChoice)

  return (
    <div className='BattleContainer'>
      {/* Affichage du choix du joueur */}
      <div className='PlayerChoice'>
        <ChoiceButton 
          image={Logo(choice)} 
          backgroundColor={getBackgroundColor(choice)}
        />
      </div>
    {/* Affichage du choix du resultat */}
    <div className="winOrlose">
        {/* {result === "win" && <span>Vous avez gagné !</span>}
        {result === "lose" && <span>Vous avez perdu !</span>}
        {result === "draw" && <span>Égalité !</span>} */}
        {r}
        {
          choice
        }
        {
          botChoice
        }
        <button onClick={restart}><VscDebugRestart /></button>
      </div>
      {/* Affichage du choix du bot */}
      <div className='BotChoice'>
        <ChoiceButton 
          image={Logo(botChoice)} 
          backgroundColor={getBackgroundColor(botChoice)}
        />
      </div>
    </div>
  );
}

export default BattleContainer;
