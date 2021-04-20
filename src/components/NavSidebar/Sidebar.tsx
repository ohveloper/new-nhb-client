import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import NavMyPage from './NavMypage';
import NavLogin from './NavLogin';
import MyLog from './Mylog';
import Induce from './Induce';
import dotenv from 'dotenv';
import './Sidebar.scss';

dotenv.config;

const Sidebar = () => {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;

  const [openPanel, setOpenPanel] = useState(false);
  // onClick={() =>
  return (
    <div id="Sidebar">
      <div>
        <p onClick={() => setOpenPanel(true)}>NHB Nav - Click</p>
      </div>
      {/* SlidingPanel type = panel 방향 / isOpen = 열고 닫기 설정 / size = panel 크기 / noBackdrop = panel 뒤 클리 가능하도록 설정 */}

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
