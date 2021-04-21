import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function AdminGetAllTag() {
  const state = useSelector((state: RootState) => state.reducer);
  const adminAllTags = state.adminTags.data?.data.tags;
  return (
    <div>
      <h1>AdminGetAllTag</h1>
      {adminAllTags
        ? adminAllTags.map((tag) => {
            return (
              <div>
                <div>{tag.id}</div>
                <div>{tag.tagName}</div>
                <div>{tag.description}</div>
                <div>{tag.tagUrl}</div>
              </div>
            );
          })
        : '데이터가 없습니다'}
    </div>
  );
}
