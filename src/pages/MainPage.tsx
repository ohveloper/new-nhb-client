import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Content, postUploadFeedT } from '../api/postUploadFeed';
import { UserFeeds, Welcome } from '../reducers/reducer';
import { RootState } from '../reducers';
import { postBringFeedT } from '../api/postBringFeeds';
import { delRemoveFeedT, FeedId } from '../api/delRemoveFeed';
import { postBringUserInfoThunk } from '../actions/actions';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import MainpageUserRanking from '../components/Main/MainpageUserRanking';
import ModalContainer from '../components/Main/modal/ModalContainer';
import { Mobile, Tablet, PC } from '../lib/MediaQuery';

export default function MainPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  console.log(state);

  const [isLoading, setIsLoading] = useState(true);
  const [poem, setPoem] = useState<Welcome>({ data: { userFeeds: [] } });

  // TODO: topicId를 api로 가져오기
  const topicId = 1;
  const limit = 20;

  const fetchData = async () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
    await postBringFeedT({ topicId: topicId, limit: limit }).then((res) => {
      const response = res.data;
      setPoem({
        data: { userFeeds: response.userFeeds },
      });
    });
    setIsLoading(false);
  };

  //? 게시글 업로드 함수
  //? PoemInput 컴포넌트에 전달된다
  const handlePostUploadFeed = (content: Content) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      postUploadFeedT(content, accessToken)
        .then(() => {
          //? 게시글 작성 후 전체 리스트를 새로 불러온다
          //! 비동기를 적용하기 위해 프로미스 체인 안에서 데이터요청
          fetchData().catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  };

  //? 게시글 삭제 함수
  const handleDelete = async (feedId: FeedId) => {
    console.log(feedId);
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await delRemoveFeedT(feedId, accessToken);
      await fetchData();
    }
  };

  //? 첫 렌더 이후 사용될 데이터 호출 함수
  const fetchMoreData = async () => {
    //? 세 번째 인자로 게시글 번호(feedId)를 받는다
    //? feedId = 마지막 렌더 시점의 state에 저장된 게시글중 마지막 게시글의 feedId - 1
    // TODO: 더이상 불러올 데이터가 없으면 어떻게 처리하나?
    const lastIdx = poem.data.userFeeds.length - 1;
    const lastItem = poem.data.userFeeds[lastIdx];
    const feedId = lastItem?.feedId;
    //? 이전에 불러온 목록의 이전 글 20개를 가져온다
    //! state에 전달하지 않고 axios로 데이터 호출만 한다
    await postBringFeedT({
      topicId: topicId,
      limit: limit,
      feedId: feedId,
    }).then((res) => {
      const response = res.data;
      //? 현재 가지고 있는 글 목록에 더하기
      setPoem({
        data: { userFeeds: poem.data.userFeeds.concat(response.userFeeds) },
      });
    });
  };

  //? 스크롤 계산해서 데이터 불러오기
  const infiniteScroll = useCallback(() => {
    //? 화면 높이
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    //? 사용자가 보는 페이지와 전체페이지 최상단과의 차이
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    //? 사용자가 현재 보고있는 높이
    const clientHeight = document.documentElement.clientHeight;

    //? 높이에서 -100을 해서 최하단에 내려오지 않아도 어느 정도 내려오면 데이터를 새로 받아오게 한다
    scrollHeight -= 100;

    if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
      fetchMoreData().catch((e) => console.log(e));
    }
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);
  }, [infiniteScroll]);

  //? ===========================모달 핸들러=============================//
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [poemItem, setPoemItem] = useState<UserFeeds>({
    feedId: 0,
    user: { nickName: '', tag: '', userId: '' },
    topic: '',
    content: [],
    likeNum: '',
    commentNum: 0,
    createdAt: '',
    updatedAt: '',
  });
  //? 클릭한 글 조회
  const fetchItem = async (topicId: number, limit: number, feedId: number) => {
    await postBringFeedT({
      topicId,
      limit,
      feedId,
    })
      .then((res) => {
        setPoemItem(res.data.userFeeds[0]);
      })
      .then(() => {
        setIsModalOpen(!isModalOpen);
      });
  };

  const handleModal = (feedId: number) => {
    const nextId = Number(feedId) + 1;

    fetchItem(1, 20, nextId).catch((e) => console.log(e));
  };

  //? 모달 열고 닫을때 렌더
  useEffect(() => {
    fetchData().catch((e) => console.log(e));
  }, [isModalOpen]);

  return (
    <>
      <NavSidebarContainer />
      <div id="main-page">
        <Mobile>
          <div className="feed">
            <div>
              {isModalOpen && (
                <ModalContainer poemItem={poemItem} handleModal={handleModal} />
              )}
            </div>
            <MainpagePoemInput handlePostUploadFeed={handlePostUploadFeed} />
            <MainpagePoemList
              poem={poem}
              isLoading={isLoading}
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
            />
          </div>
        </Mobile>
        <Tablet>
          <MainpageUserRanking />
          <div className="feed">
            <>
              {isModalOpen && (
                <ModalContainer poemItem={poemItem} handleModal={handleModal} />
              )}
            </>
            <MainpagePoemInput handlePostUploadFeed={handlePostUploadFeed} />
            <MainpagePoemList
              poem={poem}
              isLoading={isLoading}
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
            />
          </div>
          <div className="nav-open"></div>
        </Tablet>
        <PC>
          <MainpageUserRanking />
          <div className="feed">
            <>
              {isModalOpen && (
                <ModalContainer poemItem={poemItem} handleModal={handleModal} />
              )}
            </>
            <MainpagePoemInput handlePostUploadFeed={handlePostUploadFeed} />
            <MainpagePoemList
              poem={poem}
              isLoading={isLoading}
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
            />
          </div>
          <div className="nav-open"></div>
        </PC>
      </div>
    </>
  );
}
