'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failure = failure;
exports.increment = increment;
exports.loadData = loadData;
exports.loadDataSuccess = loadDataSuccess;
exports.startClock = startClock;
exports.tickClock = tickClock;
var actionTypes = exports.actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
};

function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error: error
  };
}

function increment() {
  return { type: actionTypes.INCREMENT };
}

function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}

function startClock() {
  return { type: actionTypes.START_CLOCK };
}

function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJGQUlMVVJFIiwiSU5DUkVNRU5UIiwiTE9BRF9EQVRBIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJTVEFSVF9DTE9DSyIsIlRJQ0tfQ0xPQ0siLCJmYWlsdXJlIiwiZXJyb3IiLCJ0eXBlIiwiaW5jcmVtZW50IiwibG9hZERhdGEiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJkYXRhIiwic3RhcnRDbG9jayIsInRpY2tDbG9jayIsImlzU2VydmVyIiwibGlnaHQiLCJ0cyIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7O1FBU08sQUFBUztRQU9ULEFBQVM7UUFJVCxBQUFTO1FBSVQsQUFBUztRQU9ULEFBQVM7UUFJVCxBQUFTO0FBbkNULElBQU07V0FBYyxBQUNoQixBQUNUO2FBRnlCLEFBRWQsQUFDWDthQUh5QixBQUdkLEFBQ1g7cUJBSnlCLEFBSU4sQUFDbkI7ZUFMeUIsQUFLWixBQUNiO2NBTkssQUFBb0IsQUFNYixBQUdkO0FBVDJCLEFBQ3pCOztBQVFLLGlCQUFBLEFBQWtCLE9BQU8sQUFDOUI7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO1dBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUtKOztBQUFPLHFCQUFzQixBQUMzQjtTQUFPLEVBQUMsTUFBTSxZQUFkLEFBQU8sQUFBbUIsQUFDM0I7QUFFRDs7QUFBTyxvQkFBcUIsQUFDMUI7U0FBTyxFQUFDLE1BQU0sWUFBZCxBQUFPLEFBQW1CLEFBQzNCO0FBRUQ7O0FBQU8seUJBQUEsQUFBMEIsTUFBTSxBQUNyQzs7VUFDUSxZQURELEFBQ2EsQUFDbEI7VUFGRixBQUFPLEFBSVI7QUFKUSxBQUNMO0FBS0o7O0FBQU8sc0JBQXVCLEFBQzVCO1NBQU8sRUFBQyxNQUFNLFlBQWQsQUFBTyxBQUFtQixBQUMzQjtBQUVEOztBQUFPLG1CQUFBLEFBQW9CLFVBQVUsQUFDbkM7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO1dBQU8sQ0FGRixBQUVHLEFBQ1I7UUFBSSxLQUhOLEFBQU8sQUFHRCxBQUFLLEFBRVo7QUFMUSxBQUNMIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3l1eWFvaHNoaW1vL0RvY3VtZW50cy9naXRodWIveXV5YW9oc2hpbW8va2VhLXBsYXlncm91bmQifQ==