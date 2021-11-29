import { AppState, Actions } from '../types';
import { ActionTypes } from './actionTypes';
import initialState from './initialState';

export default function reducer(
  state: AppState = initialState,
  // ТODO: action: Actions (got type error)
  action: any
) {
  switch (action.type) {
    case ActionTypes.ROUND_ADD:
      return {
        ...state,
        tableData: state.tableData.splice(action.payload.id, 1),
      };
    case ActionTypes.ROUND_DELETE:
      return {
        ...state,
        tableData: state.tableData
          .filter((item, index) => action.payload.id !== index)
          .map((item, index) => ({ ...item, round: index + 1 })),
      };
    case ActionTypes.ROUND_CHANGE:
      return {
        ...state,
        tableData: state.tableData.map((item, index) => {
          if (index === action.payload.round - 1) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
