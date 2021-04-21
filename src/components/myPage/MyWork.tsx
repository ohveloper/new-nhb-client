import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

import './MyWork.scss';

export default function MyWork() {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.privateFeeds.data?.data.userFeeds.slice(0, 2);

  return (
    <div id="MyWork">
      <div>MyWork</div>
      {state.privateFeeds.loading && 'now loading..'}
      {state.privateFeeds.error && 'now error..'}
      {state.privateFeeds.data &&
        state.privateFeeds.data.data.userFeeds.slice(0, 3).map((x) => {
          return (
            <div className="myword-container">
              <div className="myword">
                {x.content.map((word) => {
                  const head = word.split('')[0];
                  return (
                    <div>
                      [{head}: {word}]
                    </div>
                  );
                })}
              </div>
              <div className="myword-like-comment">
                <div>[좋아요: {x.likeNum}]</div>
                <div>[댓글수: {x.commentNum}]</div>
              </div>
            </div>
          );
        })}

      {/* // ? '데이터가 없습니다'
          // : userFeeds?.length === 0
          // ? '작성한글이 없습니다'
          // : userFeeds?.map((x) => (
          //     <div key={x.feedId}>
          //       {x.content.map((x, idx) => {
          //         const head = x.split('')[0];
          //         return (
          //           <div key={idx}>
          //             {head}: {x}
          //           </div>
          //         );
          //       })}
          //       <div>댓글 수 : {x.commentNum}</div>
          //       <div>좋아요 수 : {x.likeNum}</div>
          //     </div>
          //   ))} */}
    </div>
  );
}
