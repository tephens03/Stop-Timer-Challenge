import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null)
  const playerName = useRef()
  // const [changeSubmitted, setChangeSubmitted] = useState(true)


  // function onChange(event) {
  //   setChangeSubmitted(false)
  //   setPlayerName(event.target.value)

  // }

  function handleClick() {
    setPlayerName(playerName.current.value)
    playerName.current.value = ''
  }


  return (
    
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? "... whoever you are!"}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick} >Set Name</button>
        </p>
      </section>

  );
}
