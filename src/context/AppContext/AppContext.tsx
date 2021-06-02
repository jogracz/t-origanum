import React, { useState, createContext, useContext, Dispatch, SetStateAction, useEffect} from 'react';
import { GAME_CONFIG_1, PACE, MAX_ERROR_COUNT } from '../../constants';

interface GameConfig {
  letters: string[];
  answers: boolean[];
}
interface Score {
  errors: number;
  points: number;
}
interface AppProviderValue {
  username: string;
  gameConfig: GameConfig;
  pace: number;
  totalPointsToGet: number;
  score: Score;
  currentLetter: string;
  currentIndex: number;
  gameStarted: boolean;
  gameEnded: boolean;
  setUsername: Dispatch<SetStateAction<string>>;
  setGameConfig: Dispatch<SetStateAction<GameConfig>>;
  handleGameStart: () => void;
  handleUserAnswer: (currentIndex: number) => void;
  handleReplay: () => void;
  setPace: Dispatch<SetStateAction<number>>;
}

const defaultValue: AppProviderValue = {
  username: 'user',
  gameConfig: GAME_CONFIG_1,
  pace: PACE.VERY_CALM,
  totalPointsToGet: 0,
  score: {
    errors: 0,
    points: 0
  },
  currentLetter: '',
  currentIndex: 0,
  gameStarted: false,
  gameEnded: false,
  setUsername: () => '',
  setGameConfig: () => GAME_CONFIG_1,
  handleGameStart: () => null,
  handleUserAnswer: () => null,
  handleReplay: () => null,
  setPace: () => PACE.VERY_CALM,
}

const AppContext = createContext(defaultValue);

interface AppProviderProps {
  children: any;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const [username, setUsername] = useState('');
  const [gameConfig, setGameConfig] = useState(GAME_CONFIG_1);
  const [errors, setErrrors] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalPointsToGet, setTotalPointsToGet] = useState(gameConfig.answers.filter(a => a).length);
  const [currentLetter, setCurrentLetter] = useState(gameConfig.letters[0])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [pace, setPace] = useState(PACE.VERY_CALM);

  const handleGameStart = () => {
    setGameStarted(true)
    console.log('Game started')
    gameConfig.letters.forEach((letter, index) => {
      setTimeout(() => {
        setCurrentLetter(letter);
        setCurrentIndex(index);
        console.log(letter);
      },(index) * pace)
    })
    setTimeout(() =>{
      setGameEnded(true);
      console.log('Game ended') ;
    }, gameConfig.letters.length * pace)
  }

  const handleUserAnswer = (currentIndex: number) => {
    if (gameConfig.answers[currentIndex]) {
      setPoints(points => points + 1);
    } else {
      setErrrors(errors => errors + 1);
    }
  }

  const clearTimeouts = () => {
     const highestId = window.setTimeout(() => {
      for (let i = highestId; i >= 0; i--) {
        window.clearInterval(i);
      }
    }, 0);
    console.log('Cleared timeouts')
  }

  const handleReplay = () => {
    clearTimeouts();
    setErrrors(0);
    setPoints(0);
    setGameStarted(false);
    setGameEnded(false);
  }

  useEffect(() => {
    if (errors >= MAX_ERROR_COUNT) {
      setGameEnded(true);
    }
  }, [errors])

  useEffect(() => {
    handleReplay();
    setTotalPointsToGet(gameConfig.answers.filter(a => a).length);
  }, [gameConfig])

  useEffect(() => {
    handleReplay();
  }, [pace])

  const value = {
    username,
    gameConfig,
    pace,
    totalPointsToGet,
    score: {
      errors,
      points
    },
    currentLetter,
    currentIndex,
    gameStarted,
    gameEnded,
    setUsername,
    setGameConfig,
    handleGameStart,
    handleUserAnswer,
    handleReplay,
    setPace
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);