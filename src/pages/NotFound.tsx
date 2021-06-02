import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT, SITE_PREFIX } from '../constants';
import { coral, secondaryBackground } from '../constants/colors';

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0;
  }
  `
const Header = styled.div`
  color: ${coral};
  font-size: 34px;
  padding-bottom: 20px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 30px;
  }
`

const Subheader = styled.div`
  color: ${coral};
  font-size: 28px;
  a {
    color: ${secondaryBackground};
  }
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 22px;
  }
`

const NotFound = () => {

  return (
    <NotFoundWrapper>
      <Header>Oops..!</Header>
      <Subheader>It seems this site doesn't exist. Did you want to play the <Link to={`${SITE_PREFIX}/home`}>game</Link>?</Subheader>
    </NotFoundWrapper>

  )
}

export default NotFound;