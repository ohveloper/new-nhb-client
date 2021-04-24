import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
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
  poemItem: UserFeeds;
  handleModal: (feedId: number) => void;
};

export default function ModalContainer({
  handleModal,
  poemItem,
}: ModalContainerProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const userId = state.userInfo.data?.data.userInfo.userId;
  const itemId = poemItem.feedId;
  const [edit, setEdit] = useState(false);
  const [editVal, setEditVal] = useState<UserFeeds>(poemItem);
  const [comments, setComments] = useState<BringComment>({
    data: { comments: [] },
  });

  const topicId = 1;
  const limit = 20;

  //? 파라미터로 들어갈 FeedId 형식
  const delFeedId = {
    data: { feedId: itemId },
  };

  //? 게시글 삭제 함수
  const handleDelete = async (feedId: FeedId) => {
    console.log(feedId);
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await delRemoveFeedT(feedId, accessToken);
      //? 삭제요청 후 모달 종료
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
      await fetchData(topicId, limit, itemId + 1);
    }
  };

  //? 댓글 등록 함수
  const [isUploaded, setIsUploaded] = useState(false);
  const handlePostUploadComment = async (comment: CommentFeedId) => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await postUploadCommentT(comment, accessToken);
      await fetchCommentData({ feedId: itemId });
    }
    setIsUploaded(true);
    setIsUploaded(false);
  };
  console.log('upload', isUploaded);

  //? 클릭한 글 조회
  const fetchData = async (topicId: number, limit: number, feedId: number) => {
    await postBringFeedT({
      topicId,
      limit,
      feedId,
    });
  };
  //? 댓글 조회 함수
  const fetchCommentData = async (feedId: Feed_Id) => {
    await postBringCommentT(feedId).then((res) => {
      const response = res.data;
      setComments({ data: { comments: [...response.comments] } });
    });
  };

  //? 현재 글 정보 불러오기
  useEffect(() => {
    const nextId = itemId + 1;
    postBringFeedT({ topicId, limit, feedId: nextId })
      .then((res) => {
        console.log('res', res.data);
      })
      .catch((e) => console.log(e));
    fetchCommentData({ feedId: itemId }).catch((e) => console.log(e));
    console.log(1);
  }, [isUploaded]);

  return (
    <div id="modal-container" onClick={() => handleModal(itemId)}>
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
              {userId === Number(poemItem.user.userId) ? (
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
              ) : (
                <div className="edit-del-btn-container"></div>
              )}

              <div className="pic-info-content-container">
                <div className="user-pic-container">
                  <div className="user-pic"></div>
                </div>
                <div className="info-content-container">
                  <PoemInfo
                    userTag={poemItem.user.tag}
                    nickName={poemItem.user.nickName}
                    createdAt={poemItem.createdAt}
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
                commentNum={comments.data.comments.length}
              />

              <ModalCommentsContainer
                feedId={itemId}
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
