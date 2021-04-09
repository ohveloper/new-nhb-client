import { ActionType } from 'typesafe-actions';
import * as actions from './getInfoActions';

export type Actions = ActionType<typeof actions>;

//? myPage 리듀서 값 타입---------------------------
export type Welcome = Readonly<{
  userInfo: UserInfo;
  privateFeeds: PrivateFeed[];
  rank: Rank[];
  comments: Comment[];
  userFeeds: UserFeed[];
}>;

export type Comment = Readonly<{
  user: CommentUser;
  comment: string;
  createdAt: string;
  updatedAt: string;
}>;

export type CommentUser = Readonly<{
  nickName: string;
}>;

export type PrivateFeed = Readonly<{
  feedId: number;
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}>;

export type PrivateFeedUser = Readonly<{
  nickName: string;
  tag: string;
}>;

export type Rank = Readonly<{
  userId: number;
  nickName: string;
  like: number;
  tag: string;
}>;

export type UserFeed = Readonly<{
  feedId: number;
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}>;

export type UserInfo = Readonly<{
  nickName: string;
  introduction: string;
  tags: { [key: string]: Hund };
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}>;

export type Tags = Readonly<{
  hund: Hund;
  pig: Hund;
  newbie: Hund;
}>;

export type Hund = Readonly<{
  description: string;
  isUsed: boolean;
}>;
