import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { primaryForeground, secondaryForeground } from '../constants/colors';
import { SITE_PREFIX, MENU_HEIGHT } from '../constants';

const MenuWrapper = styled.div`
  width: 100%;
  height: ${MENU_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -0px -0px 10px #eee;
  a {
    color: ${primaryForeground};
    :hover {
      color: ${secondaryForeground};
    }
  }
  .active {
    color: ${secondaryForeground};
  }
`

const Header = () => {
  return (
    <MenuWrapper>
      <NavLink activeClassName='active' to={`${SITE_PREFIX}/home`}>Game</NavLink>
      <NavLink activeClassName='active' to={`${SITE_PREFIX}/settings`}>Settings</NavLink>
      <NavLink activeClassName='active' to={`${SITE_PREFIX}/about`}>About</NavLink>
    </MenuWrapper>
  )
}

export default Header;