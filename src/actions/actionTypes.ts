import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import {
  AllTags,
  PrivateFeeds,
  Rank,
  Topics,
  UserInfo,
} from '../reducers/reducer';
import { BringComment, Welcome } from '../reducers/reducer';
import { FeedLike } from '../api/postLikeFeed';
import { UploadFeed } from '../api/postUploadFeed';
import { SignUp } from '../api/postSignUp';
import { AccessToken } from '../api/postLogin';

//? =============================MAIN============================= //
//? send auth email
export const POST_SEND_AUTH_EMAIL_API = 'POST_SEND_AUTH_EMAIL' as const;
export const POST_SEND_AUTH_EMAIL_SUCCESS = 'POST_SEND_AUTH_EMAIL_SUCCESS' as const;
export const POST_SEND_AUTH_EMAIL_ERROR = 'POST_SEND_AUTH_EMAIL_ERROR' as const;

//? sign Up
export const POST_SIGN_UP_API = 'POST_SIGN_UP_API' as const;
export const POST_SIGN_UP_SUCCESS = 'POST_SIGN_UP_SUCCESS' as const;
export const POST_SIGN_UP_ERROR = 'POST_SIGN_UP_ERROR' as const;

//? login
export const POST_LOG_IN_API = 'POST_LOG_IN_API' as const;
export const POST_LOG_IN_SUCCESS = 'POST_LOG_IN_SUCCESS' as const;
export const POST_LOG_IN_ERROR = 'POST_LOG_IN_ERROR' as const;

//? refreshToken to issue accesstoken
export const GET_ISSUE_ACCESS_TOKEN_API = 'GET_ISSUE_ACCESS_TOKEN_API' as const;
export const GET_ISSUE_ACCESS_TOKEN_SUCCESS = 'GET_ISSUE_ACCESS_TOKEN_SUCCESS' as const;
export const GET_ISSUE_ACCESS_TOKEN_ERROR = 'GET_ISSUE_ACCESS_TOKEN_ERROR' as const;

//? OAuth 2.0
export const POST_OAUTH_API = 'GET_OAUTH_API' as const;
export const POST_OAUTH_SUCCESS = 'GET_OAUTH_SUCCESS' as const;
export const POST_OAUTH_ERROR = 'GET_OAUTH_ERROR' as const;

//? OAuth 2.0: refreshToken to issue accesstoken
export const GET_OAUTH_ISSUE_ACCESS_TOKEN_API = 'GET_OAUTH_ISSUE_ACCESS_TOKEN_API' as const;
export const GET_OAUTH_ISSUE_ACCESS_TOKEN_SUCCESS = 'GET_OAUTH_ISSUE_ACCESS_TOKEN_SUCCESS' as const;
export const GET_OAUTH_ISSUE_ACCESS_TOKEN_ERROR = 'GET_OAUTH_ISSUE_ACCESS_TOKEN_ERROR' as const;

//? logout
export const GET_LOG_OUT_API = 'GET_LOG_OUT_API' as const;
export const GET_LOG_OUT_SUCCESS = 'GET_LOG_OUT_SUCCESS' as const;
export const GET_LOG_OUT_ERROR = 'GET_LOG_OUT_ERROR' as const;

//? =============================USER============================= //
//? bring userinfo
export const POST_BRING_USER_INFO_API = 'POST_BRING_USER_INFO_API' as const;
export const POST_BRING_USER_INFO_SUCCESS = 'POST_BRING_USER_INFO_SUCCESS' as const;
export const POST_BRING_USER_INFO_ERROR = 'POST_BRING_USER_INFO_ERROR' as const;

//? edit userinfo
export const PATCH_EDIT_USER_INFO_API = 'PATCH_EDIT_USER_INFO_API' as const;
export const PATCH_EDIT_USER_INFO_SUCCESS = 'PATCH_EDIT_USER_INFO_SUCCESS' as const;
export const PATCH_EDIT_USER_INFO_ERROR = 'PATCH_EDIT_USER_INFO_ERROR' as const;

//? edit tag
export const PATCH_EDIT_TAG_API = 'PATCH_EDIT_TAG_API' as const;
export const PATCH_EDIT_TAG_SUCCESS = 'PATCH_EDIT_TAG_SUCCESS' as const;
export const PATCH_EDIT_TAG_API_ERROR = 'PATCH_EDIT_TAG_API_ERROR' as const;

//? user withdrawal
export const DELETE_USER_WITHDRAWAL_API = 'DELETE_USER_WITHDRAWAL_API' as const;
export const DELETE_USER_WITHDRAWAL_SUCCESS = 'DELETE_USER_WITHDRAWAL_SUCCESS' as const;
export const DELETE_USER_WITHDRAWAL_ERROR = 'DELETE_USER_WITHDRAWAL_ERROR' as const;

//? live ranking
// TODO: api만들기
export const GET_LIVE_RANKING_API = 'GET_LIVE_RANKING_API' as const;
export const GET_LIVE_RANKING_SUCCESS = 'GET_LIVE_RANKING_SUCCESS' as const;
export const GET_LIVE_RANKING_ERROR = 'GET_LIVE_RANKING_ERROR' as const;

//? get user like log
// TODO: api만들기
export const GET_USER_LIKE_LOG_API = 'GET_USER_LIKE_LOG_API' as const;
export const GET_USER_LIKE_LOG_SUCCESS = 'GET_USER_LIKE_LOG_SUCCESS' as const;
export const GET_USER_LIKE_LOG_ERROR = 'GET_USER_LIKE_LOG_ERROR' as const;

//? get user comment log
// TODO: api만들기
export const GET_USER_COMMENT_LOG_API = 'GET_USER_COMMENT_LOG_API' as const;
export const GET_USER_COMMENT_LOG_SUCCESS = 'GET_USER_COMMENT_LOG_SUCCESS' as const;
export const GET_USER_COMMENT_LOG_ERROR = 'GET_USER_COMMENT_LOG_ERROR' as const;

//? get user comment like log
// TODO: api만들기
export const GET_USER_COMMENT_LIKE_LOG_API = 'GET_USER_COMMENT_LIKE_LOG_API' as const;
export const GET_USER_COMMENT_LIKE_LOG_SUCCESS = 'GET_USER_COMMENT_LIKE_LOG_SUCCESS' as const;
export const GET_USER_COMMENT_LIKE_LOG_ERROR = 'GET_USER_COMMENT_LIKE_LOG_ERROR' as const;

//? get all tags
export const GET_ALL_TAGS_API = 'GET_ALL_TAGS_API' as const;
export const GET_ALL_TAGS_SUCCESS = 'GET_ALL_TAGS_SUCCESS' as const;
export const GET_ALL_TAGS_ERROR = 'GET_ALL_TAGS_ERROR' as const;
//? =============================FEED============================= //
//? upload feed
export const POST_UPLOAD_FEED_API = 'POST_UPLOAD_FEED_API' as const;
export const POST_UPLOAD_FEED_SUCCESS = 'POST_UPLOAD_FEED_SUCCESS' as const;
export const POST_UPLOAD_FEED_ERROR = 'POST_UPLOAD_FEED_ERROR' as const;

//? bring feeds
export const POST_BRING_FEEDS_API = 'POST_BRING_FEEDS_API' as const;
export const POST_BRING_FEEDS_SUCCESS = 'POST_BRING_FEEDS_SUCCESS' as const;
export const POST_BRING_FEEDS_ERROR = 'POST_BRING_FEEDS_ERROR' as const;

//? like feed
export const POST_LIKE_FEED_API = 'POST_LIKE_FEED_API' as const;
export const POST_LIKE_FEED_SUCCESS = 'POST_LIKE_FEED_SUCCESS' as const;
export const POST_LIKE_FEED_ERROR = 'POST_LIKE_FEED_ERROR' as const;

//? remove feed
export const DELETE_REMOVE_FEED_API = 'DELETE_REMOVE_FEED_API' as const;
export const DELETE_REMOVE_FEED_SUCCESS = 'DELETE_REMOVE_FEED_SUCCESS' as const;
export const DELETE_REMOVE_FEED_ERROR = 'DELETE_REMOVE_FEED_ERROR' as const;

//? edit feed
// TODO: api만들기
export const PATCH_EDIT_FEED_API = 'PATCH_EDIT_FEED_API' as const;
export const PATCH_EDIT_FEED_SUCCESS = 'PATCH_EDIT_FEED_SUCCESS' as const;
export const PATCH_EDIT_FEED_ERROR = 'PATCH_EDIT_FEED_ERROR' as const;

//? get ranking
export const GET_RANK_API = 'GET_RANK_API' as const;
export const GET_RANK_SUCCESS = 'GET_RANK_SUCCESS' as const;
export const GET_RANK_ERROR = 'GET_RANK_ERROR' as const;

//? bring comment
export const POST_BRING_COMMENT_API = 'POST_BRING_COMMENT_API' as const;
export const POST_BRING_COMMENT_SUCCESS = 'POST_BRING_COMMENT_SUCCESS' as const;
export const POST_BRING_COMMENT_ERROR = 'POST_BRING_COMMENT_ERROR' as const;

//? upload comment
export const POST_UPLOAD_COMMENT_API = 'POST_UPLOAD_COMMENT_API' as const;
export const POST_UPLOAD_COMMENT_SUCCESS = 'POST_UPLOAD_COMMENT_API' as const;
export const POST_UPLOAD_COMMENT_ERROR = 'POST_UPLOAD_COMMENT_API' as const;

//? like comment
export const POST_LIKE_COMMENT_API = 'POST_LIKE_COMMENT_API' as const;
export const POST_LIKE_COMMENT_SUCCESS = 'POST_LIKE_COMMENT_API' as const;
export const POST_LIKE_COMMENT_ERROR = 'POST_LIKE_COMMENT_API' as const;

//? remove comment
export const DELETE_REMOVE_COMMENTS_API = 'DELETE_REMOVE_COMMENTS_API' as const;
export const DELETE_REMOVE_COMMENTS_SUCCESS = 'DELETE_REMOVE_COMMENTS_SUCCESS' as const;
export const DELETE_REMOVE_COMMENTS_ERROR = 'DELETE_REMOVE_COMMENTS_ERROR' as const;

//? edit comment
export const PATCH_EDIT_COMMENTS_API = 'PATCH_EDIT_COMMENTS_API' as const;
export const PATCH_EDIT_COMMENTS_SUCCESS = 'PATCH_EDIT_COMMENTS_SUCCESS' as const;
export const PATCH_EDIT_COMMENTS_ERROR = 'PATCH_EDIT_COMMENTS_ERROR' as const;

//? get topics
export const GET_TOPICS_API = 'GET_TOPICS_API' as const;
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS' as const;
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR' as const;

//? post get privateFeeds
export const POST_GET_PRIVATEFEEDS_API = 'POST_GET_PRIVATEFEEDS_API' as const;
export const POST_GET_PRIVATEFEEDS_SUCCESS = 'POST_GET_PRIVATEFEEDS_SUCCESS' as const;
export const POST_GET_PRIVATEFEEDS_ERROR = 'POST_GET_PRIVATEFEEDS_ERROR' as const;

export const postGetPrivateFeedsAsync = createAsyncAction(
  POST_GET_PRIVATEFEEDS_API,
  POST_GET_PRIVATEFEEDS_SUCCESS,
  POST_GET_PRIVATEFEEDS_ERROR
)<undefined, PrivateFeeds, AxiosError>();

export const getTopicsAsync = createAsyncAction(
  GET_TOPICS_API,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR
)<undefined, Topics, AxiosError>();

export const getAllTagsAsync = createAsyncAction(
  GET_ALL_TAGS_API,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_ERROR
)<undefined, AllTags, AxiosError>();

export const postLogInAsync = createAsyncAction(
  POST_LOG_IN_API,
  POST_LOG_IN_SUCCESS,
  POST_LOG_IN_ERROR
)<undefined, AccessToken, AxiosError>();

export const postSignUpAsync = createAsyncAction(
  POST_SIGN_UP_API,
  POST_SIGN_UP_SUCCESS,
  POST_SIGN_UP_ERROR
)<undefined, SignUp, AxiosError>();

export const postBringCommentAsync = createAsyncAction(
  POST_BRING_COMMENT_API,
  POST_BRING_COMMENT_SUCCESS,
  POST_BRING_COMMENT_ERROR
)<undefined, BringComment, AxiosError>();

export const postBringFeedsAsync = createAsyncAction(
  POST_BRING_FEEDS_API,
  POST_BRING_FEEDS_SUCCESS,
  POST_BRING_FEEDS_ERROR
)<undefined, Welcome, AxiosError>();

export const postUploadFeedsAsync = createAsyncAction(
  POST_UPLOAD_FEED_API,
  POST_UPLOAD_FEED_SUCCESS,
  POST_UPLOAD_FEED_ERROR
)<undefined, UploadFeed, AxiosError>();

export const postBringUserInfoAsync = createAsyncAction(
  POST_BRING_USER_INFO_API,
  POST_BRING_USER_INFO_SUCCESS,
  POST_BRING_USER_INFO_ERROR
)<undefined, UserInfo, AxiosError>();

export const getRankAsync = createAsyncAction(
  GET_RANK_API,
  GET_RANK_SUCCESS,
  GET_RANK_ERROR
)<undefined, Rank, AxiosError>();

export const postLikeFeedAsync = createAsyncAction(
  POST_LIKE_FEED_API,
  POST_LIKE_FEED_SUCCESS,
  POST_LIKE_FEED_ERROR
)<undefined, FeedLike, AxiosError>();
