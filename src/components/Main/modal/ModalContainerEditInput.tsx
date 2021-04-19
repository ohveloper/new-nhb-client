import { ChangeEvent, FormEvent, useState } from 'react';
import { UserFeeds } from '../../../reducers/reducer';
import { EditFeedParameter } from '../../../api/patchEditFeed';

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
    setEditText((prevState) => {
      const { content } = prevState;
      const text: any = content.slice();
      text[name] = value;
      return {
        feedId: prevState.feedId,
        user: {
          nickName: prevState.user.nickName,
          tag: prevState.user.tag,
          userId: prevState.user.userId,
        },
        topic: prevState.topic,
        content: text,
        likeNum: prevState.likeNum,
        commentNum: prevState.commentNum,
        createdAt: prevState.createdAt,
        updatedAt: prevState.updatedAt,
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
    <>
      <form onSubmit={onEditSubmit}>
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
        <button type="submit">수정하기</button>
      </form>
      {error ? (
        <div>오늘의 주제에 맞는 작품을 작성해 주세요!</div>
      ) : (
        <div></div>
      )}
    </>
  );
}
