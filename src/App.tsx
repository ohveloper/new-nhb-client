import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GetUserInfo from './components/getUserInfo';
import MyPage from './pages/MyPage';
import Homepage from './pages/HomePage';

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
            <GetUserInfo />
            <MyPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
