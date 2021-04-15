import { ActionType } from 'typesafe-actions';
<<<<<<< HEAD
import * as actions from './actions';
=======
import * as actions from './actionTypes';
>>>>>>> 7444aa31d854804119c0f6e986acfc53be1a337e
import * as poemActions from './poemActions';

//? 모든 액션객체의 타입
export type Actions = ActionType<typeof actions>;
export type PoemActions = ActionType<typeof poemActions>;
