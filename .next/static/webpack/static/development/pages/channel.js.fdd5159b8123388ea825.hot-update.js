webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");









var _jsxFileName = "B:\\Imagenes\\FrontEnd\\Proyectos\\podcasts\\pages\\channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Channel = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Channel, _React$Component);

  var _super = _createSuper(Channel);

  function Channel() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Channel);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Channel, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          channel = _this$props.channel,
          audioClips = _this$props.audioClips,
          series = _this$props.series;
      return __jsx("div", {
        className: "jsx-1104528860",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx("header", {
        className: "jsx-1104528860",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, "Podcasts"), __jsx("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        className: "jsx-1104528860" + " " + 'banner',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }), series.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-1104528860",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, channel.title), __jsx(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        channels: series,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      })), __jsx("h2", {
        className: "jsx-1104528860",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "Ultimos Podcasts"), audioClips.map(function (clip, i) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/podcast?id=".concat(clip.id),
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }
        }, __jsx("a", {
          className: "jsx-1104528860" + " " + 'podcast',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }
        }, __jsx("h3", {
          className: "jsx-1104528860",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }
        }, clip.title), __jsx("div", {
          className: "jsx-1104528860" + " " + 'meta',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2108833335",
        __self: this
      }, "header.jsx-1104528860{color:#fff;background:#8756ca;padding:15px;text-align:center;}.banner.jsx-1104528860{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.channels.jsx-1104528860{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:15px;padding:15px;}.channel.jsx-1104528860{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-1104528860 img.jsx-1104528860{width:100%;}h1.jsx-1104528860{font-weight:600;padding:15px;}h2.jsx-1104528860{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-1104528860{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-1104528860:hover{color:#000;}.podcast.jsx-1104528860 h3.jsx-1104528860{margin:0;}.podcast.jsx-1104528860 .meta.jsx-1104528860{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXHBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEb0IsQUFHd0IsQUFNQSxBQU9FLEFBTUMsQUFNSCxBQUdLLEFBSUosQUFPRSxBQVFILEFBR0YsQUFHRSxTQUZiLEVBbERxQixBQU1BLEFBbUJyQixBQXNCQSxBQU1tQixDQXJCRCxDQW5CMkMsQ0FNekMsQUFvQkcsRUFYUixZQUtHLEFBcUJBLENBekJsQixDQTVCZSxBQU1lLEVBYWUsV0FsQnpCLENBZ0NULEFBcUJYLFNBcEJvQixLQTNCSSxHQUx4QixHQXFDYSxNQTFCRyxDQXNCaEIsQ0Fmc0IsR0FvQlAsS0FoQ1MsSUFNVCxJQTJCOEIsSUFwQjdDLEtBTkEsS0FOQSwwQkFpQ2lCLGVBQ2pCIiwiZmlsZSI6IkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXHBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQnO1xyXG5cclxuY2xhc3MgQ2hhbm5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZDtcclxuXHJcbiAgICBsZXQgW3JlcUNoYW5uZWwsIHJlcVNlcmllcywgcmVxQXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCksXHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKSxcclxuICAgIF0pO1xyXG5cclxuICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpO1xyXG4gICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWw7XHJcblxyXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpO1xyXG4gICAgbGV0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHM7XHJcblxyXG4gICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpO1xyXG4gICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVscztcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9O1xyXG5cclxuICAgIHJldHVybiB7IC4uLnJlc3BvbnNlIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhbm5lcicgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG5cclxuICAgICAgICB7c2VyaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPENoYW5uZWxHcmlkIGNoYW5uZWxzPXtzZXJpZXN9IC8+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cclxuICAgICAgICB7YXVkaW9DbGlwcy5tYXAoKGNsaXAsIGkpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwb2RjYXN0Jz5cclxuICAgICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWV0YSc+e01hdGguY2VpbChjbGlwLmR1cmF0aW9uIC8gNjApfSBtaW51dGVzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2RjYXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2RjYXN0OmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdCBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWlcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbDtcclxuIl19 */\n/*@ sourceURL=B:\\\\Imagenes\\\\FrontEnd\\\\Proyectos\\\\podcasts\\\\pages\\\\channel.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3462082530",
        __self: this
      }, "body{margin:0;font-family:system-ui background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkI6XFxJbWFnZW5lc1xcRnJvbnRFbmRcXFByb3llY3Rvc1xccG9kY2FzdHNcXHBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIMkIsQUFHMEIsU0FFUSx1Q0FDckIiLCJmaWxlIjoiQjpcXEltYWdlbmVzXFxGcm9udEVuZFxcUHJveWVjdG9zXFxwb2RjYXN0c1xccGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ2hhbm5lbEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFubmVsR3JpZCc7XHJcblxyXG5jbGFzcyBDaGFubmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkO1xyXG5cclxuICAgIGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYCksXHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApLFxyXG4gICAgXSk7XHJcblxyXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKCk7XHJcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbDtcclxuXHJcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKCk7XHJcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcztcclxuXHJcbiAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKCk7XHJcbiAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzO1xyXG5cclxuICAgIGxldCByZXNwb25zZSA9IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzIH07XHJcblxyXG4gICAgcmV0dXJuIHsgLi4ucmVzcG9uc2UgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFubmVyJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XHJcblxyXG4gICAgICAgIHtzZXJpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8Q2hhbm5lbEdyaWQgY2hhbm5lbHM9e3Nlcmllc30gLz5cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdHM8L2gyPlxyXG4gICAgICAgIHthdWRpb0NsaXBzLm1hcCgoY2xpcCwgaSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3BvZGNhc3QnPlxyXG4gICAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXRhJz57TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoYW5uZWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoYW5uZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2RjYXN0IGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsO1xyXG4iXX0= */\n/*@ sourceURL=B:\\\\Imagenes\\\\FrontEnd\\\\Proyectos\\\\podcasts\\\\pages\\\\channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idChannel, _yield$Promise$all, _yield$Promise$all2, reqChannel, reqSeries, reqAudios, dataChannel, channel, dataAudios, audioClips, dataSeries, series, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idChannel = query.id;
                _context.next = 4;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_yield$Promise$all, 3);
                reqChannel = _yield$Promise$all2[0];
                reqSeries = _yield$Promise$all2[1];
                reqAudios = _yield$Promise$all2[2];
                _context.next = 11;
                return reqChannel.json();

              case 11:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 15;
                return reqAudios.json();

              case 15:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 19;
                return reqSeries.json();

              case 19:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                response = {
                  channel: channel,
                  audioClips: audioClips,
                  series: series
                };
                return _context.abrupt("return", _objectSpread({}, response));

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Channel;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Channel);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbIkNoYW5uZWwiLCJwcm9wcyIsImNoYW5uZWwiLCJhdWRpb0NsaXBzIiwic2VyaWVzIiwiYmFja2dyb3VuZEltYWdlIiwidXJscyIsImJhbm5lcl9pbWFnZSIsIm9yaWdpbmFsIiwibGVuZ3RoIiwidGl0bGUiLCJtYXAiLCJjbGlwIiwiaSIsImlkIiwiTWF0aCIsImNlaWwiLCJkdXJhdGlvbiIsInF1ZXJ5IiwiaWRDaGFubmVsIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwicmVxQ2hhbm5lbCIsInJlcVNlcmllcyIsInJlcUF1ZGlvcyIsImpzb24iLCJkYXRhQ2hhbm5lbCIsImJvZHkiLCJkYXRhQXVkaW9zIiwiYXVkaW9fY2xpcHMiLCJkYXRhU2VyaWVzIiwiY2hhbm5lbHMiLCJyZXNwb25zZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7NkJBd0JLO0FBQUE7O0FBQUEsd0JBQ2lDLEtBQUtDLEtBRHRDO0FBQUEsVUFDQ0MsT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUMsVUFEVixlQUNVQSxVQURWO0FBQUEsVUFDc0JDLE1BRHRCLGVBQ3NCQSxNQUR0QjtBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBR0U7QUFBd0IsYUFBSyxFQUFFO0FBQUVDLHlCQUFlLGdCQUFTSCxPQUFPLENBQUNJLElBQVIsQ0FBYUMsWUFBYixDQUEwQkMsUUFBbkM7QUFBakIsU0FBL0I7QUFBQSw0Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQUtHSixNQUFNLENBQUNLLE1BQVAsR0FBZ0IsQ0FBaEIsSUFDQyxNQUFDLDZDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtQLE9BQU8sQ0FBQ1EsS0FBYixDQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFhLGdCQUFRLEVBQUVOLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQU5KLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVpGLEVBYUdELFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGVBQ2QsTUFBQyxpREFBRDtBQUFNLGNBQUksd0JBQWlCRCxJQUFJLENBQUNFLEVBQXRCLENBQVY7QUFBc0MsYUFBRyxFQUFFRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQSw4Q0FBYSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0QsSUFBSSxDQUFDRixLQUFWLENBREYsRUFFRTtBQUFBLDhDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF1QkssSUFBSSxDQUFDQyxJQUFMLENBQVVKLElBQUksQ0FBQ0ssUUFBTCxHQUFnQixFQUExQixDQUF2QixhQUZGLENBREYsQ0FEYztBQUFBLE9BQWYsQ0FiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxOUtBREY7QUE0RkQ7Ozs7Ozs7Ozs7O0FBdEg4QkMscUIsUUFBQUEsSztBQUN6QkMseUIsR0FBWUQsS0FBSyxDQUFDSixFOzt1QkFFeUJNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ3pEQyxLQUFLLDhDQUF1Q0gsU0FBdkMsRUFEb0QsRUFFekRHLEtBQUssOENBQXVDSCxTQUF2QyxxQkFGb0QsRUFHekRHLEtBQUssOENBQXVDSCxTQUF2QyxrQkFIb0QsQ0FBWixDOzs7OztBQUExQ0ksMEI7QUFBWUMseUI7QUFBV0MseUI7O3VCQU1KRixVQUFVLENBQUNHLElBQVgsRTs7O0FBQXBCQywyQjtBQUNBekIsdUIsR0FBVXlCLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQjFCLE87O3VCQUVSdUIsU0FBUyxDQUFDQyxJQUFWLEU7OztBQUFuQkcsMEI7QUFDQTFCLDBCLEdBQWEwQixVQUFVLENBQUNELElBQVgsQ0FBZ0JFLFc7O3VCQUVWTixTQUFTLENBQUNFLElBQVYsRTs7O0FBQW5CSywwQjtBQUNBM0Isc0IsR0FBUzJCLFVBQVUsQ0FBQ0gsSUFBWCxDQUFnQkksUTtBQUV6QkMsd0IsR0FBVztBQUFFL0IseUJBQU8sRUFBUEEsT0FBRjtBQUFXQyw0QkFBVSxFQUFWQSxVQUFYO0FBQXVCQyx3QkFBTSxFQUFOQTtBQUF2QixpQjttRUFFSDZCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQk1DLDZDQUFLLENBQUNDLFM7O0FBMEhibkMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYW5uZWwuanMuZmRkNTE1OWI4MTIzMzg4ZWE4MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDaGFubmVsR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkJztcclxuXHJcbmNsYXNzIENoYW5uZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWQ7XHJcblxyXG4gICAgbGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCksXHJcbiAgICBdKTtcclxuXHJcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcclxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsO1xyXG5cclxuICAgIGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKTtcclxuICAgIGxldCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzO1xyXG5cclxuICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKTtcclxuICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHM7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfTtcclxuXHJcbiAgICByZXR1cm4geyAuLi5yZXNwb25zZSB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYW5uZXInIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cclxuXHJcbiAgICAgICAge3Nlcmllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxDaGFubmVsR3JpZCBjaGFubmVscz17c2VyaWVzfSAvPlxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgICAge2F1ZGlvQ2xpcHMubWFwKChjbGlwLCBpKSA9PiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtjbGlwLmlkfWB9IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncG9kY2FzdCc+XHJcbiAgICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPntNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKX0gbWludXRlczwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoYW5uZWwgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3QgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdCAubWV0YSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5uZWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=