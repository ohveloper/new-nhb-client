import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Content, postUploadFeedT } from '../api/postUploadFeed';
import { UserFeeds, Welcome } from '../reducers/reducer';
import { RootState } from '../reducers';
import { postBringFeedT } from '../api/postBringFeeds';
import { delRemoveFeedT, FeedId } from '../api/delRemoveFeed';
import {
  getUserLikeLogThunk,
  postBringUserInfoThunk,
} from '../actions/actions';
import { postLikeFeedT, LikeFeedId } from '../api/postLikeFeed';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import MainpageUserRanking from '../components/Main/MainpageUserRanking';
import ModalContainer from '../components/Main/modal/ModalContainer';
import { Mobile, Tablet, PC } from '../lib/MediaQuery';
import { getUserLikeLogT } from '../api/getUserLikeLog';

export default function MainPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  console.log(state);

  const [isFetching, setIsFetching] = useState(true);
  const [poem, setPoem] = useState<Welcome>({ data: { userFeeds: [] } });

  // TODO: topicId를 api로 가져오기
  const topicId = 1;
  const limit = 10;

  //? 내 정보 가져오기
  useEffect(() => {
    const fetchUserData = () => {
      const _accessToken = '';
      if (state.accessToken) {
        const accessToken = _accessToken.concat(state.accessToken);
        dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
        dispatch(getUserLikeLogThunk(accessToken));
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);

    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchMoreData().catch((e) => console.log(e));
  }, [isFetching]);

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
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await delRemoveFeedT(feedId, accessToken);
      await fetchData();
    }
  };

  //? =======================Like Handler=====================//
  const handlePostLikeFeed = async (feedId: LikeFeedId) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await postLikeFeedT(feedId, accessToken);
      await fetchData();
      dispatch(getUserLikeLogThunk(accessToken));
    }
  };

  //? 게시글 업데이트시 사용될 데이터 호출 함수
  const fetchData = async () => {
    await postBringFeedT({ topicId: topicId, limit: limit }).then((res) => {
      const response = res.data;
      setPoem({
        data: { userFeeds: response.userFeeds },
      });
    });
  };

  //? 무한스크롤 구현시 사용될 데이터 호출 함수
  const fetchMoreData = async () => {
    //? feedId = 마지막 렌더 시점의 state에 저장된 게시글중 마지막 게시글의 feedId - 1
    let lastIdx;
    if (poem.data.userFeeds.length === 0) {
      lastIdx = 0;
    } else {
      lastIdx = poem.data.userFeeds.length - 1;
    }
    const lastItem = poem.data.userFeeds[lastIdx];
    const feedId = lastItem?.feedId;

    await postBringFeedT({
      topicId: topicId,
      limit: limit,
      feedId: feedId,
    })
      .then((res) => {
        const response = res.data;
        //? 현재 가지고 있는 글 목록에 더하기
        setPoem({
          data: {
            userFeeds: [...poem.data.userFeeds, ...response.userFeeds],
          },
        });
        setIsFetching(false);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //? 스크롤 계산해서 데이터 불러오기
  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      isFetching
    ) {
      setIsFetching(true);
    }
  };

  //? =====================Modal Handler=====================//
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
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
              handlePostLikeFeed={handlePostLikeFeed}
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
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
              handlePostLikeFeed={handlePostLikeFeed}
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
              handleDelete={handleDelete}
              handleModal={handleModal}
              itemId={poemItem.feedId}
              handlePostLikeFeed={handlePostLikeFeed}
            />
          </div>
          <div className="nav-open"></div>
        </PC>
      </div>
    </>
  );
}
