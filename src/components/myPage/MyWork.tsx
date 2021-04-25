import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

import './styles/MyWork.scss';

export default function MyWork() {
  const state = useSelector((state: RootState) => state.reducer);

  return (
    <div id="MyWork">
      <div className="mywork-title">내 활동</div>
      {state.privateFeeds.loading && 'now loading..'}
      {state.privateFeeds.error && 'now error..'}
      {state.privateFeeds.data &&
        state.privateFeeds.data.data.userFeeds.slice(0, 3).map((x) => {
          const topic = x.topic;
          return (
            <div className="myword-container">
              <div className="myword">
                {x.content.map((word, idx) => {
                  const head = topic.split('')[idx];
                  return (
                    <div key={idx}>
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
    </div>
  );
}
