import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../constants';
import { secondaryForeground } from '../constants/colors';
import { useAppContext } from '../context/AppContext/AppContext';
import UsernameForm from '../components/UsernameForm';
import GameContainer from '../components/GameContainer/GameContainer';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  span {
    color: ${secondaryForeground};
  }
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 24px;
  }
`
const Subheader = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 18px;
  }
`

const Home = () => {
  const { username } = useAppContext();

  return (
    <HomeWrapper>
      <Header>Hello <span>{username}</span></Header>
      {!username ? (
        <>
          <Subheader>To play the game, first set your username</Subheader>
          <UsernameForm />
        </>
      ) : (
        <>
          <Subheader>{'Nice to meet you! You can now start the game'}</Subheader>
          <GameContainer />
        </>
      )}
      
    </HomeWrapper>
  )
}

export default Home;