export interface TableData {
  round: number;
  sb: number;
  bb: number;
  ante: number;
  roundTime: number;
}

export interface AppState {
  tableData: TableData[];
}

export interface DeleteRoundAction {
  type: string;
  payload: {
    id: number;
  };
}

export interface ChangeRoundAction {
  type: string;
  payload: TableData;
}

export interface AddRoundAction {
  type: string;
  payload: TableData;
}

export interface ChangeCurrentRoundAction {
  type: string;
  payload: {
    round: number;
  };
}

export type Actions =
  | DeleteRoundAction
  | ChangeRoundAction
  | AddRoundAction
  | ChangeCurrentRoundAction;
