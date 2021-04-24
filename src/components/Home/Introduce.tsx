import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import '../../styles/HomepageSidebar/Introduce.scss';

export default function Introduce() {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;
  return (
    <div id="introduce">
      <div className="Introduce ani1s">빡빡한 일상 속에</div>
      <div className="Introduce ani2s">달게 내리는 단비 같은 작은 웃음</div>
      <div className="Introduce ani3s">N행시의 밤...</div>
      {accessToken ? (
        <div className="Introduce ani4s">매일 글을 작성하면</div>
      ) : (
        <div className="Introduce ani4s">당신의 글을</div>
      )}
      {accessToken ? (
        <>
          <div className="Introduce ani5s">마이페이지에 있는 </div>
          <div className="Introduce ani5s">
            잔디에 불이 켜지는 걸 알고 있나요?
          </div>
        </>
      ) : (
        <div className="Introduce ani5s">기다립니다</div>
      )}
    </div>
  );
}
