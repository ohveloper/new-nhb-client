import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopicsAdminThunk } from '../actions/actions';
import AdminGetAllTopicsContainer from '../components/Admin/AdminGetAllTopicsContainer';
import AdminUploadTag from '../components/Admin/AdminUploadTag';

import UploadTopic from '../components/Admin/AdminUploadTopic';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import { RootState } from '../reducers';

export default function AdminPageApp() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = state.accessToken;
    if (accessToken) {
      dispatch(getAllTopicsAdminThunk(accessToken));
    }
  }, []);
  return (
    <div>
      <NavSidebarContainer />
      <h1>AdminPageApp</h1>
      <UploadTopic />
      {console.log(state)}
      {/* {state.topicsAdmin.loading && 'now loading..'}
      {state.topicsAdmin.error && 'sorry now error'}
      {state.topicsAdmin.data && <AdminGetAllTopicsContainer />} */}
      <AdminGetAllTopicsContainer />
      <AdminUploadTag />
    </div>
  );
}
