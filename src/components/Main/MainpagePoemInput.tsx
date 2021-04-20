import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '../../api/postUploadFeed';
import { RootState } from '../../reducers';
import '../../styles/mainPage.css';

type MainpagePoemInputProps = {
  handlePostUploadFeed: (content: Content) => void;
};

const MainpagePoemInput = ({
  handlePostUploadFeed,
}: MainpagePoemInputProps) => {
  const state = useSelector((state: RootState) => state.reducer);
  //? 오늘의 주제어 불러오기
  // const { todaysTopic } = state;
  // const topic = todaysTopic.join('');
  const todaysTopic = ['여', '행'];
  const topic = todaysTopic.join('');

  const [val, setVal] = useState<Content>({
    content: [],
    word: topic,
  });
  const [error, setError] = useState(false);

  const onPoemChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVal((state) => {
      const { content } = state;
      const text: any = content.slice();
      text[name] = value;
      return { ...val, content: text };
    });
  };
  const onPoemSubmit = (event: FormEvent) => {
    event.preventDefault();
    let isValidate = false;
    for (let i = 0; i < todaysTopic.length; i++) {
      if (todaysTopic[i] === val.content[i][0]) {
        isValidate = true;
      }
    }
    if (isValidate) {
      handlePostUploadFeed(val);
      setError(false);
    } else {
      console.log('error!');
      setError(true);
    }
    setVal((): any => {
      const emptyArr = todaysTopic.fill('', 0, todaysTopic.length);
      return { ...val, content: emptyArr };
    });
  };

  return (
    <div id="main-page-poem-input">
      <h1>PoemInput</h1>
      <form onSubmit={onPoemSubmit}>
        {todaysTopic.map((letter, idx) => {
          const key = letter + String(idx);
          return (
            <div key={key}>
              <input
                type="text"
                name={String(idx)}
                value={val.content[idx]}
                onChange={onPoemChange}
                required={true}
              />
            </div>
          );
        })}
        <button type="submit">작성하기</button>
      </form>
      {error ? (
        <div>오늘의 주제에 맞는 작품을 작성해 주세요!</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MainpagePoemInput;
