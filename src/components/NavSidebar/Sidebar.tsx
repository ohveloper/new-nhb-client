import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { getLogoutT } from '../../api/getLogout';

import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import NavMyPage from './NavMypage';
import NavLogin from './NavLogin';
import MyLog from './Mylog';
import Induce from './Induce';
import '../../styles/HomepageSidebar/NavSidebar.scss';

const Sidebar = () => {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;
  const findName = state.userInfo.data?.data.userInfo.nickName;
  const [openPanel, setOpenPanel] = useState(false);

  const getLogoutHandler = () => {
    getLogoutT()
      .then((x) => {
        console.log(x);
        useSelector((state: RootState) => state.reducer);

        window.location.assign('https://localhost:3000');
      })
      .catch((e) => console.log(e));
  };
  return (
    <div id="Sidebar">
      <div id="SidebarTxt" onClick={() => setOpenPanel(true)}>
        NHB Nav
      </div>
      {/* SlidingPanel type = panel 방향 / isOpen = 열고 닫기 설정 / size = panel 크기 / noBackdrop = panel 뒤 클리 가능하도록 설정 */}

      <SlidingPanel
        type={'right'}
        isOpen={openPanel}
        size={30}
        noBackdrop={true}
      >
        <div id="NavSidebar">
          <div>{findName ? `Good Day ${findName}님` : `Good Day you`}</div>
          <div>{accessToken ? <NavMyPage /> : <NavLogin />}</div>
          <div>{accessToken ? <MyLog /> : <Induce />}</div>
          <div onClick={getLogoutHandler}>{accessToken ? `LogOut` : <></>}</div>
          <div onClick={() => setOpenPanel(false)}>Close</div>
        </div>
      </SlidingPanel>
    </div>
  );
};

export default Sidebar;
