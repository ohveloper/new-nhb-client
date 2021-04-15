import { ActionType } from 'typesafe-actions';
import * as actions from './actionTypes';
import * as poemActions from './poemActions';

//? 모든 액션객체의 타입
export type Actions = ActionType<typeof actions>;
export type PoemActions = ActionType<typeof poemActions>;
