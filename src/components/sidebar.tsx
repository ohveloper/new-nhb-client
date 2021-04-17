import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import NavMyPage from './Nav/NavMypage';
import NavLogin from './Nav/NavLogin';
import MyLog from './Nav/Mylog';
import Induce from './Nav/Induce';
import dotenv from 'dotenv';

dotenv.config;

// type sidebarProps = {
//   isLoggedIn: boolean;
// };

const Sidebar = () => {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;

  const [openPanel, setOpenPanel] = useState(false);
  // onClick={() =>
  return (
    <div>
      <div>
        <p onClick={() => setOpenPanel(true)}>NHB 파헤치기</p>
      </div>
      <SlidingPanel
        type={'right'}
        isOpen={openPanel}
        size={30}
        noBackdrop={true}
      >
        <div>
          {accessToken ? <NavMyPage /> : <NavLogin />}
          <br />
          {accessToken ? <MyLog /> : <Induce />}
          <br />
          <div onClick={() => setOpenPanel(false)}>
            Click here to Close Sidebar
          </div>
        </div>
      </SlidingPanel>
    </div>
  );
};

export default Sidebar;
