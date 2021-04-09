import { ActionType } from 'typesafe-actions';
import * as actions from './getInfoActions';

export type Actions = ActionType<typeof actions>;
