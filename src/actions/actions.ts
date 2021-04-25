import { Dispatch } from 'redux';
import { postBringUserInfoT, UUID } from '../api/postBringUserInfo';
import { postBringFeedT } from '../api/postBringFeeds';
import { FeedId, postLikeFeedT } from '../api/postLikeFeed';
import { Feed } from '../api/postBringFeeds';
import { getRankT } from '../api/getRank';
import { Content, postUploadFeedT } from '../api/postUploadFeed';
import { postBringCommentT } from '../api/postBringComment';
import { AuthCode, postSignUpT } from '../api/postSignUp';
import { postLoginT } from '../api/postLogin';
import { patchEditTopicT } from '../api/patchEditTopic';

import {
  postLogInAsync,
  postBringCommentAsync,
  postSignUpAsync,
  postLikeFeedAsync,
  postUploadFeedsAsync,
  postBringUserInfoAsync,
  getRankAsync,
  postBringFeedsAsync,
  postGetPrivateFeedsAsync,
  getAllTagsAsync,
  postGetUserAptInfoAsync,
  getAllTopicsAdminAsync,
  getAllTagsAdminAsync,
  patchEditTopicAdminAsync,
  getOAuthAsync,
  getTopicsAsync,
  getAccessTokenAsync,
  getLogOutAsync,
  getFakeDataAsync,
} from '../actions/actionTypes';
import { postGetPrivateFeedsT, UserId } from '../api/postGetprivateFeeds';
import { getAllTagsT } from '../api/getAllTags';
import {
  postGetUserAptInfoT,
  postGetUserAptInfoTProps,
} from '../api/postGetUserAptInfo';
import { getAllTopicsAdminT } from '../api/getAllTopicsAdmin';
import { getAllTagsAdminT } from '../api/getAllTagsAdmin';
import { getOAuthT } from '../api/getOAuth';
import { getTopicsT } from '../api/getTopics';
import { refreshTokenT } from '../api/refreshToken';
import { getLogoutT } from '../api/getLogout';

export function postLogInThunk(authCode: AuthCode) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postLogInAsync;
    dispatch(request());
    try {
      const accessToken = await postLoginT(authCode);
      dispatch(success(accessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getLogOutThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getLogOutAsync;
    dispatch(request());
    try {
      const logout = await getLogoutT();
      dispatch(success(logout));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getOAuthThunk(accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getOAuthAsync;
    dispatch(request());
    try {
      const oauthAccessToken = await getOAuthT(accessToken);
      dispatch(success(oauthAccessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringCommentThunk(feedId: FeedId) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringCommentAsync;
    dispatch(request());
    try {
      const bringComment = await postBringCommentT(feedId);
      dispatch(success(bringComment));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postSignUpThunk(authCode: AuthCode) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postSignUpAsync;
    dispatch(request());
    try {
      const signup = await postSignUpT(authCode);
      dispatch(success(signup));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postLikeFeedThunk(feedId: FeedId, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postLikeFeedAsync;
    dispatch(request());
    try {
      const likeFeed = await postLikeFeedT(feedId, accessToken);
      dispatch(success(likeFeed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postUploadFeedThunk(content: Content, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postUploadFeedsAsync;
    dispatch(request());
    try {
      const uploadFeed = await postUploadFeedT(content, accessToken);
      dispatch(success(uploadFeed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringUserInfoThunk(userId: UUID, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringUserInfoAsync;
    dispatch(request());

    try {
      const userInfo = await postBringUserInfoT(userId, accessToken);
      dispatch(success(userInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringFeedsThunk(feed: Feed) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringFeedsAsync;
    dispatch(request());

    try {
      const feeds = await postBringFeedT(feed);
      dispatch(success(feeds));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function postGetFrivateFeedsThunk(userId: UserId) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postGetPrivateFeedsAsync;
    dispatch(request());

    try {
      const feed = await postGetPrivateFeedsT(userId);
      dispatch(success(feed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getRankThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getRankAsync;
    dispatch(request());
    try {
      const rank = await getRankT();
      dispatch(success(rank));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function getTopicsThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getTopicsAsync;
    dispatch(request());
    try {
      const topics = await getTopicsT();
      dispatch(success(topics));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getAllTagsThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getAllTagsAsync;
    dispatch(request());
    try {
      const tags = await getAllTagsT();
      dispatch(success(tags));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postGetUserAptInfoThunk(userId: postGetUserAptInfoTProps) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postGetUserAptInfoAsync;
    dispatch(request());
    try {
      const apt = await postGetUserAptInfoT(userId);
      dispatch(success(apt));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getAllTopicsAdminThunk(accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getAllTopicsAdminAsync;
    dispatch(request());
    try {
      const topicsAdmin = await getAllTopicsAdminT(accessToken);
      dispatch(success(topicsAdmin));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function getAllTagsAdminThunk(accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getAllTagsAdminAsync;
    dispatch(request());
    try {
      const adminTags = await getAllTagsAdminT(accessToken);
      dispatch(success(adminTags));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function refreshTokenThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getAccessTokenAsync;
    dispatch(request());
    try {
      const accessToken = await refreshTokenT();
      dispatch(success(accessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function patchEditTopicAdminThunk(
  topicId: number,
  word: string,
  accessToken: string
) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = patchEditTopicAdminAsync;
    dispatch(request());
    try {
      const params = { topicId, word };
      const adminTags = await patchEditTopicT(params, accessToken);
      dispatch(success(adminTags));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getFakeDataThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getFakeDataAsync;
    dispatch(request());
    try {
      const rank = await getRankT();
      // dispatch(success());
    } catch (e) {
      // dispatch(failure());
    }
  };
}
