import { useState } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import ChoiceContainer from './components/ChoiceContainer/ChoiceContainer';
import BattleContainer from './components/BattleContainer/BattleContainer';
import MyModal from './components/MyModal/MyModal';
import { FaBook } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);
  const [choice, setChoice] = useState("");
  const [botChoice, setBotChoice] = useState("");
  const [result, setResult] = useState("");
  const [modalStatut, setModalStatut] = useState("close")

  return (
    <>
      <ScoreBoard count={count} />
      
      {choice === "" ? (
        <ChoiceContainer 
          count = {count}
          setCount={setCount} 
          choice={choice} 
          setChoice={setChoice} 
          botChoice={botChoice} 
          setBotChoice={setBotChoice} 
          setResult = {setResult}
        />
      ) : (
        <BattleContainer 
          choice={choice} 
          botChoice={botChoice} 
          result = {result}
          setResult={setResult}
          setChoice = {setChoice}
          setBotChoice = {setBotChoice}
          setCount={setCount}
          count = {count}
        />
      )}
      <button onClick={() => setModalStatut("open")} className='rules'><FaBook /></button>
      {
        modalStatut === "open" ? (
          <MyModal setModalStatut={setModalStatut}/>
        ) :
        ""
      }
    </>
  );
}

export default App;

