import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import NavMyPage from './Nav/NavMypage';
import NavLogin from './Nav/NavLogin';
import MyLog from './Nav/Mylog';
import Induce from './Nav/Induce';

type sidebarProps = {
  isLoggedIn: boolean;
};

function NavLoginSection({ isLoggedIn }: sidebarProps): JSX.Element {
  if (isLoggedIn) {
    return <NavMyPage />;
  }
  return <NavLogin />;
}

function NavLogSection({ isLoggedIn }: sidebarProps): JSX.Element {
  if (isLoggedIn) {
    return <MyLog />;
  }
  return <Induce />;
}

const Sidebar = () => {
  const [openPanel, setOpenPanel] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  return (
    <div>
      <div>
        <p onClick={() => setOpenPanel(true)}>NHB 파헤치기</p>
        <p onClick={() => setLogin(true)}>Login test</p>
      </div>
      <SlidingPanel type={'right'} isOpen={openPanel} size={30}>
        <div onClick={() => setOpenPanel(false)}>
          <NavLoginSection isLoggedIn={isLoggedIn} />
          <br />
          <NavLogSection isLoggedIn={isLoggedIn} />
          <br />
          Click to Close Sidebar
        </div>
      </SlidingPanel>
    </div>
  );
};

export default Sidebar;
