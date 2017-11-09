'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _store = require('../store');

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yuyaohshimo/Documents/github/yuyaohshimo/kea-playground/pages/index.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _actions.startClock)());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_page2.default, { title: 'Index Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store.dispatch((0, _actions.increment)());
                if (!store.getState().placeholderData) {
                  store.dispatch((0, _actions.loadData)());
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Counter;
}(_react2.default.Component);

exports.default = (0, _store.withReduxSaga)(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5jcmVtZW50IiwibG9hZERhdGEiLCJzdGFydENsb2NrIiwid2l0aFJlZHV4U2FnYSIsIlBhZ2UiLCJDb3VudGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInN0b3JlIiwiZ2V0U3RhdGUiLCJwbGFjZWhvbGRlckRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUSxBQUFXLEFBQVUsQUFBaUI7O0FBQzlDLEFBQVEsQUFBb0I7O0FBQzVCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7d0NBUWlCLEFBQ25CO1dBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjs7Ozs2QkFFUyxBQUNSOzZCQUFPLEFBQUMsZ0NBQUssT0FBTixBQUFZLGNBQWEsUUFBekIsQUFBZ0M7b0JBQWhDO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7OztZLEFBWnNCLGFBQUEsQTs7OzttQkFDN0I7c0JBQUEsQUFBTSxTQUFOLEFBQWUsQUFDZjtvQkFBSSxDQUFDLE1BQUEsQUFBTSxXQUFYLEFBQXNCLGlCQUFpQixBQUNyQzt3QkFBQSxBQUFNLFNBQU4sQUFBZSxBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFMaUIsZ0JBQU0sQSxBQWlCNUI7O2tCQUFlLDBCQUFmLEFBQWUsQUFBYyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveXV5YW9oc2hpbW8vRG9jdW1lbnRzL2dpdGh1Yi95dXlhb2hzaGltby9rZWEtcGxheWdyb3VuZCJ9