import { useRef, useState } from 'react';
import { postBringFeedT } from '../../api/postBringFeeds';
import { UserFeeds } from '../../reducers/reducer';

type PoemContentProps = {
  feed: UserFeeds;
  itemId: number;
  handleModal: (feedId: number) => void;
};

export default function PoemContent({
  feed,
  itemId,
  handleModal,
}: PoemContentProps) {
  const ref: any = useRef();

  const onModalClick = () => {
    const feedid = ref.current.dataset.feedid;
    console.log('ref:', feedid);
    handleModal(feedid);
  };

  return (
    <div
      className="poem-content-container"
      onClick={onModalClick}
      data-feedid={feed.feedId}
      ref={ref}
    >
      {feed.content.map((word, idx) => {
        let head;
        if (word !== null) {
          head = word.slice(0, 1);
          // const tail = word.slice(1);
        }
        const key = String(idx) + String(feed.feedId);
        return (
          <div key={key} className="poem-content">
            [{head}]{word}
          </div>
        );
      })}
    </div>
  );
}
