import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyPage from './pages/MyPage';
import Homepage from './pages/HomePage';
import MainPage from './pages/MainPage';
import './styles/styles.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Homepage />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
