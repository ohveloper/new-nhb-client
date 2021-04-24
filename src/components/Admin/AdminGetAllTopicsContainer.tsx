import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import AdminGetAllTopics from './AdminGetAllTopics';
import './AdminGetAllTopicsContainer.scss';

export default function AdminGetAllTopicsContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const adminAllTopics = state.topicsAdmin.data?.data.topics;
  const [findTopic, setFindTopic] = useState('');
  const canNotUseTopic = document.getElementById('canNotUseTopic');
  const canUseTopic = document.getElementById('canUseTopic');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (findTopic === '') {
      canNotUseTopic?.classList.add('hide-div');
      canUseTopic?.classList.add('hide-div');
    }
    setFindTopic(value);
  };

  const onClickHandler = (e: any) => {
    e.preventDefault();
    if (!findTopic) return;
    const bool =
      state.topicsAdmin.data?.data.topics.filter((x) => x.word === findTopic) ||
      [];
    if (bool.length === 0) {
      canNotUseTopic?.classList.remove('hide-div');
    } else {
      canUseTopic?.classList.remove('hide-div');
    }
    setFindTopic('');
  };

  return (
    <div>
      <h1>모든 토픽</h1>
      <div id="admin-topic-contaniner">
        {adminAllTopics?.map((x) => (
          <AdminGetAllTopics
            id={x.id}
            word={x.word}
            expiration={x.expiration}
            key={x.id}
          />
        ))}
      </div>
      {/* <input
        type="text"
        placeholder="모든 토픽 검색"
        onChange={onChangeHandler}
        value={findTopic}
      />
      <button onClick={onClickHandler}>검색</button>

      <div id="canUseTopic" className="hide-div">
        사용 가능합니다
      </div>
      <div id="canNotUseTopic" className="hide-div">
        이미 사용하였습니다
      </div> */}
    </div>
  );
}
