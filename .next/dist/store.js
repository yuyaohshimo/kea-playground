'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducer.exampleInitialState;

  var store = (0, _redux.createStore)(_reducer2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(_saga2.default);
  return store;
}

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIndpdGhSZWR1eCIsIm5leHRSZWR1eFNhZ2EiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwiZXhhbXBsZUluaXRpYWxTdGF0ZSIsInJvb3RTYWdhIiwic2FnYU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJ3aXRoUmVkdXhTYWdhIiwiQmFzZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXTyxBQUFTO1FBV1QsQUFBUzs7QUF0QmhCLEFBQVEsQUFBYTs7QUFDckIsQUFBUTs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQWMsQUFBMEI7Ozs7QUFDL0MsQUFBTyxBQUFjOzs7Ozs7QUFFckIsSUFBTSxpQkFBTixBQUF1QixBQUV2Qjs7QUFBTywwQkFBNkQ7TUFBcEMsQUFBb0MsOEVBQXJCLEFBQXFCLEFBQ2xFOztNQUFNLFFBQVEsQUFDWiwyQ0FEWSxBQUVaLGNBQ0EsaURBQW9CLDRCQUh0QixBQUFjLEFBR1osQUFBb0IsQUFBZ0IsQUFHdEM7O1FBQUEsQUFBTSxXQUFXLGVBQWpCLEFBQWlCLEFBQWUsQUFBSSxBQUNwQztTQUFBLEFBQU8sQUFDUjtBQUVEOztBQUFPLHVCQUFBLEFBQXdCLGVBQWUsQUFDNUM7U0FBTyxnQ0FBQSxBQUFVLGdCQUFnQiw2QkFBakMsQUFBTyxBQUEwQixBQUFjLEFBQ2hEIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95dXlhb2hzaGltby9Eb2N1bWVudHMvZ2l0aHViL3l1eWFvaHNoaW1vL2tlYS1wbGF5Z3JvdW5kIn0=