import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyPage from './pages/MyPage';
import Homepage from './pages/HomePage';
import MainPage from './pages/MainPage';
import PoemDetails from './components/Main/modal/ModalContainer';
import './styles/styles.css';
import ApiTestPage from './pages/ApiTestPage';
import HomePage from './pages/HomePage';

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
          <Route exact={true} path="/main">
            <MainPage />
          </Route>
          <Route path="/main/:feed_id">
            <PoemDetails />
          </Route>
          <Route path="/apitest">
            <ApiTestPage />
          </Route>
          <Route path="/login">
            <HomePage />
          </Route>
          <Route path="/singup">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
