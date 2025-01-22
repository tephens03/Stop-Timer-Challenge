import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef()

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000)

  const timerActive = remainingTime > 0 && remainingTime < targetTime * 1000



  if (remainingTime <= 0) {
    clearInterval(timer.current)
    dialog.current.open()
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000)
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime(remainedTime => remainedTime - 10)
    }, 10)
  }

  function handleStop() {
    clearInterval(timer.current)
    dialog.current.open()
  }

  return (
    <>
      <ResultModal ref={dialog} handleReset={handleReset} targetTime={targetTime} remainingTime={remainingTime} />

      <section className="challenge">

        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className={timerActive ? 'active' : undefined}>
          {timerActive ? 'Timer is active' : 'Timer inactive'}
        </p>

      </section>
    </>

  )
}