'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yuyaohshimo/Documents/github/yuyaohshimo/kea-playground/components/add-count.js';


var AddCount = function (_Component) {
  (0, _inherits3.default)(AddCount, _Component);

  function AddCount() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddCount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddCount.__proto__ || (0, _getPrototypeOf2.default)(AddCount)).call.apply(_ref, [this].concat(args))), _this), _this.add = function () {
      _this.props.dispatch((0, _actions.increment)());
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AddCount, [{
    key: 'render',
    value: function render() {
      var count = this.props.count;

      return _react2.default.createElement('div', {
        className: 'jsx-2435724200',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2435724200',
        css: 'div.jsx-2435724200{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWNvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNvQixBQUdnQyxtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9hZGQtY291bnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3l1eWFvaHNoaW1vL0RvY3VtZW50cy9naXRodWIveXV5YW9oc2hpbW8va2VhLXBsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtpbmNyZW1lbnR9IGZyb20gJy4uL2FjdGlvbnMnXG5cbmNsYXNzIEFkZENvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgYWRkID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaW5jcmVtZW50KCkpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjb3VudH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEFkZENvdW50OiA8c3Bhbj57Y291bnR9PC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkfT5BZGQgVG8gQ291bnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2NvdW50fSkgPT4gKHtjb3VudH0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWRkQ291bnQpXG4iXX0= */\n/*@ sourceURL=components/add-count.js */'
      }), _react2.default.createElement('h1', {
        className: 'jsx-2435724200',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'AddCount: ', _react2.default.createElement('span', {
        className: 'jsx-2435724200',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, count)), _react2.default.createElement('button', { onClick: this.add, className: 'jsx-2435724200',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Add To Count'));
    }
  }]);

  return AddCount;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.count;
  return { count: count };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(AddCount);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLWNvdW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImluY3JlbWVudCIsIkFkZENvdW50IiwiYWRkIiwicHJvcHMiLCJkaXNwYXRjaCIsImNvdW50IiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFROztBQUVSLEFBQVEsQUFBZ0I7Ozs7Ozs7SUFFbEIsQTs7Ozs7Ozs7Ozs7Ozs7Z05BQ0osQSxNQUFNLFlBQU0sQUFDVjtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsQUFDckI7QTs7Ozs7NkJBRVM7VUFBQSxBQUNELFFBQVMsS0FEUixBQUNhLE1BRGIsQUFDRCxBQUNQOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBTUU7QUFORiwwQkFNRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDWSw4QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQVBkLEFBTUUsQUFDWSxBQUVaLHlCQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCLGdCQUF0Qjs7b0JBQUE7c0JBQUE7QUFBQTtTQVZKLEFBQ0UsQUFTRSxBQUdMOzs7OztBLEFBcEJvQjs7QUF1QnZCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRSxjQUFGLEFBQUU7U0FBWSxFQUFDLE9BQWYsQUFBYztBQUF0QyxBQUNBO2tCQUFlLHlCQUFBLEFBQVEsaUJBQXZCLEFBQWUsQUFBeUIiLCJmaWxlIjoiYWRkLWNvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95dXlhb2hzaGltby9Eb2N1bWVudHMvZ2l0aHViL3l1eWFvaHNoaW1vL2tlYS1wbGF5Z3JvdW5kIn0=