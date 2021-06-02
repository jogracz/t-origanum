
import styled from 'styled-components';
import {lightPurple, primaryForeground, secondaryBackground} from '../constants/colors';

export const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none;
  margin: 10px;
  min-width: 200px;
  max-width: 300px;
  color: ${primaryForeground};
  background-color: ${secondaryBackground};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :active {
    background-color: ${lightPurple};
    opacity: 0.8;
  }
`