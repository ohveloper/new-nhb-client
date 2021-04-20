import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function AdminUploadTag() {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;
  const [uploadTag, setUploadTag] = useState({
    tagUrl: '',
    tagName: '',
    description: '',
  });

  const { tagUrl, tagName, description } = uploadTag;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUploadTag({
      ...uploadTag,
      [name]: value,
    });
  };

  const onClickHandler = (e: any) => {
    if (!tagUrl || !tagName || !description) return;
    setUploadTag({
      ...uploadTag,
      tagUrl: '',
      tagName: '',
      description: '',
    });
    console.log('?');
  };
  return (
    <div>
      <h1>AdminUploadTag</h1>
      <input
        type="text"
        name="tagUrl"
        placeholder="tagUrl"
        value={tagUrl}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="tagName"
        placeholder="tagName"
        value={tagName}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={description}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>전송</button>
    </div>
  );
}
