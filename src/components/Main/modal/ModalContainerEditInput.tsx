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
    handlePatchEditFeed({ content: editText.content, feedId: editText.feedId });
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
    </>
  );
}
