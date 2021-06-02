import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT, MAX_ERROR_COUNT } from '../../constants';
import { darkDoctorGreen, coral, orange, purple, darkGrey} from '../../constants/colors';
import { useAppContext } from '../../context/AppContext/AppContext';

const ScoresWrapper = styled.div`
  width: 90%;
`
const ScoresElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.color};
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 18px;
  }
`
const Won = styled.div`
  margin-top: 60px;
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  color: ${orange};
`
const Lost = styled(Won)`
  color: ${darkGrey};
`

const Scores = () => {
  const {score: {errors, points}, totalPointsToGet} = useAppContext();

  return (
    <ScoresWrapper>
      <ScoresElement color={coral}>
        <span>Errors:</span>
        <span>{errors}</span>
      </ScoresElement>
      <ScoresElement color={darkDoctorGreen}>
        <span>Points</span>
        <span>{points}</span>
      </ScoresElement>
      <ScoresElement color={purple}>
        <span>Total points to get</span>
        <span>{totalPointsToGet}</span>
      </ScoresElement>
      {points === totalPointsToGet && <Won>You got all the points!</Won>}
      {errors >= MAX_ERROR_COUNT && <Lost>You got {MAX_ERROR_COUNT} errors</Lost>}
    </ScoresWrapper>
  )
}

export default Scores;