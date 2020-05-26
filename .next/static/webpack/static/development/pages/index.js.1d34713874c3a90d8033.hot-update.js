webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

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
      var _this = this;

      var channels = this.props.channels;
      return __jsx("div", {
        className: "jsx-4212714800",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Podcasts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4212714800" + " " + 'channels',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, channels.map(function (channel, i) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/channel?id=".concat(channel.id),
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-4212714800" + " " + 'channel',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }
        }, __jsx("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          className: "jsx-4212714800",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }
        }), __jsx("h2", {
          className: "jsx-4212714800",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }, channel.title)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4212714800",
        __self: this
      }, ".channels.jsx-4212714800{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;padding:15px;}.channel.jsx-4212714800{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-4212714800 img.jsx-4212714800{width:100%;}h2.jsx-4212714800{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBRzBCLEFBTUMsQUFNSCxBQUdDLFdBRmQsQ0FHa0IsQ0FmMkMsQ0FNekMsY0FVRixJQVQyQixZQVVsQyxTQUNTLGlCQWpCSixDQWtCaEIsQ0FYc0IsWUFOUCxRQU9mLEtBTkEiLCJmaWxlIjoiQjpcXEltYWdlbmVzXFxGcm9udEVuZFxcUHJveWVjdG9zXFxwb2RjYXN0c1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyB1c2EgaW1wb3J0IGRpbsOhbWljby4gQ3VhbmRvIHNlIGxsYW1hIFJlYWN0IGxvIGltcG9ydGEgYXV0b23DoXRpY2FtZW50ZSBzaW4gdGVuZXIgaW1wb3J0IGV4cGzDrWNpdG9cclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJzsgLy8gaW1wb3J0YW5kbyBmZXRjaCBwYXJhIHRvZGFzIGxhcyBwYWdlc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBnZXRJbml0aWFsUHJvcHMoKSBlcyB1bmEgZnVuY2nDs24gcXVlIHNvbG8gc2UgcHVlZGUgZWplY3V0YXIgZW4gTmV4dC5qc1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgLy8gTGxhbW8gYWwgQVBJIGRlIGF1ZGlvYm9vbSB5IG9idGVuZ28gbGEgbG9zIGNhbmVsZXMgcmVjb21lbmRhZG9zXHJcbiAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKTtcclxuXHJcbiAgICAvLyAgb2J0ZW5nbyB0b2RvIGxvIHF1ZSBjb250aWVuZSBcImJvZHlcIjogW10geSBsbyBhc2lnbm8gYSB1bmEgdmFyaWFibGUgbGxhbWFkYSBjaGFubmVsc1xyXG4gICAgbGV0IHsgYm9keTogY2hhbm5lbHMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgLy8gUmVncmVzbyB0b2RvcyBsb3MgY2hhbm5lbHNcclxuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExheW91dCB0aXRsZT0nUG9kY2FzdHMnIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XHJcbiAgICAgICAgICB7Y2hhbm5lbHMubWFwKChjaGFubmVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NoYW5uZWwuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5uZWwnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=B:\\\\Imagenes\\\\FrontEnd\\\\Proyectos\\\\podcasts\\\\pages\\\\index.js */"));
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
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjaGFubmVscyIsInByb3BzIiwibWFwIiwiY2hhbm5lbCIsImkiLCJpZCIsInVybHMiLCJsb2dvX2ltYWdlIiwib3JpZ2luYWwiLCJ0aXRsZSIsImZldGNoIiwicmVxIiwianNvbiIsImJvZHkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDMkI7O0FBQzNCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs2QkFnQlc7QUFBQTs7QUFBQSxVQUNDQSxRQURELEdBQ2MsS0FBS0MsS0FEbkIsQ0FDQ0QsUUFERDtBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyREFBRDtBQUFRLGFBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUdFO0FBQUEsNENBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLGVBQ1osTUFBQyxpREFBRDtBQUFNLGNBQUksd0JBQWlCRCxPQUFPLENBQUNFLEVBQXpCLENBQVY7QUFBeUMsYUFBRyxFQUFFRCxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQSw4Q0FBYSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRUQsT0FBTyxDQUFDRyxJQUFSLENBQWFDLFVBQWIsQ0FBd0JDLFFBQWxDO0FBQTRDLGFBQUcsRUFBQyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLTCxPQUFPLENBQUNNLEtBQWIsQ0FGRixDQURGLENBRFk7QUFBQSxPQUFiLENBREgsQ0FIRjtBQUFBO0FBQUE7QUFBQSxrc0hBREY7QUF5Q0Q7OztBQXpERDs7Ozs7Ozs7Ozt1QkFJa0JDLEtBQUssQ0FBQyxnREFBRCxDOzs7QUFBakJDLG1COzt1QkFHMkJBLEdBQUcsQ0FBQ0MsSUFBSixFOzs7O0FBQW5CWix3QixtQkFBTmEsSTtpREFHQztBQUFFYiwwQkFBUSxFQUFSQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWGtCYyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xZDM0NzEzODc0YzNhOTBkODAzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyB1c2EgaW1wb3J0IGRpbsOhbWljby4gQ3VhbmRvIHNlIGxsYW1hIFJlYWN0IGxvIGltcG9ydGEgYXV0b23DoXRpY2FtZW50ZSBzaW4gdGVuZXIgaW1wb3J0IGV4cGzDrWNpdG9cclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJzsgLy8gaW1wb3J0YW5kbyBmZXRjaCBwYXJhIHRvZGFzIGxhcyBwYWdlc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBnZXRJbml0aWFsUHJvcHMoKSBlcyB1bmEgZnVuY2nDs24gcXVlIHNvbG8gc2UgcHVlZGUgZWplY3V0YXIgZW4gTmV4dC5qc1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgLy8gTGxhbW8gYWwgQVBJIGRlIGF1ZGlvYm9vbSB5IG9idGVuZ28gbGEgbG9zIGNhbmVsZXMgcmVjb21lbmRhZG9zXHJcbiAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKTtcclxuXHJcbiAgICAvLyAgb2J0ZW5nbyB0b2RvIGxvIHF1ZSBjb250aWVuZSBcImJvZHlcIjogW10geSBsbyBhc2lnbm8gYSB1bmEgdmFyaWFibGUgbGxhbWFkYSBjaGFubmVsc1xyXG4gICAgbGV0IHsgYm9keTogY2hhbm5lbHMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgLy8gUmVncmVzbyB0b2RvcyBsb3MgY2hhbm5lbHNcclxuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExheW91dCB0aXRsZT0nUG9kY2FzdHMnIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XHJcbiAgICAgICAgICB7Y2hhbm5lbHMubWFwKChjaGFubmVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NoYW5uZWwuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5uZWwnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==