import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { newFeed } from '../../reducers/initialState';

type MainpagePoemInputProps = {
  onPoemInsert: (newFeed: newFeed) => void;
};

const MainpagePoemInput = ({ onPoemInsert }: MainpagePoemInputProps) => {
  const state = useSelector((state: RootState) => state.poemReducer);
  //? 오늘의 주제어 불러오기
  const { todaysTopic } = state;

  const [val, setVal] = useState({
    content: [],
  });
  const { content } = val;

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
    });
  };

  return (
    <>
      <h1>PoemInput</h1>
      <form onSubmit={onPoemSubmit}>
        {todaysTopic.map((letter, idx) => {
          return (
            <div key={idx}>
              <input
                name={letter}
                value={content[idx]}
                onChange={onPoemChange}
              />
            </div>
          );
        })}
        <button type="submit">작성하기</button>
      </form>
    </>
  );
};

export default MainpagePoemInput;
