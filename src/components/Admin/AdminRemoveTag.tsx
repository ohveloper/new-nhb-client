import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { delRemoveTagAdminT } from '../../api/delRemoveTagAdmin';
import { RootState } from '../../reducers';
import './AdminRemoveTag.scss';

export default function AdminRemoveTag() {
  const state = useSelector((state: RootState) => state.reducer);
  const [tagId, setTagId] = useState('');
  const wrong = document.querySelector('#wrong');
  const correct = document.querySelector('#correct');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (tagId === '') {
      correct?.classList.add('invisualble');
      wrong?.classList.add('invisualble');
    }
    setTagId(value);
  };

  const onClickHandler = (e: any) => {
    if (!tagId) return;
    e.preventDefault();
    const accessToken = state.accessToken;
    if (accessToken && tagId) {
      delRemoveTagAdminT({ data: { tagId } }, accessToken)
        .then((x) => {
          setTagId('');
          correct?.classList.remove('invisualble');
        })
        .catch((e) => {
          wrong?.classList.remove('invisualble');
          console.log(e);
        });
      setTagId('');
    }
  };
  return (
    <div>
      <h1>AdminRemoveTag</h1>
      <input
        type="text"
        value={tagId}
        onChange={onChangeHandler}
        placeholder="tagId를 입력하세요"
      />
      <button onClick={onClickHandler}>지우기</button>
      <div id="wrong" className="invisualble">
        잘못입력 하셨습니다
      </div>
      <div id="correct" className="invisualble">
        성공적으로 입력하셨습니다
      </div>
    </div>
  );
}
