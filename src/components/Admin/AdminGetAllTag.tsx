import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { delRemoveTagAdminT } from '../../api/delRemoveTagAdmin';

interface AdminGetAllTagProps {
  id: number;
  tagName: string;
  description: string | null;
  tagUrl: string | null;
}

export default function AdminGetAllTag({
  id,
  tagName,
  description,
  tagUrl,
}: AdminGetAllTagProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const remove = <FontAwesomeIcon icon={faMinus} />;
  const wrong = document.querySelector('#wrong');
  const correct = document.querySelector('#correct');
  const removeButton: any = useRef();

  const tagRemoveHandler = (e: any) => {
    const tagId = removeButton.current.name;
    if (!tagId) return;
    e.preventDefault();
    const accessToken = state.accessToken;
    if (accessToken && tagId) {
      delRemoveTagAdminT({ data: { tagId } }, accessToken)
        .then(() => {
          correct?.classList.remove('invisualble');
          window.location.reload();
        })
        .catch(() => {
          wrong?.classList.remove('invisualble');
        });
    }
  };
  return (
    <div>
      <div id="admin-tag-card">
        <div>{id}</div>
        <div>{tagName}</div>
        <div>{description}</div>
        <div>{tagUrl}</div>
        <div>
          <button
            className="admin-tag-remove fa-icon-button"
            onClick={tagRemoveHandler}
            ref={removeButton}
            name={String(id)}
          >
            {remove}
          </button>
        </div>
      </div>
    </div>
  );
}
