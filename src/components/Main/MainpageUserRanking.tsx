import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import '../../styles/mainPage.css';

export default function MainpageUserRanking() {
  const state = useSelector((state: RootState) => state.reducer);
  const { data } = state.rank;
  const rank = data?.data;

  return (
    <div id="main-page-user-ranking">
      <h2>실시간 인기작가 </h2>
      <div className="divider"></div>
      {rank?.rank.map((popular, idx) => {
        return (
          <div key={popular.userId} className="rank-container">
            <div className="rank-content">
              <span>{idx + 1}위!</span> {popular.nickName}님
            </div>
            <div className="divider"></div>
          </div>
        );
      })}
      <div className="more">더 보기</div>
    </div>
  );
}
