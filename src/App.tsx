import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GetUserInfo from './components/getUserInfo';
import MyPage from './pages/MyPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <div className="App">:sunglasses: </div>
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/mypage">
            <GetUserInfo />
            <MyPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
