import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SITE_PREFIX, MENU_HEIGHT, MOBILE_SIDE_PADDING, MOBILE_BREAKPOINT } from './constants';
import {primaryForeground} from './constants/colors';
import { AppProvider } from './context/AppContext/AppContext';
import Menu from './components/Menu';
import Home from './pages/Home';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const ContentWrapper = styled.div`
  color: ${primaryForeground};
  height: calc(100% - ${MENU_HEIGHT}px);
  padding: 40px;
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: ${MOBILE_SIDE_PADDING}px;
    padding-right: ${MOBILE_SIDE_PADDING}px;
  }
`

function App() {
  return (
    <AppProvider>
      <Router>
        <Menu />
        <ContentWrapper>
          <Switch>
            <Route exact path={`${SITE_PREFIX}/home`}>
              <Home />
            </Route>
            <Route exact path={`${SITE_PREFIX}/about`}>
              <div>About</div>
            </Route>
            <Route exact path={`${SITE_PREFIX}/settings`}>
              <Settings />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </ContentWrapper>
      </Router>
    </AppProvider>
  );
}

export default App;
