import React, { useState, useEffect, useRef } from "react";
import LevelSelector from "./components/LevelSelector";
import GameInfo from "./components/GameInfo";
import WordDisplay from "./components/WordDisplay";
import InputBox from "./components/InputBox";
import GameStatusModal from "./components/GameStatusModel";
import "./App.css";

const words = [
  "html",
  "hello",
  "read",
  "play",
  "rating",
  "art",
  "default",
  "new",
  "clavier",
  "eating",
  "second",
  "hours",
  "riding",
  "love",
  "double",
  "open",
  "fail",
  "main",
];

const levels = { easy: 6, normale: 4, hard: 3 };

function App() {
  const [level, setLevel] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [wordList, setWordList] = useState([...words]);
  const [currentWord, setCurrentWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  const inputRef = useRef(null);
  const loseAudio = useRef(new Audio("/notgood.mp3"));
  useEffect(() => {
    if (timeLeft > 0 && isGameStarted) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isGameStarted) {
      setGameStatus("You Lose!");
      loseAudio.current.play(); // Play the losing sound
      setIsGameStarted(false);
    }
  }, [timeLeft, isGameStarted]);

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setTimeLeft(levels[selectedLevel]);
    setScore(0);
    setWordList([...words]);
    setGameStatus("");
    setIsGameStarted(true);
    pickRandomWord();
    setTimeout(() => inputRef.current?.focus(), 0); // Focus on input
  };

  const pickRandomWord = () => {
    if (wordList.length > 0) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      setCurrentWord(wordList[randomIndex]);
      setWordList(wordList.filter((_, idx) => idx !== randomIndex));
    } else {
      setGameStatus("You Win!");
      setIsGameStarted(false);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    if (value.toLowerCase() === currentWord.toLowerCase()) {
      setScore((prev) => prev + 1);
      setInputValue("");
      setTimeLeft(levels[level]);
      pickRandomWord();
    }
  };

  const restartGame = () => {
    setLevel(null);
    setTimeLeft(0);
    setScore(0);
    setWordList([...words]);
    setCurrentWord("");
    setInputValue("");
    setGameStatus("");
    setIsGameStarted(false);
  };

  return (
    <div className="container">
      <h1>Words Game</h1>
      {!isGameStarted && !level ? (
        <LevelSelector onSelectLevel={handleLevelSelect} />
      ) : (
        <>
          <GameInfo
            level={level}
            timeLeft={timeLeft}
            score={score}
            totalWords={words.length}
          />
          <WordDisplay word={currentWord} />
          <InputBox
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
        </>
      )}
      {gameStatus && (
        <GameStatusModal status={gameStatus} onRestart={restartGame} />
      )}
    </div>
  );
}

export default App;
