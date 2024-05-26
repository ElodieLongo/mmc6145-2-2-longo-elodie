import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";


export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [previousTime, setPreviousTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [isGameActive, setIsGameActive] =useState(false);

  const { time, start: timerStart, stop:timerStop, reset: timerReset} = useTimer();

  const handleGameStart = () => {
    setIsGameActive(true);
    timerReset();
    timerStart();
  };

  const handleGameEnd = () => {
    setIsGameActive(false);
    timerStop();
    setPreviousTime(time);

    if (bestTime === null || time < bestTime) {
      setBestTime(time);
    }
  };

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
        time={isGameActive ? time : null}
        bestTime={bestTime}
        previousTime={previousTime}
        openModal={() => setShowModal(true)}
      />
      <CardGame
        // add onGameStart, onGameEnd props
        onGameStart={handleGameStart}
        onGameEnd={handleGameEnd}
        cardTexts={cardTexts}
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

