'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yuyaohshimo/Documents/github/yuyaohshimo/kea-playground/components/clock.js';


var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};

var format = function format(t) {
  var hours = t.getUTCHours();
  var minutes = t.getUTCMinutes();
  var seconds = t.getUTCSeconds();
  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};

function Clock(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    className: 'jsx-3283757383' + ' ' + ((light ? 'light' : '') || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: '3283757383',
    css: 'div.jsx-3283757383{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-3283757383{background-color:#999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3dCLEFBT1MsYUFORCxTQU92QixZQU5nQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9jbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveXV5YW9oc2hpbW8vRG9jdW1lbnRzL2dpdGh1Yi95dXlhb2hzaGltby9rZWEtcGxheWdyb3VuZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgcGFkID0gbiA9PiAobiA8IDEwID8gYDAke259YCA6IG4pXG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4ge1xuICBjb25zdCBob3VycyA9IHQuZ2V0VVRDSG91cnMoKVxuICBjb25zdCBtaW51dGVzID0gdC5nZXRVVENNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kcyA9IHQuZ2V0VVRDU2Vjb25kcygpXG4gIHJldHVybiBgJHtwYWQoaG91cnMpfToke3BhZChtaW51dGVzKX06JHtwYWQoc2Vjb25kcyl9YFxufVxuXG5mdW5jdGlvbiBDbG9jayAoe2xhc3RVcGRhdGUsIGxpZ2h0fSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcbiAgICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrXG4iXX0= */\n/*@ sourceURL=components/clock.js */'
  }));
}

exports.default = Clock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJwYWQiLCJuIiwiZm9ybWF0IiwiaG91cnMiLCJ0IiwiZ2V0VVRDSG91cnMiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsInNlY29uZHMiLCJnZXRVVENTZWNvbmRzIiwiQ2xvY2siLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxNQUFNLFNBQU4sQUFBTSxPQUFBO1NBQU0sSUFBQSxBQUFJLFdBQUosQUFBYSxJQUFuQixBQUF5QjtBQUFyQzs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFVBQUssQUFDbEI7TUFBTSxRQUFRLEVBQWQsQUFBYyxBQUFFLEFBQ2hCO01BQU0sVUFBVSxFQUFoQixBQUFnQixBQUFFLEFBQ2xCO01BQU0sVUFBVSxFQUFoQixBQUFnQixBQUFFLEFBQ2xCO1NBQVUsSUFBVixBQUFVLEFBQUksZUFBVSxJQUF4QixBQUF3QixBQUFJLGlCQUFZLElBQXhDLEFBQXdDLEFBQUksQUFDN0M7QUFMRDs7QUFPQSxTQUFBLEFBQVMsWUFBNEI7TUFBcEIsQUFBb0Isa0JBQXBCLEFBQW9CO01BQVIsQUFBUSxhQUFSLEFBQVEsQUFDbkM7O3lCQUNFLGNBQUE7MENBQWdCLFFBQUEsQUFBUSxVQUF4QixBQUFrQyxPQUFsQzs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxTQUNVLElBQUEsQUFBSSxLQURkLEFBQ0csQUFBTyxBQUFTO2FBRG5CO1NBREYsQUFDRSxBQWdCSDtBQWhCRztBQWtCSjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveXV5YW9oc2hpbW8vRG9jdW1lbnRzL2dpdGh1Yi95dXlhb2hzaGltby9rZWEtcGxheWdyb3VuZCJ9