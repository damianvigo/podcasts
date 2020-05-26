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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\components\\ChannelGrid.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ChannelGrid = function ChannelGrid(props) {
  var channels = props.channels;
  var series = props.series;
  return __jsx("div", {
    className: "jsx-1686908271" + " " + 'channels',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, channels.map(function (channel, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/channel?id=".concat(channel.id),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "jsx-1686908271" + " " + 'channel',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: channel.urls.logo_image.original,
      alt: "",
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }), __jsx("h2", {
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, channel.title)));
  }), __jsx("div", {
    className: "jsx-1686908271",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-1686908271",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Series"), __jsx("div", {
    className: "jsx-1686908271" + " " + 'channels',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, series.map(function (serie, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/channel?id=".concat(serie.id),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-1686908271" + " " + 'channel',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: serie.urls.logo_image.original,
      alt: "",
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("h2", {
      className: "jsx-1686908271",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, serie.title)));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1686908271",
    __self: _this
  }, ".channels.jsx-1686908271{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;padding:15px;}.channel.jsx-1686908271{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-1686908271 img.jsx-1686908271{width:100%;}h2.jsx-1686908271{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXGNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0IsQUFNQyxBQU1ILEFBR0MsV0FGZCxDQUdrQixDQWYyQyxDQU16QyxjQVVGLElBVDJCLFlBVWxDLFNBQ1MsaUJBakJKLENBa0JoQixDQVhzQixZQU5QLFFBT2YsS0FOQSIsImZpbGUiOiJCOlxcSW1hZ2VuZXNcXEZyb250RW5kXFxQcm95ZWN0b3NcXHBvZGNhc3RzXFxjb21wb25lbnRzXFxDaGFubmVsR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBDaGFubmVsR3JpZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNoYW5uZWxzID0gcHJvcHMuY2hhbm5lbHM7XHJcbiAgY29uc3Qgc2VyaWVzID0gcHJvcHMuc2VyaWVzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NoYW5uZWxzJz5cclxuICAgICAge2NoYW5uZWxzLm1hcCgoY2hhbm5lbCwgaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NoYW5uZWwuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5TZXJpZXM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XHJcbiAgICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7c2VyaWUuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5uZWwnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcmllLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3NlcmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5uZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsR3JpZDtcclxuIl19 */\n/*@ sourceURL=B:\\\\Imagenes\\\\FrontEnd\\\\Proyectos\\\\podcasts\\\\components\\\\ChannelGrid.js */"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbIkNoYW5uZWxHcmlkIiwicHJvcHMiLCJjaGFubmVscyIsInNlcmllcyIsIm1hcCIsImNoYW5uZWwiLCJpIiwiaWQiLCJ1cmxzIiwibG9nb19pbWFnZSIsIm9yaWdpbmFsIiwidGl0bGUiLCJzZXJpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNDLFFBQXZCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQXJCO0FBRUEsU0FDRTtBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUNaLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHdCQUFpQkQsT0FBTyxDQUFDRSxFQUF6QixDQUFWO0FBQXlDLFNBQUcsRUFBRUQsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVELE9BQU8sQ0FBQ0csSUFBUixDQUFhQyxVQUFiLENBQXdCQyxRQUFsQztBQUE0QyxTQUFHLEVBQUMsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0wsT0FBTyxDQUFDTSxLQUFiLENBRkYsQ0FERixDQURZO0FBQUEsR0FBYixDQURILEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFDUSxLQUFELEVBQVFOLENBQVI7QUFBQSxXQUNWLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHdCQUFpQk0sS0FBSyxDQUFDTCxFQUF2QixDQUFWO0FBQXVDLFNBQUcsRUFBRUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWEsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVNLEtBQUssQ0FBQ0osSUFBTixDQUFXQyxVQUFYLENBQXNCQyxRQUFoQztBQUEwQyxTQUFHLEVBQUMsRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0UsS0FBSyxDQUFDRCxLQUFYLENBRkYsQ0FERixDQURVO0FBQUEsR0FBWCxDQURILENBRkYsQ0FWRjtBQUFBO0FBQUE7QUFBQSw2cEdBREY7QUFtREQsQ0F2REQ7O0tBQU1YLFc7QUF3RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40OWMxZWI4YzM5ZWM4YTJlNzE1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENoYW5uZWxHcmlkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2hhbm5lbHMgPSBwcm9wcy5jaGFubmVscztcclxuICBjb25zdCBzZXJpZXMgPSBwcm9wcy5zZXJpZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhbm5lbHMnPlxyXG4gICAgICB7Y2hhbm5lbHMubWFwKChjaGFubmVsLCBpKSA9PiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7Y2hhbm5lbC5pZH1gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdjaGFubmVsJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgPGgyPntjaGFubmVsLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYW5uZWxzJz5cclxuICAgICAgICAgIHtzZXJpZXMubWFwKChzZXJpZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtzZXJpZS5pZH1gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57c2VyaWUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbm5lbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5uZWwgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxHcmlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9