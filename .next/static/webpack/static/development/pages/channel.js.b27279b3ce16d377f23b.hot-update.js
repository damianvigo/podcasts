webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./components/PodcastList.js":
/*!***********************************!*\
  !*** ./components/PodcastList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\components\\PodcastList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PodcastList = function PodcastList(props) {
  var audioClips = props.audioClips;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, audioClips.map(function (clip, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/podcast?id=".concat(clip.id),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "podcast",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, clip.title), __jsx("div", {
      className: "meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, Math.ceil(clip.duration / 60), " minutes")));
  }));
};

_c = PodcastList;
/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

var _c;

$RefreshReg$(_c, "PodcastList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvZGNhc3RMaXN0IiwicHJvcHMiLCJhdWRpb0NsaXBzIiwibWFwIiwiY2xpcCIsImkiLCJpZCIsInRpdGxlIiwiTWF0aCIsImNlaWwiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsTUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNDLFVBQXpCO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2QsTUFBQyxnREFBRDtBQUFNLFVBQUksd0JBQWlCRCxJQUFJLENBQUNFLEVBQXRCLENBQVY7QUFBc0MsU0FBRyxFQUFFRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxJQUFJLENBQUNHLEtBQVYsQ0FERixFQUVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1QkMsSUFBSSxDQUFDQyxJQUFMLENBQVVMLElBQUksQ0FBQ00sUUFBTCxHQUFnQixFQUExQixDQUF2QixhQUZGLENBREYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQURGO0FBWUQsQ0FmRDs7S0FBTVYsVztBQWlCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYW5uZWwuanMuYjI3Mjc5YjNjZTE2ZDM3N2YyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBQb2RjYXN0TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGF1ZGlvQ2xpcHMgPSBwcm9wcy5hdWRpb0NsaXBzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2F1ZGlvQ2xpcHMubWFwKChjbGlwLCBpKSA9PiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdwb2RjYXN0Jz5cclxuICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhJz57TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXM8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9