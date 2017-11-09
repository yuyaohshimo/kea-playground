'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _addCount = require('./add-count');

var _addCount2 = _interopRequireDefault(_addCount);

var _clock = require('./clock');

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yuyaohshimo/Documents/github/yuyaohshimo/kea-playground/components/page.js';


function Page(_ref) {
  var error = _ref.error,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light,
      linkTo = _ref.linkTo,
      placeholderData = _ref.placeholderData,
      title = _ref.title;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, title), _react2.default.createElement(_clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_addCount2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Navigate'))), placeholderData && _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('code', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, (0, _stringify2.default)(placeholderData, null, 2))), error && _react2.default.createElement('p', { style: { color: 'red' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Error: ', error.message));
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Page);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkFkZENvdW50IiwiQ2xvY2siLCJQYWdlIiwiZXJyb3IiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJsaW5rVG8iLCJwbGFjZWhvbGRlckRhdGEiLCJ0aXRsZSIsImNvbG9yIiwibWVzc2FnZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUVSLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixTQUFBLEFBQVMsV0FBa0U7TUFBM0QsQUFBMkQsYUFBM0QsQUFBMkQ7TUFBcEQsQUFBb0Qsa0JBQXBELEFBQW9EO01BQXhDLEFBQXdDLGFBQXhDLEFBQXdDO01BQWpDLEFBQWlDLGNBQWpDLEFBQWlDO01BQXpCLEFBQXlCLHVCQUF6QixBQUF5QjtNQUFSLEFBQVEsYUFBUixBQUFRLEFBQ3pFOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEtBREYsQUFDRSxBQUdBLHdCQUFBLEFBQUMsaUNBQU0sWUFBUCxBQUFtQixZQUFZLE9BQS9CLEFBQXNDO2dCQUF0QztrQkFKRixBQUlFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFMRixBQUtFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FSTixBQU1FLEFBQ0UsQUFDRSxBQUdILGtEQUNDLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsOEJBQ0csQUFBZSxpQkFBZixBQUFnQyxNQWR6QyxBQVlJLEFBQ0UsQUFDRyxBQUFzQyxBQUc1QywrQkFDQyxjQUFBLE9BQUcsT0FBTyxFQUFDLE9BQVgsQUFBVSxBQUFRO2dCQUFsQjtrQkFBQTtBQUFBO0dBQUEsRUFDVSxpQkFwQmhCLEFBQ0UsQUFrQkksQUFDZ0IsQUFJdkI7QUFFRDs7MkNBQXVCLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBQWYsQUFBZSxBQUF3QiIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95dXlhb2hzaGltby9Eb2N1bWVudHMvZ2l0aHViL3l1eWFvaHNoaW1vL2tlYS1wbGF5Z3JvdW5kIn0=