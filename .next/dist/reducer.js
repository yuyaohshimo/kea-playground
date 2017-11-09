'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exampleInitialState = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = exports.exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.actionTypes.FAILURE:
      return (0, _extends3.default)({}, state, { error: action.error });

    case _actions.actionTypes.INCREMENT:
      return (0, _extends3.default)({}, state, { count: state.count + 1 });

    case _actions.actionTypes.LOAD_DATA_SUCCESS:
      return (0, _extends3.default)({}, state, { placeholderData: action.data });

    case _actions.actionTypes.TICK_CLOCK:
      return (0, _extends3.default)({}, state, { lastUpdate: action.ts, light: !!action.light });

    default:
      return state;
  }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwiY291bnQiLCJlcnJvciIsImxhc3RVcGRhdGUiLCJsaWdodCIsInBsYWNlaG9sZGVyRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJGQUlMVVJFIiwiSU5DUkVNRU5UIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJkYXRhIiwiVElDS19DTE9DSyIsInRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVEsQUFBa0IsQUFFMUI7Ozs7QUFBTyxJQUFNO1NBQXNCLEFBQzFCLEFBQ1A7U0FGaUMsQUFFMUIsQUFDUDtjQUhpQyxBQUdyQixBQUNaO1NBSmlDLEFBSTFCLEFBQ1A7bUJBTEssQUFBNEIsQUFLaEI7QUFMZ0IsQUFDakM7O0FBT0YsU0FBQSxBQUFTLFVBQThDO01BQXJDLEFBQXFDLDRFQUE3QixBQUE2QjtNQUFSLEFBQVEsbUJBQ3JEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUsscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLE9BQ0EsRUFBQyxPQUFPLE9BRmIsQUFFSyxBQUFlLEFBR3RCOztTQUFLLHFCQUFMLEFBQWlCLEFBQ2Y7d0NBQUEsQUFDSyxPQUNBLEVBQUMsT0FBTyxNQUFBLEFBQU0sUUFGbkIsQUFFSyxBQUFzQixBQUc3Qjs7U0FBSyxxQkFBTCxBQUFpQixBQUNmO3dDQUFBLEFBQ0ssT0FDQSxFQUFDLGlCQUFpQixPQUZ2QixBQUVLLEFBQXlCLEFBR2hDOztTQUFLLHFCQUFMLEFBQWlCLEFBQ2Y7d0NBQUEsQUFDSyxPQUNBLEVBQUMsWUFBWSxPQUFiLEFBQW9CLElBQUksT0FBTyxDQUFDLENBQUMsT0FGdEMsQUFFSyxBQUF3QyxBQUcvQzs7QUFDRTthQTFCSixBQTBCSSxBQUFPLEFBRVo7O0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveXV5YW9oc2hpbW8vRG9jdW1lbnRzL2dpdGh1Yi95dXlhb2hzaGltby9rZWEtcGxheWdyb3VuZCJ9