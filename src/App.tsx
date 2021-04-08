import React from 'react';

import GetUserInfo from './components/getUserInfo';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <div>
        <div className="App">:sunglasses: </div>
        <GetUserInfo />
        <MyPage />
      </div>
    </>
  );
}

export default App;
