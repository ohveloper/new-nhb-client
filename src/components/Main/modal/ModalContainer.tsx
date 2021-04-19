import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { useParams, useHistory } from 'react-router-dom';
import { postBringFeedT } from '../../../api/postBringFeeds';
import { UserFeeds, BringComment } from '../../../reducers/reducer';
import { delRemoveFeedT, FeedId } from '../../../api/delRemoveFeed';
import { postBringCommentT, Feed_Id } from '../../../api/postBringComment';
import PoemEditButton from '../PoemEditButton';
import PoemDeleteButton from '../PoemDeleteButton';
import PoemInfo from '../PoemInfo';
import PoemButtonGroup from '../PoemButtonGroup';
import ModalCommentsView from './ModalCommentsView';

export default function PoemDetails() {
  const state = useSelector((state: RootState) => state.reducer);
  const userId = state.userInfo.data?.data.userInfo.userId;
  const { feed_id } = useParams<{ feed_id: string }>();
  const history = useHistory();
  const [editVal, setEditVal] = useState<UserFeeds>({
    feedId: 0,
    user: { nickName: '', tag: '', userId: '' },
    topic: '',
    content: [],
    likeNum: '',
    commentNum: 0,
    createdAt: '',
    updatedAt: '',
  });
  const [comments, setComments] = useState<BringComment>({ comments: [] });

  const topicId = 1;
  const limit = 20;

  //? 현재 글 정보 불러오기
  useEffect(() => {
    postBringFeedT({
      topicId: topicId,
      limit: limit,
      feedId: Number(feed_id) + 1,
    })
      .then((res) => {
        setEditVal(res.data.userFeeds[0]);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(editVal);

  //? 게시글 삭제 함수
  const delFeedId = {
    data: { feedId: Number(feed_id) },
  };
  const handleDelete = async (feedId: FeedId) => {
    console.log(feedId);
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await delRemoveFeedT(feedId, accessToken);
      //? 삭제요청 후 /main으로 이동
      history.push('/main');
    }
  };

  //? 게시글 수정 함수
  const handleEdit = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      console.log('Edit!!!');
    }
  };

  const fetchCommentData = async (feedId: Feed_Id) => {
    await postBringCommentT(feedId).then((res) => {
      setComments({ comments: [...res.comments] });
    });
  };

  return (
    <>
      <h2 onClick={() => history.push('/main')}>돌아가기</h2>
      <h1>PoemDetailsPage</h1>
      <div>{editVal.feedId}</div>
      {userId === Number(editVal.user.userId) ? (
        <>
          <PoemEditButton handleEdit={handleEdit} />
          <PoemDeleteButton handleDelete={handleDelete} feedId={delFeedId} />
        </>
      ) : (
        <div></div>
      )}

      <PoemInfo
        userTag={editVal.user.tag}
        nickName={editVal.user.nickName}
        createdAt={editVal.createdAt}
      />
      <div>
        {editVal.content.map((word, idx) => {
          const head = word.slice(0, 1);
          // const tail = word.slice(1);
          const key = String(idx) + String(editVal.feedId);
          return (
            <div key={key}>
              [{head}]{word}
            </div>
          );
        })}
      </div>
      <PoemButtonGroup
        likeNum={editVal.likeNum}
        commentNum={editVal.commentNum}
      />
      <ModalCommentsView comments={comments} />
    </>
  );
}
