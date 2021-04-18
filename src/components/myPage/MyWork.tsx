import { RootState } from '../../reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface UserFeeds {
  userFeeds: Feeds[];
}
interface Feeds {
  feedId: number;
  user: User;
  topic: string;
  content: string[];
  likeNum: string;
  commentNum: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  userId: string;
  nickName: string;
  tag: string;
}

export default function MyWork() {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.privateFeeds.data?.data.userFeeds.slice(0, 2);
  return (
    <>
      <h1>MyWork</h1>
      <div>
        {userFeeds?.length &&
          userFeeds?.map((x, idx) => (
            <div>
              <div key={idx}>
                {x.content.map((x) => {
                  const head = x.split('')[0];
                  return (
                    <div>
                      {head}: {x}
                    </div>
                  );
                })}
              </div>
              <div>댓글 수 : {x.commentNum}</div>
              <div>좋아요 수 : {x.likeNum}</div>
            </div>
          ))}
      </div>
    </>
  );
}
