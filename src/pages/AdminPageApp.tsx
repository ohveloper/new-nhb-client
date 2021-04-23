import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTagsAdminThunk,
  getAllTopicsAdminThunk,
} from '../actions/actions';

import '../styles/AdminPageApp.scss';

import AdminGetallTagContainer from '../components/Admin/AdminGetallTagContainer';

import AdminGetAllTopicsContainer from '../components/Admin/AdminGetAllTopicsContainer';
import AdminRemoveTag from '../components/Admin/AdminRemoveTag';
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
      dispatch(getAllTagsAdminThunk(accessToken));
    }
  }, []);
  return (
    <div>
      <NavSidebarContainer />
      <div id="admin-page-container">
        <h1 id="admin-header">관리자 페이지</h1>
        <div id="admin-element">
          <div className="admin-topic ad-ele">
            <UploadTopic />
            {/* {state.topicsAdmin.loading && 'now loading..'}
            {state.topicsAdmin.error && 'sorry now error'}
            {state.topicsAdmin.data && <AdminGetAllTopicsContainer />} */}
            <AdminGetAllTopicsContainer />
          </div>
          <div className="admin-tag ad-ele">
            <AdminUploadTag />
            <AdminGetallTagContainer />
            <AdminRemoveTag />
          </div>
        </div>
      </div>
    </div>
  );
}
