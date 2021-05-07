import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { patchEditTopicT } from '../../api/patchEditTopic';
import { getAllTopicsAdminThunk } from '../../actions/actions';

interface AdminGetAllTopicsProps {
  id: number;
  word: string;
  expiration: string;
}

export default function AdminGetAllTopics({
  id,
  word,
  expiration,
}: AdminGetAllTopicsProps) {
  const uid = String(id);
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken: any = state.accessToken;
  const dispatch = useDispatch();
  const wordEle: any = useRef();
  const wordInput: any = useRef();
  const checkButton: any = useRef();
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const check = <FontAwesomeIcon icon={faCheck} />;
  const topicEditHandler = async () => {
    if (checkButton.current.name === 'on') {
      const word = wordInput.current.value;
      const topicId = wordInput.current.name;
      await patchEditTopicT({ topicId, word }, accessToken)
        .then(() => {
          return dispatch(getAllTopicsAdminThunk(accessToken));
        })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          alert('만료날짜가 지났거나 이미 있는 단어입니다.');
          window.location.reload();
        });
    } else {
      const temp = document.querySelectorAll('.admin-topic-edit');
      for (let i = 0; i < temp.length; i += 1) {
        temp[i].classList.add('admin-edit-none');
      }
      wordEle.current.className += ' admin-edit-none';
      wordInput.current.className = 'admin-topic-input';
      checkButton.current.className = 'admin-check-edit fa-icon-button';
      checkButton.current.name = 'on';
    }
  };
  return (
    <div id="admin-topic-card">
      <div>{id}</div>
      <div className="admin-topic-element" ref={wordEle}>
        {word}
      </div>
      <input
        className="admin-topic-input admin-edit-none"
        placeholder={word}
        ref={wordInput}
        name={uid}
      />
      <div className="admin-topic-element">만료:{expiration.substr(0, 10)}</div>
      <button
        className="admin-topic-edit fa-icon-button"
        onClick={topicEditHandler}
      >
        {edit}
      </button>
      <button
        className="admin-edit-none"
        onClick={topicEditHandler}
        ref={checkButton}
      >
        {check}
      </button>
    </div>
  );
}
