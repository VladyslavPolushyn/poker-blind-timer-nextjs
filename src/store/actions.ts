import { TableData } from '../types';
import { ActionTypes } from './actionTypes';

export const addRound = ({ round, sb, bb, ante, roundTime }: TableData) => ({
  type: ActionTypes.ROUND_ADD,
  payload: { round, sb, bb, ante, roundTime },
});

export const deleteRound = (id: number) => ({
  type: ActionTypes.ROUND_DELETE,
  payload: { id },
});

export const changeRound = ({ round, sb, bb, ante, roundTime }: TableData) => ({
  type: ActionTypes.ROUND_CHANGE,
  payload: { round, sb, bb, ante, roundTime },
});

export const changeCurrentRound = (round: number) => ({
  type: ActionTypes.CURRENT_ROUND,
  payload: { round },
});
