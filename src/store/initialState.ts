const getRoundInfo = (
  round: number,
  sb: number,
  bb: number,
  ante: number,
  roundTime: number
) => {
  return { round, sb, bb, ante, roundTime };
};

const initialState = {
  tableData: [
    getRoundInfo(1, 5, 10, 0, 12),
    // TODO: change round time to 12 after next round time test
    getRoundInfo(2, 10, 20, 0, 7),
    getRoundInfo(3, 20, 40, 0, 12),
    getRoundInfo(4, 25, 50, 0, 12),
    getRoundInfo(5, 50, 100, 0, 12),
    getRoundInfo(6, 75, 150, 0, 12),
    getRoundInfo(7, 100, 200, 0, 12),
    getRoundInfo(8, 150, 300, 0, 12),
    getRoundInfo(9, 200, 400, 0, 12),
    getRoundInfo(10, 300, 600, 0, 12),
  ],
  currentRound: 1,
};

export default initialState;
