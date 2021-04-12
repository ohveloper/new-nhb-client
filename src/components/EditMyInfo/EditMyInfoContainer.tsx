import React from 'react';
import EditMyInfo from '../../pages/EditMyInfoPage';
import EditMyNickName from './EditMyNickName';
import EditMyPhoto from './EditMyPhoto';

export default function EditMyInfoContainer() {
  return (
    <div>
      <div>EditMyInfoContainer</div>;
      <EditMyInfo />
      <EditMyNickName />
      <EditMyPhoto />
    </div>
  );
}
