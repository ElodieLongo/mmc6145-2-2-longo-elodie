import React, { useTimer } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";

function useTimer() {
  const [count, setCount]= useTimer(0)
  const increment = () => setCount(count + 1)
  const timeReset = () => setCount(0)
  return {count, increment, timeReset}
}

function timeReset() {
  const reset = () => setCount(0)
}

function timeStart() {
  let [count, setCount] = useTimer(0)
  function handleClick() {
    count++
  }
  return (
    <>
    <Header.time> Count: {count}</Header.time>
    <button onFirstClick={handleClick}>Increment</button>
    </>
  )
}

function timeStop() {

}



export default function App() {
  const [showModal, setShowModal] = useState(false);

  const {
    time,
    start: timerStart,
    stop: timerStop,
    reset: timerReset,
  } = useTimer();

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    "Panda 🐼",
    "Doggy 🐶",
    "Kitty 😺",
    "Duck 🦆",
  ];

  return (
    <>
      <Header
        // add time, bestTime, previousTime props
        openModal={() => setShowModal(true)}
      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

