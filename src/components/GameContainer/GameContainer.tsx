import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../constants';
import { darkDoctorGreen, lightPurple} from '../../constants/colors';
import { useAppContext } from '../../context/AppContext/AppContext';
import Scores from './Scores';
import { Button } from '../../constants/styledComponents';

const GameContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
  }
`
const LettersWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 3px solid ${lightPurple};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 250px;
    height: 250px;
  }
`
const Letters = styled.div`
  font-size: 40px;
  color: ${darkDoctorGreen};
`

const GameContainer = () => {
  const {
    currentLetter,
    currentIndex,
    gameStarted,
    gameEnded,
    handleGameStart,
    handleUserAnswer,
    handleReplay
  } = useAppContext();

  return (
    <GameContainerWrapper>
    <LettersWrapper onClick={!gameStarted && !gameEnded ? handleGameStart : undefined}>
      {!gameStarted && 'Click to start'}
      {gameStarted && !gameEnded && <Letters>{currentLetter}</Letters>}
      {gameEnded && (
          <Scores />
      )}
    </LettersWrapper>
    {gameStarted && !gameEnded && <Button onClick={() => handleUserAnswer(currentIndex)}>2nd back!</Button> }
    {gameEnded && <Button onClick={handleReplay}>Replay</Button>}
    </GameContainerWrapper>
  )
}

export default GameContainer;