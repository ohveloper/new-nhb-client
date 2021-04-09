import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyPage from './pages/MyPage';
import Homepage from './pages/HomePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Route path="/" component={Homepage} exact />
            <div className="App">:sunglasses: </div>
          </Route>
          <Route path="/main"></Route>
          <Route path="/mypage">
            <div className="App">:sunglasses: </div>
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
