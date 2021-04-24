import { ChangeEvent, FormEvent, useState } from 'react';
import { UserFeeds } from '../../../reducers/reducer';
import { EditFeedParameter } from '../../../api/patchEditFeed';
import '../../../styles/mainPage.css';

type ModalContainerEditInputProps = {
  editVal: UserFeeds;
  handlePatchEditFeed: (editFeedParameter: EditFeedParameter) => void;
};

export default function ModalContainerEditInput({
  handlePatchEditFeed,
  editVal,
}: ModalContainerEditInputProps) {
  const [editText, setEditText] = useState<UserFeeds>(editVal);
  const [error, setError] = useState(false);
  const topic = editText.topic.split('');

  const onEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditText((prevState): any => {
      const { content } = prevState;
      const text: any = content.slice();
      text[name] = value;
      const result = Object.assign(prevState, { comment: text });
      return {
        result,
      };
    });
  };
  const onEditSubmit = (event: FormEvent) => {
    event.preventDefault();
    let isValidate = false;
    for (let i = 0; i < topic.length; i++) {
      if (topic[i] === editText.content[i][0]) {
        isValidate = true;
      }
    }
    if (isValidate) {
      handlePatchEditFeed({
        content: editText.content,
        feedId: editText.feedId,
      });
      setError(false);
    } else {
      console.log('error!');
      setError(true);
    }
  };

  return (
    <div className="edit-poem-input">
      <form onSubmit={onEditSubmit}>
        <div className="input-btn-container">
          <div className="input-container">
            {topic.map((letter, idx) => {
              const key = letter + String(idx);
              return (
                <div key={key}>
                  <input
                    type="text"
                    name={String(idx)}
                    onChange={onEditChange}
                    value={editText.content[idx]}
                  />
                </div>
              );
            })}
          </div>

          <div className="btn-container">
            <button type="submit" className="btn upload-btn mt5">
              수정
            </button>
          </div>
        </div>
      </form>
      {error ? (
        <div>오늘의 주제에 맞는 작품을 작성해 주세요!</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
