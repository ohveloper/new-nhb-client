import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '../../api/postCreatePoem';
import { RootState } from '../../reducers';
import { UserFeeds } from '../../reducers/poemReducer';

type MainpagePoemInputProps = {
  onPoemInsert: (feed: Content) => void;
};

const MainpagePoemInput = ({ onPoemInsert }: MainpagePoemInputProps) => {
  const state = useSelector((state: RootState) => state.poemReducer);
  //? 오늘의 주제어 불러오기
  const { todaysTopic } = state;

  const [val, setVal] = useState<Content>({
    content: [],
    word: '',
  });

  const onPoemChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVal({
      ...val,
      [name]: value,
    });
  };
  const onPoemSubmit = (event: FormEvent) => {
    event.preventDefault();
    onPoemInsert(val);
    setVal({
      content: [],
      word: '',
    });
    console.log(val);
  };

  return (
    <>
      <h1>PoemInput</h1>
      <form onSubmit={onPoemSubmit}>
        {todaysTopic.map((letter, idx) => {
          const key = letter + String(idx);
          return (
            <div key={key}>
              <input name={letter} value={idx} onChange={onPoemChange} />
            </div>
          );
        })}
        <button type="submit">작성하기</button>
      </form>
    </>
  );
};

export default MainpagePoemInput;
