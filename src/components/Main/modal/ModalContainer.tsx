import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { useParams, useHistory } from 'react-router-dom';
import { postBringFeedT } from '../../../api/postBringFeeds';
import { UserFeeds, BringComment } from '../../../reducers/reducer';
import { delRemoveFeedT, FeedId } from '../../../api/delRemoveFeed';
import { postBringCommentT, Feed_Id } from '../../../api/postBringComment';
import {
  postUploadCommentT,
  CommentFeedId,
} from '../../../api/postUploadComment';
import PoemEditButton from '../PoemEditButton';
import PoemDeleteButton from '../PoemDeleteButton';
import PoemInfo from '../PoemInfo';
import PoemButtonGroup from '../PoemButtonGroup';
import ModalCommentsView from './ModalCommentsView';
import ModalCommentsInput from './ModalCommentsInput';

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
  const [comments, setComments] = useState<BringComment>({
    data: { comments: [] },
  });

  const topicId = 1;
  const limit = 20;

  //? 파라미터로 들어갈 FeedId 형식
  const delFeedId = {
    data: { feedId: Number(feed_id) },
  };

  //? 게시글 삭제 함수
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

  //? 댓글 등록 함수
  const handlePostUploadComment = async (comment: CommentFeedId) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await postUploadCommentT(comment, accessToken);
      await fetchCommentData({ feedId: Number(feed_id) });
    }
  };

  //? 댓글 조회 함수
  const fetchCommentData = async (feedId: Feed_Id) => {
    await postBringCommentT(feedId).then((res) => {
      const response = res.data;
      console.log(response.comments);

      setComments({ data: { comments: [...response.comments] } });
    });
  };

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
    fetchCommentData({ feedId: Number(feed_id) }).catch((e) => console.log(e));
  }, []);
  console.log(editVal);

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
          let head;
          if (word !== null) {
            head = word.slice(0, 1);
            // const tail = word.slice(1);
          }
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
      <ModalCommentsInput
        feedId={Number(feed_id)}
        comments={comments}
        handlePostUploadComment={handlePostUploadComment}
      />
      <ModalCommentsView comments={comments} />
    </>
  );
}
