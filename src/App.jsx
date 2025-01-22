import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='Easy' targetTime={2}/>
        <TimerChallenge title='Medium' targetTime={5}/>
        <TimerChallenge title='Hard' targetTime={10}/>
        <TimerChallenge title='Extreme' targetTime={20}/>
      </div>
    </>
  );
}

export default App;
