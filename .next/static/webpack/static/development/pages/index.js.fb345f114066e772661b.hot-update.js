webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\components\\ChannelGrid.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var ChannelGrid = function ChannelGrid(props) {
  var channels = props.channels;
  return __jsx("div", {
    className: "jsx-1686908271" + " " + 'channels',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, channels.map(function (channel, i) {
    return __jsx(Link, {
      href: "/channel?id=".concat(channel.id),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "jsx-1686908271" + " " + 'channel',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: channel.urls.logo_image.original,
      alt: "",
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }), __jsx("h2", {
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, channel.title)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1686908271",
    __self: _this
  }, ".channels.jsx-1686908271{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;padding:15px;}.channel.jsx-1686908271{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-1686908271 img.jsx-1686908271{width:100%;}h2.jsx-1686908271{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXGNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUd3QixBQU1DLEFBTUgsQUFHQyxXQUZkLENBR2tCLENBZjJDLENBTXpDLGNBVUYsSUFUMkIsWUFVbEMsU0FDUyxpQkFqQkosQ0FrQmhCLENBWHNCLFlBTlAsUUFPZixLQU5BIiwiZmlsZSI6IkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXGNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2hhbm5lbEdyaWQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjaGFubmVscyA9IHByb3BzLmNoYW5uZWxzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NoYW5uZWxzJz5cclxuICAgICAge2NoYW5uZWxzLm1hcCgoY2hhbm5lbCwgaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NoYW5uZWwuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5uZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsR3JpZDtcclxuIl19 */\n/*@ sourceURL=B:\\\\Imagenes\\\\FrontEnd\\\\Proyectos\\\\podcasts\\\\components\\\\ChannelGrid.js */"));
};

_c = ChannelGrid;
/* harmony default export */ __webpack_exports__["default"] = (ChannelGrid);

var _c;

$RefreshReg$(_c, "ChannelGrid");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");







var _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Next.js usa import dinámico. Cuando se llama React lo importa automáticamente sin tener import explícito
 // importando fetch para todas las pages





var _default = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "App de Podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {
        channels: channels,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    // getInitialProps() es una función que solo se puede ejecutar en Next.js
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, _yield$req$json, channels;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                _yield$req$json = _context.sent;
                channels = _yield$req$json.body;
                return _context.abrupt("return", {
                  channels: channels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYW5uZWxHcmlkIiwicHJvcHMiLCJjaGFubmVscyIsIm1hcCIsImNoYW5uZWwiLCJpIiwiaWQiLCJ1cmxzIiwibG9nb19pbWFnZSIsIm9yaWdpbmFsIiwidGl0bGUiLCJmZXRjaCIsInJlcSIsImpzb24iLCJib2R5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNDLFFBQXZCO0FBRUEsU0FDRTtBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUNaLE1BQUMsSUFBRDtBQUFNLFVBQUksd0JBQWlCRCxPQUFPLENBQUNFLEVBQXpCLENBQVY7QUFBeUMsU0FBRyxFQUFFRCxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBYSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUQsT0FBTyxDQUFDRyxJQUFSLENBQWFDLFVBQWIsQ0FBd0JDLFFBQWxDO0FBQTRDLFNBQUcsRUFBQyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTCxPQUFPLENBQUNNLEtBQWIsQ0FGRixDQURGLENBRFk7QUFBQSxHQUFiLENBREg7QUFBQTtBQUFBO0FBQUEscS9FQURGO0FBcUNELENBeENEOztLQUFNVixXO0FBeUNTQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtDQUMyQjs7QUFDM0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkJBZ0JXO0FBQUEsVUFDQ0UsUUFERCxHQUNjLEtBQUtELEtBRG5CLENBQ0NDLFFBREQ7QUFHUCxhQUNFLE1BQUMsMkRBQUQ7QUFBUSxhQUFLLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0VBQUQ7QUFBYSxnQkFBUSxFQUFFQSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQUtEOzs7QUFyQkQ7Ozs7Ozs7Ozs7dUJBSWtCUyxLQUFLLENBQUMsZ0RBQUQsQzs7O0FBQWpCQyxtQjs7dUJBRzJCQSxHQUFHLENBQUNDLElBQUosRTs7OztBQUFuQlgsd0IsbUJBQU5ZLEk7aURBR0M7QUFBRVosMEJBQVEsRUFBUkE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVhrQmEsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmIzNDVmMTE0MDY2ZTc3MjY2MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENoYW5uZWxHcmlkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2hhbm5lbHMgPSBwcm9wcy5jaGFubmVscztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XHJcbiAgICAgIHtjaGFubmVscy5tYXAoKGNoYW5uZWwsIGkpID0+IChcclxuICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtjaGFubmVsLmlkfWB9IGtleT17aX0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5uZWwnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICA8aDI+e2NoYW5uZWwudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbEdyaWQ7XHJcbiIsIi8vIE5leHQuanMgdXNhIGltcG9ydCBkaW7DoW1pY28uIEN1YW5kbyBzZSBsbGFtYSBSZWFjdCBsbyBpbXBvcnRhIGF1dG9tw6F0aWNhbWVudGUgc2luIHRlbmVyIGltcG9ydCBleHBsw61jaXRvXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7IC8vIGltcG9ydGFuZG8gZmV0Y2ggcGFyYSB0b2RhcyBsYXMgcGFnZXNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDaGFubmVsR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBnZXRJbml0aWFsUHJvcHMoKSBlcyB1bmEgZnVuY2nDs24gcXVlIHNvbG8gc2UgcHVlZGUgZWplY3V0YXIgZW4gTmV4dC5qc1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgLy8gTGxhbW8gYWwgQVBJIGRlIGF1ZGlvYm9vbSB5IG9idGVuZ28gbGEgbG9zIGNhbmVsZXMgcmVjb21lbmRhZG9zXHJcbiAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKTtcclxuXHJcbiAgICAvLyAgb2J0ZW5nbyB0b2RvIGxvIHF1ZSBjb250aWVuZSBcImJvZHlcIjogW10geSBsbyBhc2lnbm8gYSB1bmEgdmFyaWFibGUgbGxhbWFkYSBjaGFubmVsc1xyXG4gICAgbGV0IHsgYm9keTogY2hhbm5lbHMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgLy8gUmVncmVzbyB0b2RvcyBsb3MgY2hhbm5lbHNcclxuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9J0FwcCBkZSBQb2RjYXN0cyc+XHJcbiAgICAgICAgPENoYW5uZWxHcmlkIGNoYW5uZWxzPXtjaGFubmVsc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9