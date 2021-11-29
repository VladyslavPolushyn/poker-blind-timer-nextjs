import { TableData } from '../types';
import { ActionTypes } from './actionTypes';

export const addRound = (round: number) => ({
  type: ActionTypes.ROUND_ADD,
  payload: round,
});

export const deleteRound = (id: number) => ({
  type: ActionTypes.ROUND_DELETE,
  payload: { id },
});

export const changeRound = ({ round, bb, ante, roundTime, sb }: TableData) => ({
  type: ActionTypes.ROUND_CHANGE,
  payload: { round, bb, ante, roundTime, sb },
});
