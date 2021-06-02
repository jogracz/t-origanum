import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT, GAME_CONFIG_1, GAME_CONFIG_2, GAME_CONFIG_3, PACE } from '../constants';
import { secondaryBackground } from '../constants/colors';
import { useAppContext } from '../context/AppContext/AppContext';


const SettingsWrapper = styled.div`
`
const SettingsHeader = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
  @media(max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
`

const SettingsGroup = styled.div`
  margin-top: 40px;
`

const SettingsGroupHeader = styled.div`
 font-size: 20px;
 margin-bottom: 20px;
 @media(max-width: ${MOBILE_BREAKPOINT}px) {
  text-align: center;
 }
`
const SettingsGroupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`
interface OptionProps {
  selected: boolean;
}
const Option = styled.div`
  border-radius: 30px;
  /* padding: 10px; */
  border: ${(props: OptionProps) => props.selected ? `2px solid ${secondaryBackground}`: 'none'};
  width: 130px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`

const Settings = () => {
  const { gameConfig, setGameConfig, pace, setPace } = useAppContext();
  return (
    <SettingsWrapper>
      <SettingsHeader>You can experiment with the game settings as you like!</SettingsHeader>
      <SettingsGroup>
        <SettingsGroupHeader>Choose from these letter configurations</SettingsGroupHeader>
        <SettingsGroupContent>
          <Option selected={gameConfig === GAME_CONFIG_1} onClick={() => setGameConfig(GAME_CONFIG_1)}>Morning Walk</Option>
          <Option selected={gameConfig === GAME_CONFIG_2} onClick={() => setGameConfig(GAME_CONFIG_2)}>Winter Fire</Option>
          <Option selected={gameConfig === GAME_CONFIG_3} onClick={() => setGameConfig(GAME_CONFIG_3)}>Dreamy Evening</Option>
        </SettingsGroupContent>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsGroupHeader>Select your prefered pace</SettingsGroupHeader>
        <SettingsGroupContent>
          <Option selected={pace === PACE.VERY_CALM} onClick={() => setPace(PACE.VERY_CALM)}>Very calm</Option>
          <Option selected={pace === PACE.CALM} onClick={() => setPace(PACE.CALM)}>Calm</Option>
          <Option selected={pace === PACE.VIVID} onClick={() => setPace(PACE.VIVID)}>Vivid</Option>
          <Option selected={pace === PACE.VERY_VIVID} onClick={() => setPace(PACE.VERY_VIVID)}>Very vivid</Option>
        </SettingsGroupContent>
      </SettingsGroup>
    </SettingsWrapper>
  )
}

export default Settings;