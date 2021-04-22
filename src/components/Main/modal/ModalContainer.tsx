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
import { patchEditFeedT, EditFeedParameter } from '../../../api/patchEditFeed';
import PoemEditButton from '../PoemEditButton';
import PoemDeleteButton from '../PoemDeleteButton';
import PoemInfo from '../PoemInfo';
import PoemButtonGroup from '../PoemButtonGroup';
import ModalContainerEditInput from './ModalContainerEditInput';
import ModalCommentsContainer from './ModalCommentsContainer';
import '../../../styles/mainPage.css';

type ModalContainerProps = {
  handleModal: () => void;
};

export default function ModalContainer({ handleModal }: ModalContainerProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const userId = state.userInfo.data?.data.userInfo.userId;
  const { feed_id } = useParams<{ feed_id: string }>();
  const history = useHistory();
  const [edit, setEdit] = useState(false);
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
  const numFeedId = Number(feed_id);

  //? 파라미터로 들어갈 FeedId 형식
  const delFeedId = {
    data: { feedId: numFeedId },
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

  //? 수정 버튼 클릭
  const handleEdit = () => {
    if (state.accessToken) {
      setEdit(true);
    }
  };
  //? 게시글 수정 적용버튼
  const handlePatchEditFeed = async (editFeedParameter: EditFeedParameter) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await patchEditFeedT(editFeedParameter, accessToken);
      setEdit(false);
      await fetchData(topicId, limit, numFeedId + 1);
    }
  };

  //? 댓글 등록 함수
  const handlePostUploadComment = async (comment: CommentFeedId) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await postUploadCommentT(comment, accessToken);
      await fetchCommentData({ feedId: numFeedId });
    }
  };

  //? 클릭한 글 조회
  const fetchData = async (topicId: number, limit: number, feedId: number) => {
    await postBringFeedT({
      topicId,
      limit,
      feedId,
    }).then((res) => {
      setEditVal(res.data.userFeeds[0]);
    });
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
    fetchData(topicId, limit, numFeedId + 1).catch((e) => console.log(e));
    fetchCommentData({ feedId: numFeedId }).catch((e) => console.log(e));
  }, []);
  console.log(editVal);
  console.log(edit);

  return (
    <div id="modal-container" onClick={() => handleModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {edit ? (
          <>
            <ModalContainerEditInput
              handlePatchEditFeed={handlePatchEditFeed}
              editVal={editVal}
            />
          </>
        ) : (
          <div id="modal-poem">
            <div className="poem-view">
              {userId === Number(editVal.user.userId) && (
                <>
                  <div className="edit-del-btn-container">
                    <div className="poem-edit-btn">
                      <PoemEditButton handleEdit={handleEdit} />
                    </div>
                    <div className="poem-del-btn">
                      <PoemDeleteButton
                        handleDelete={handleDelete}
                        feedId={delFeedId}
                      />
                    </div>
                  </div>
                  <div className="divider mb20"></div>
                </>
              )}

              <div className="pic-info-content-container">
                <div className="user-pic-container">
                  <div className="user-pic"></div>
                </div>
                <div className="info-content-container">
                  <PoemInfo
                    userTag={editVal.user.tag}
                    nickName={editVal.user.nickName}
                    createdAt={editVal.createdAt}
                  />
                  <div className="poem-content-container">
                    {editVal.content.map((word, idx) => {
                      let head;
                      if (word !== null) {
                        head = word.slice(0, 1);
                        // const tail = word.slice(1);
                      }
                      const key = String(idx) + String(editVal.feedId);
                      return (
                        <div key={key} className="poem-content">
                          [{head}]{word}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <PoemButtonGroup
                likeNum={editVal.likeNum}
                commentNum={editVal.commentNum}
              />

              <ModalCommentsContainer
                feedId={Number(feed_id)}
                comments={comments}
                handlePostUploadComment={handlePostUploadComment}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
