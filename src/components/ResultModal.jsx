import { forwardRef, useRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, handleReset }, ref) {

  const dialog = useRef()
  const userLost = remainingTime <= 0
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })


  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      <p>Target time was <strong>{targetTime}</strong></p>
      <p>You stopped the timer at <strong>{(targetTime - (remainingTime / 1000)).toFixed(2)}</strong></p>

      <form method="dialog">
        <button onClick={handleReset}>Close</button>
      </form>

    </dialog>
  )
})

export default ResultModal