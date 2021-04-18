import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

export default function MyWork() {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.privateFeeds.data?.data.userFeeds.slice(0, 2);
  return (
    <>
      <h1>MyWork</h1>
      <div>
        {userFeeds?.length === 0
          ? '작성한글이 없습니다'
          : userFeeds?.map((x) => (
              <div key={x.feedId}>
                {x.content.map((x, idx) => {
                  const head = x.split('')[0];
                  return (
                    <div key={idx}>
                      {head}: {x}
                    </div>
                  );
                })}
                <div>댓글 수 : {x.commentNum}</div>
                <div>좋아요 수 : {x.likeNum}</div>
              </div>
            ))}
      </div>
    </>
  );
}
