import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminPostUploadTagT } from '../../api/AdminPostUploadTag';
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = (e: any) => {
    if (!tagName || !description) return;
    e.preventDefault();
    if (accessToken) {
      AdminPostUploadTagT({ tagUrl, tagName, description }, accessToken)
        .then(() => {
          setUploadTag({
            ...uploadTag,
            tagUrl: '',
            tagName: '',
            description: '',
          });
        })
        .then(() => {
          window.location.reload();
        })
        .catch((e) => e);
    }
  };

  return (
    <div>
      <h1>뱃지 업로드</h1>
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
      {/* <input
        type="text"
        name="tagUrl"
        placeholder="tagUrl"
        value={tagUrl}
        onChange={onChangeHandler}
      /> */}
      <button onClick={onClickHandler}>전송</button>
    </div>
  );
}
