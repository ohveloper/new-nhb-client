import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { postUploadTopicT } from '../../api/postUploadTopic';
import { RootState } from '../../reducers';

export default function UploadTopic() {
  const state = useSelector((state: RootState) => state.reducer);
  const [uploadTopic, setUploadTopic] = useState({
    word: '',
    expiration: '',
  });

  const { word, expiration } = uploadTopic;

  const onClickHandler = (e: any) => {
    if (!word || !expiration) return;
    e.preventDefault();
    const accessToken = state.accessToken;
    if (accessToken) {
      postUploadTopicT({ word, expiration }, accessToken)
        .then((x) => console.log(x))
        .then((x) => {
          window.location.reload();
        })
        .catch((e) => console.log(e));
      setUploadTopic({
        ...uploadTopic,
        word: '',
        expiration: '',
      });
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUploadTopic({
      ...uploadTopic,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>토픽 업로드</h1>
      <input
        name="expiration"
        type="text"
        value={uploadTopic.expiration}
        placeholder="ex)2021-04-15"
        onChange={onChangeHandler}
      />
      <input
        name="word"
        value={uploadTopic.word}
        type="text"
        placeholder="ex)주말"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>전송</button>
    </div>
  );
}
