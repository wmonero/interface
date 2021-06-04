self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sale/index.js":
/*!**************************************!*\
  !*** ./src/components/Sale/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../countdown */ "./src/components/countdown.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/common-slice */ "./src/stores/common-slice.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_format_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/format-number */ "./src/libs/format-number.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/notify */ "./src/libs/notify.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _config_buylist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/buylist */ "./src/config/buylist.js");
/* harmony import */ var _config_receiveLists__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config/receiveLists */ "./src/config/receiveLists.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Select */ "./src/components/Select/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useContract */ "./src/hooks/useContract.js");
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/wmonero/src/components/Sale/index.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();
























var chainId = "97";

var ShowTokenInfo = function ShowTokenInfo(_ref) {
  _s();

  var onClick = _ref.onClick,
      data = _ref.data;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_20__.useClickAway)(ref, function () {
    onClick();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "fixed inset-0 w-full h-full bg-gray-900 z-40 flex items-center justify-center bg-opacity-80",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "container mx-auto px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          ref: ref,
          className: "w-full max-w-4xl rounded-2xl px-8 py-8 bg-gray-800 text-xl mx-auto text-white relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "absolute top-2 lg:top-4 right-2 lg:right-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "w-9 h-9 rounded-xl bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer",
              onClick: onClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_21__.AiFillCloseCircle, {
                className: "w-7 h-7 lg:w-8 lg:h-8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "text-3xl lg:text-5xl mb-4 text-center",
            children: [data.name, " pre-sale"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_countdown__WEBPACK_IMPORTED_MODULE_5__.default, {
              time: Number(data.info.time)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text-xl",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: ["Listing Pancakeswap", " ", moment__WEBPACK_IMPORTED_MODULE_7___default()(Number(data.info.time) || Date.now()).format("MMMM Do YYYY, h:mm"), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), data.info.buys.map(function (val, key) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: val
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: [" ", "The tokens will be automatically transferred to the participant's wallet immediately"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: ["Max Supply: ", data.supply]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: ["Name: ", data.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: ["Symbol: ", data.sym]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: ["Dec: ", data.dec]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  href: "https://bscscan.com/token/".concat(data.contractAddress[chainId]),
                  className: "flex items-center justify-center",
                  target: "_blank",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: "/bsc.png",
                    alt: "",
                    className: "w-8 h-8 rounded-full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "ml-2 mr-2",
                    children: "Contract address:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "truncate",
                    children: data.contractAddress[chainId]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(ShowTokenInfo, "jl0+F6DnX7d4HwUg2HffZLEIp0A=", false, function () {
  return [react_use__WEBPACK_IMPORTED_MODULE_20__.useClickAway];
});

_c = ShowTokenInfo;

var BuyTokenCom = function BuyTokenCom(_ref2) {
  _s2();

  var onApprove = _ref2.onApprove,
      onBuy = _ref2.onBuy;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      isApprove = _useState[0],
      setApprove = _useState[1];

  var appClassname = classnames__WEBPACK_IMPORTED_MODULE_15___default()({
    "bg-ripple": !isApprove,
    "bg-gray-700": isApprove
  });
  var buyClassname = classnames__WEBPACK_IMPORTED_MODULE_15___default()({
    "bg-gray-700": !isApprove,
    "bg-ripple": isApprove
  });

  var handleApprove = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!isApprove) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!onApprove) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return onApprove();

            case 5:
              setApprove(true);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleApprove() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleBuy = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isApprove) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (!onBuy) {
                _context2.next = 5;
                break;
              }

              _context2.next = 5;
              return onBuy();

            case 5:
              setApprove(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleBuy() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex items-center justify-between mb-4 relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "absolute h-px bg-gray-500 w-full top-1/2 left-0 z-10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "relative z-20 w-8 h-8 rounded-2xl flex items-center justify-center text-2xl ".concat(appClassname),
        children: "1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "relative z-20 w-8 h-8 rounded-2xl flex items-center justify-center text-2xl ".concat(buyClassname),
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex -mx-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-1/2 px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          text: "Approve",
          customClassName: "w-full py-4 text-2xl font-medium rounded-xl ".concat(appClassname),
          onClick: handleApprove
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-1/2 px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
          text: "Buy",
          customClassName: "w-full py-4 text-2xl font-medium rounded-xl ".concat(buyClassname),
          onClick: handleBuy
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, _this);
};

_s2(BuyTokenCom, "xTHKdjPk5ZqTStEjN81+r1k4Ly4=");

_c2 = BuyTokenCom;

var Sale = function Sale() {
  _s3();

  var web3 = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_17__.connect)();
  var chainId = "97";
  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_stores_common_slice__WEBPACK_IMPORTED_MODULE_6__.addressSelector);

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_18__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),
      buyVal = _useState2[0],
      setBuyVal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),
      receiveVal = _useState3[0],
      setReceiveVal = _useState3[1];

  var handleBuy = /*#__PURE__*/function () {
    var _ref5 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(buyVal < buyMethod.minBuy)) {
                _context3.next = 3;
                break;
              }

              (0,_libs_notify__WEBPACK_IMPORTED_MODULE_10__.errorNotify)("Min buy: ".concat((0,_libs_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(buyMethod.minBuy), " BNB"));
              return _context3.abrupt("return");

            case 3:
              _context3.next = 5;
              return web3.buySaleWithBnb(refer, buyVal, receiveMethod.contractAddress[chainId]);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleBuy() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleClaim = /*#__PURE__*/function () {
    var _ref6 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(address) {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return web3.claimAirdrop(refer, address);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleClaim(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref7 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return web3.connect();

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleConnect() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleBuyWithToken = /*#__PURE__*/function () {
    var _ref8 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(buyVal < buyMethod.minBuy)) {
                _context6.next = 3;
                break;
              }

              (0,_libs_notify__WEBPACK_IMPORTED_MODULE_10__.errorNotify)("Min buy: ".concat((0,_libs_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(buyMethod.minBuy), " ").concat(buyMethod.sym));
              return _context6.abrupt("return");

            case 3:
              _context6.next = 5;
              return web3.buySaleWithToken(refer, buyVal, buyMethod.contractAddress[chainId], receiveMethod.contractAddress[chainId]);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleBuyWithToken() {
      return _ref8.apply(this, arguments);
    };
  }();

  var handleApprove = /*#__PURE__*/function () {
    var _ref9 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7() {
      return _home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(buyVal < buyMethod.minBuy)) {
                _context7.next = 3;
                break;
              }

              (0,_libs_notify__WEBPACK_IMPORTED_MODULE_10__.errorNotify)("Min buy: ".concat((0,_libs_format_number__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(buyMethod.minBuy), " ").concat(buyMethod.sym));
              throw "Minbuy";

            case 3:
              _context7.next = 5;
              return web3.approve(buyMethod.contractAddress[chainId], buyVal);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleApprove() {
      return _ref9.apply(this, arguments);
    };
  }();

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(_config_receiveLists__WEBPACK_IMPORTED_MODULE_12__.default[0]),
      receiveMethod = _useState4[0],
      setReceiveMethod = _useState4[1];

  var buyListsFilter = _config_buylist__WEBPACK_IMPORTED_MODULE_11__.default.filter(function (val) {
    return val.buyId === receiveMethod.buyId;
  });

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(buyListsFilter[0]),
      buyMethod = _useState5[0],
      setBuyMethod = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showBuy = _useState6[0],
      setShowBuy = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showReceive = _useState7[0],
      setShowReceive = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showInfo = _useState8[0],
      setShowInfo = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    setBuyVal(buyMethod.minBuy);
  }, [buyMethod]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    var listFilter = _config_buylist__WEBPACK_IMPORTED_MODULE_11__.default.filter(function (val) {
      return val.buyId === receiveMethod.buyId;
    });
    console.log(listFilter);
    setBuyMethod(listFilter[0]);
    console.log("Change");
  }, [receiveMethod]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    setReceiveVal(buyVal * buyMethod.price);
  }, [buyVal]);

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_19__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_wmonero_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "container mx-auto px-4 lg:px-32 text-gray-100 mb-16",
    children: [showInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ShowTokenInfo, {
      data: receiveMethod,
      onClick: function onClick() {
        return setShowInfo(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex lg:-mx-8 flex-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full max-w-xl lg:px-8 text-xl mb-16 mx-auto",
        id: "airdrop",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "w-full rounded-3xl px-4 lg:px-8 py-12 bg-base relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "flex items-center justify-between mb-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text-5xl",
              children: "Pre-sale"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "flex items-center px-4 py-2 rounded-3xl bg-warmGray-800 cursor-pointer hover:bg-warmGray-700",
              onClick: function onClick() {
                return setShowInfo(true);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_22__.BiHelpCircle, {
                className: "w-6 h-6"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "ml-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/coins/".concat(receiveMethod.img, ".png"),
                  alt: "",
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "ml-2",
                children: "Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-8 relative",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "absolute top-1/2 left-1/2 z-10",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "w-8 h-8 bg-warm-900 rounded-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_23__.FaChevronCircleDown, {
                  className: "w-6 h-6 text-warmGray-500"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "mb-4 relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_13__.default, {
                data: buyListsFilter,
                isOpen: showBuy,
                onChange: function onChange(e) {
                  return setBuyMethod(e);
                },
                onClose: function onClose() {
                  return setShowBuy(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "w-full border rounded-2xl p-2 lg:p-4 border-warmGray-700 bg-warmGray-800 flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "flex items-center px-2 lg:px-4 py-1 lg:py-2 bg-warmGray-700 rounded-full hover:bg-warmGray-900 cursor-pointer",
                    onClick: function onClick() {
                      return setShowBuy(true);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: "/coins/".concat(buyMethod.img, ".png"),
                      className: "w-8 h-8 rounded-full"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "ml-2 font-medium",
                      children: buyMethod.sym
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_24__.IoIosArrowDown, {
                      className: "w-6 h-6 mt-1 ml-1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_14__.default, {
                    thousandSeparator: true,
                    className: "font-medium text-2xl lg:text-3xl w-full py-2 bg-transparent outline-none focus:outline-none text-right",
                    value: buyVal,
                    onValueChange: function onValueChange(values) {
                      return setBuyVal(values.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_13__.default, {
                data: _config_receiveLists__WEBPACK_IMPORTED_MODULE_12__.default,
                isOpen: showReceive,
                onChange: function onChange(e) {
                  return setReceiveMethod(e);
                },
                onClose: function onClose() {
                  return setShowReceive(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "w-full border rounded-2xl p-2 lg:p-4 border-warmGray-700 bg-warmGray-800 flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "flex items-center px-2 lg:px-4 py-1 lg:py-2 bg-warmGray-700 rounded-full hover:bg-warmGray-900 cursor-pointer",
                    onClick: function onClick() {
                      return setShowReceive(true);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: "/coins/".concat(receiveMethod.img, ".png"),
                      className: "w-8 h-8 rounded-full"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "ml-2 font-medium",
                      children: receiveMethod.sym
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_24__.IoIosArrowDown, {
                      className: "w-6 h-6 mt-1 ml-1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_number_format__WEBPACK_IMPORTED_MODULE_14__.default, {
                    thousandSeparator: true,
                    displayType: "text",
                    className: "font-medium text-2xl w-full py-2 bg-transparent outline-none focus:outline-none text-right inline-block text-gray-400",
                    value: receiveVal
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "",
            children: buyMethod.contractAddress ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(BuyTokenCom, {
              onApprove: handleApprove,
              onBuy: handleBuyWithToken
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 17
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
              text: "Buy",
              customClassName: "w-full py-4 text-2xl font-medium rounded-xl bg-ripple focus:outline-none",
              onClick: handleBuy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "absolute bottom-2 right-8 text-gray-300 underline hover:text-ripple cursor-pointer",
            onClick: handleConnect,
            children: "Get referral"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, _this), account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "bg-gray-800 w-full rounded-2xl px-4 pt-12 pb-4 -mt-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-2 font-medium",
            children: "Referral link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "flex items-center mb-4 cursor-pointer",
            onClick: function onClick() {
              return cp("".concat("https://wmonero.net", "?address=").concat(account));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "break-all inline-block text-gray-300",
              children: "".concat("https://wmonero.net", "?address=").concat(account)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_24__.IoIosCopy, {
                className: "w-6 h-6"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text-gray-300",
              children: "Get 50% of all claims & 50% when they buy!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "font-medium",
              children: "*** Bonus 10% of BNB or WBTC when they buy (Example: If they buy 1 BNB you will receive 0.1 BNB directly transfer)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 13
        }, _this), _config_receiveLists__WEBPACK_IMPORTED_MODULE_12__.default.map(function (val, key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "bg-gray-800 w-full pt-4 pb-4 px-4 rounded-2xl mt-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text-2xl fontm-medium",
              children: [val.name, " airdrop"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text-gray-200",
                children: [val.airdrop, " ", val.sym]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 394,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
                  text: "Claim",
                  customClassName: "px-4 py-2 rounded bg-ripple",
                  onClick: function onClick() {
                    return handleClaim(val.contractAddress[chainId]);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 397,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 17
            }, _this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 5
  }, _this);
};

_s3(Sale, "hzu8KIU6/meCrl/n1p5LyyL5JgE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, _hooks_useRefer__WEBPACK_IMPORTED_MODULE_18__.default, _hooks_useCopy__WEBPACK_IMPORTED_MODULE_19__.default];
});

_c3 = Sale;
/* harmony default export */ __webpack_exports__["default"] = (Sale);

var _c, _c2, _c3;

$RefreshReg$(_c, "ShowTokenInfo");
$RefreshReg$(_c2, "BuyTokenCom");
$RefreshReg$(_c3, "Sale");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2FsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjaGFpbklkIiwicHJvY2VzcyIsIlNob3dUb2tlbkluZm8iLCJvbkNsaWNrIiwiZGF0YSIsInJlZiIsInVzZVJlZiIsInVzZUNsaWNrQXdheSIsIm5hbWUiLCJOdW1iZXIiLCJpbmZvIiwidGltZSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJmb3JtYXQiLCJidXlzIiwibWFwIiwidmFsIiwia2V5Iiwic3VwcGx5Iiwic3ltIiwiZGVjIiwiY29udHJhY3RBZGRyZXNzIiwiQnV5VG9rZW5Db20iLCJvbkFwcHJvdmUiLCJvbkJ1eSIsInVzZVN0YXRlIiwiaXNBcHByb3ZlIiwic2V0QXBwcm92ZSIsImFwcENsYXNzbmFtZSIsImNsYXNzTmFtZXMiLCJidXlDbGFzc25hbWUiLCJoYW5kbGVBcHByb3ZlIiwiaGFuZGxlQnV5IiwiU2FsZSIsIndlYjMiLCJjb25uZWN0IiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWRkcmVzc1NlbGVjdG9yIiwidXNlUmVmZXIiLCJyZWZlciIsImJ1eVZhbCIsInNldEJ1eVZhbCIsInJlY2VpdmVWYWwiLCJzZXRSZWNlaXZlVmFsIiwiYnV5TWV0aG9kIiwibWluQnV5IiwiZXJyb3JOb3RpZnkiLCJmb3JtYXROdW1iZXIiLCJidXlTYWxlV2l0aEJuYiIsInJlY2VpdmVNZXRob2QiLCJoYW5kbGVDbGFpbSIsImFkZHJlc3MiLCJjbGFpbUFpcmRyb3AiLCJoYW5kbGVDb25uZWN0IiwiaGFuZGxlQnV5V2l0aFRva2VuIiwiYnV5U2FsZVdpdGhUb2tlbiIsImFwcHJvdmUiLCJyZWNlaXZlTGlzdHMiLCJzZXRSZWNlaXZlTWV0aG9kIiwiYnV5TGlzdHNGaWx0ZXIiLCJidXlMaXN0cyIsImJ1eUlkIiwic2V0QnV5TWV0aG9kIiwic2hvd0J1eSIsInNldFNob3dCdXkiLCJzaG93UmVjZWl2ZSIsInNldFNob3dSZWNlaXZlIiwic2hvd0luZm8iLCJzZXRTaG93SW5mbyIsInVzZUVmZmVjdCIsImxpc3RGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwicHJpY2UiLCJ1c2VDb3B5IiwiY3AiLCJpbWciLCJlIiwidmFsdWVzIiwidmFsdWUiLCJhaXJkcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsSUFBaEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0MsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUMsMERBQVksQ0FBQ0YsR0FBRCxFQUFNLFlBQU07QUFDdEJGLFdBQU87QUFDUixHQUZXLENBQVo7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2RkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSwrQkFDRTtBQUNFLGFBQUcsRUFBRUUsR0FEUDtBQUVFLG1CQUFTLEVBQUMsd0ZBRlo7QUFBQSxrQ0FJRTtBQUFLLHFCQUFTLEVBQUMsNENBQWY7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQUMsK0dBRFo7QUFFRSxxQkFBTyxFQUFFRixPQUZYO0FBQUEscUNBSUUsOERBQUMsOERBQUQ7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFZ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QUFBLDJCQUNHVSxHQUFHLENBQUNpRSxPQURQLE9BQ2lCakUsR0FBRyxDQUFDRyxHQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUMsRUFBZjtBQUFBLHVDQUNFLDhEQUFDLDZDQUFEO0FBQ0Usc0JBQUksRUFBQyxPQURQO0FBRUUsaUNBQWUsRUFBQyw2QkFGbEI7QUFHRSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1nQyxXQUFXLENBQUNuQyxHQUFHLENBQUNLLGVBQUosQ0FBb0J2QixPQUFwQixDQUFELENBQWpCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQSxhQUNPbUIsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBb0JELFNBckJBLENBbkpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNMRCxDQTdQRDs7SUFBTWdCLEk7VUFHWUksb0QsRUFDQUUscUQsRUFrRUhvQyxvRDs7O01BdEVUMUMsSTtBQStQTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMmI3Y2Y0YmIxNzUzMTc4ODU1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDb3VudCBmcm9tIFwiLi4vY291bnRkb3duXCI7XG5pbXBvcnQgeyBhZGRyZXNzU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vbGlicy9mb3JtYXQtbnVtYmVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBlcnJvck5vdGlmeSwgc3VjY2Vzc05vdGlmeSB9IGZyb20gXCIuLi8uLi9saWJzL25vdGlmeVwiO1xuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEZhQ2hldnJvbkNpcmNsZURvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBidXlMaXN0cyBmcm9tIFwiLi4vLi4vY29uZmlnL2J1eWxpc3RcIjtcbmltcG9ydCByZWNlaXZlTGlzdHMgZnJvbSBcIi4uLy4uL2NvbmZpZy9yZWNlaXZlTGlzdHNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL1NlbGVjdFwiO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VDb250cmFjdFwiO1xuaW1wb3J0IHVzZVJlZmVyIGZyb20gXCIuLi8uLi9ob29rcy91c2VSZWZlclwiO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IHsgQWlGaWxsSW5mb0NpcmNsZSwgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUNvcHkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvcHlcIjtcbmltcG9ydCB7IElvSW9zQ29weSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgQmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5jb25zdCBjaGFpbklkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQ7XG5jb25zdCBTaG93VG9rZW5JbmZvID0gKHsgb25DbGljaywgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlQ2xpY2tBd2F5KHJlZiwgKCkgPT4ge1xuICAgIG9uQ2xpY2soKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHctZnVsbCBoLWZ1bGwgYmctZ3JheS05MDAgei00MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1vcGFjaXR5LTgwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCByb3VuZGVkLTJ4bCBweC04IHB5LTggYmctZ3JheS04MDAgdGV4dC14bCBteC1hdXRvIHRleHQtd2hpdGUgcmVsYXRpdmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGc6dG9wLTQgcmlnaHQtMiBsZzpyaWdodC00XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTkgaC05IHJvdW5kZWQteGwgYmctZ3JheS03MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFpRmlsbENsb3NlQ2lyY2xlIGNsYXNzTmFtZT1cInctNyBoLTcgbGc6dy04IGxnOmgtOFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNXhsIG1iLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge2RhdGEubmFtZX0gcHJlLXNhbGVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgIDxDb3VudCB0aW1lPXtOdW1iZXIoZGF0YS5pbmZvLnRpbWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICBMaXN0aW5nIFBhbmNha2Vzd2Fwe1wiIFwifVxuICAgICAgICAgICAgICAgICAge21vbWVudChOdW1iZXIoZGF0YS5pbmZvLnRpbWUpIHx8IERhdGUubm93KCkpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgXCJNTU1NIERvIFlZWVksIGg6bW1cIlxuICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2RhdGEuaW5mby5idXlzLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgVGhlIHRva2VucyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmZXJyZWQgdG8gdGhlXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudCdzIHdhbGxldCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+TWF4IFN1cHBseToge2RhdGEuc3VwcGx5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+TmFtZToge2RhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlN5bWJvbDoge2RhdGEuc3ltfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+RGVjOiB7ZGF0YS5kZWN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2JzY3NjYW4uY29tL3Rva2VuLyR7ZGF0YS5jb250cmFjdEFkZHJlc3NbY2hhaW5JZF19YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2JzYy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgbXItMlwiPkNvbnRyYWN0IGFkZHJlc3M6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb250cmFjdEFkZHJlc3NbY2hhaW5JZF19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IEJ1eVRva2VuQ29tID0gKHsgb25BcHByb3ZlLCBvbkJ1eSB9KSA9PiB7XG4gIGNvbnN0IFtpc0FwcHJvdmUsIHNldEFwcHJvdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhcHBDbGFzc25hbWUgPSBjbGFzc05hbWVzKHtcbiAgICBcImJnLXJpcHBsZVwiOiAhaXNBcHByb3ZlLFxuICAgIFwiYmctZ3JheS03MDBcIjogaXNBcHByb3ZlLFxuICB9KTtcbiAgY29uc3QgYnV5Q2xhc3NuYW1lID0gY2xhc3NOYW1lcyh7XG4gICAgXCJiZy1ncmF5LTcwMFwiOiAhaXNBcHByb3ZlLFxuICAgIFwiYmctcmlwcGxlXCI6IGlzQXBwcm92ZSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQXBwcm92ZSkgcmV0dXJuO1xuICAgIGlmIChvbkFwcHJvdmUpIHtcbiAgICAgIGF3YWl0IG9uQXBwcm92ZSgpO1xuICAgIH1cbiAgICBzZXRBcHByb3ZlKHRydWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVCdXkgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc0FwcHJvdmUpIHJldHVybjtcbiAgICBpZiAob25CdXkpIHtcbiAgICAgIGF3YWl0IG9uQnV5KCk7XG4gICAgfVxuICAgIHNldEFwcHJvdmUoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNCByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtcHggYmctZ3JheS01MDAgdy1mdWxsIHRvcC0xLzIgbGVmdC0wIHotMTBcIj48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMjAgdy04IGgtOCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCAke2FwcENsYXNzbmFtZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgMVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHotMjAgdy04IGgtOCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCAke2J1eUNsYXNzbmFtZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgMlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1teC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRleHQ9XCJBcHByb3ZlXCJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzTmFtZT17YHctZnVsbCBweS00IHRleHQtMnhsIGZvbnQtbWVkaXVtIHJvdW5kZWQteGwgJHthcHBDbGFzc25hbWV9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFwcHJvdmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRleHQ9XCJCdXlcIlxuICAgICAgICAgICAgY3VzdG9tQ2xhc3NOYW1lPXtgdy1mdWxsIHB5LTQgdGV4dC0yeGwgZm9udC1tZWRpdW0gcm91bmRlZC14bCAke2J1eUNsYXNzbmFtZX1gfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQnV5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgU2FsZSA9ICgpID0+IHtcbiAgY29uc3Qgd2ViMyA9IGNvbm5lY3QoKTtcbiAgY29uc3QgY2hhaW5JZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEO1xuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3IoYWRkcmVzc1NlbGVjdG9yKTtcbiAgY29uc3QgW3JlZmVyXSA9IHVzZVJlZmVyKCk7XG4gIGNvbnN0IFtidXlWYWwsIHNldEJ1eVZhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3JlY2VpdmVWYWwsIHNldFJlY2VpdmVWYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGhhbmRsZUJ1eSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoYnV5VmFsIDwgYnV5TWV0aG9kLm1pbkJ1eSkge1xuICAgICAgZXJyb3JOb3RpZnkoYE1pbiBidXk6ICR7Zm9ybWF0TnVtYmVyKGJ1eU1ldGhvZC5taW5CdXkpfSBCTkJgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgd2ViMy5idXlTYWxlV2l0aEJuYihcbiAgICAgIHJlZmVyLFxuICAgICAgYnV5VmFsLFxuICAgICAgcmVjZWl2ZU1ldGhvZC5jb250cmFjdEFkZHJlc3NbY2hhaW5JZF1cbiAgICApO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGFpbSA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gICAgYXdhaXQgd2ViMy5jbGFpbUFpcmRyb3AocmVmZXIsIGFkZHJlc3MpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdlYjMuY29ubmVjdCgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVCdXlXaXRoVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGJ1eVZhbCA8IGJ1eU1ldGhvZC5taW5CdXkpIHtcbiAgICAgIGVycm9yTm90aWZ5KFxuICAgICAgICBgTWluIGJ1eTogJHtmb3JtYXROdW1iZXIoYnV5TWV0aG9kLm1pbkJ1eSl9ICR7YnV5TWV0aG9kLnN5bX1gXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB3ZWIzLmJ1eVNhbGVXaXRoVG9rZW4oXG4gICAgICByZWZlcixcbiAgICAgIGJ1eVZhbCxcbiAgICAgIGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3NbY2hhaW5JZF0sXG4gICAgICByZWNlaXZlTWV0aG9kLmNvbnRyYWN0QWRkcmVzc1tjaGFpbklkXVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGJ1eVZhbCA8IGJ1eU1ldGhvZC5taW5CdXkpIHtcbiAgICAgIGVycm9yTm90aWZ5KFxuICAgICAgICBgTWluIGJ1eTogJHtmb3JtYXROdW1iZXIoYnV5TWV0aG9kLm1pbkJ1eSl9ICR7YnV5TWV0aG9kLnN5bX1gXG4gICAgICApO1xuICAgICAgdGhyb3cgXCJNaW5idXlcIjtcbiAgICB9XG4gICAgYXdhaXQgd2ViMy5hcHByb3ZlKGJ1eU1ldGhvZC5jb250cmFjdEFkZHJlc3NbY2hhaW5JZF0sIGJ1eVZhbCk7XG4gIH07XG4gIGNvbnN0IFtyZWNlaXZlTWV0aG9kLCBzZXRSZWNlaXZlTWV0aG9kXSA9IHVzZVN0YXRlKHJlY2VpdmVMaXN0c1swXSk7XG4gIGNvbnN0IGJ1eUxpc3RzRmlsdGVyID0gYnV5TGlzdHMuZmlsdGVyKFxuICAgICh2YWwpID0+IHZhbC5idXlJZCA9PT0gcmVjZWl2ZU1ldGhvZC5idXlJZFxuICApO1xuICBjb25zdCBbYnV5TWV0aG9kLCBzZXRCdXlNZXRob2RdID0gdXNlU3RhdGUoYnV5TGlzdHNGaWx0ZXJbMF0pO1xuICBjb25zdCBbc2hvd0J1eSwgc2V0U2hvd0J1eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UmVjZWl2ZSwgc2V0U2hvd1JlY2VpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0luZm8sIHNldFNob3dJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJ1eVZhbChidXlNZXRob2QubWluQnV5KTtcbiAgfSwgW2J1eU1ldGhvZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RGaWx0ZXIgPSBidXlMaXN0cy5maWx0ZXIoXG4gICAgICAodmFsKSA9PiB2YWwuYnV5SWQgPT09IHJlY2VpdmVNZXRob2QuYnV5SWRcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGxpc3RGaWx0ZXIpO1xuICAgIHNldEJ1eU1ldGhvZChsaXN0RmlsdGVyWzBdKTtcbiAgICBjb25zb2xlLmxvZyhcIkNoYW5nZVwiKTtcbiAgfSwgW3JlY2VpdmVNZXRob2RdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZWNlaXZlVmFsKGJ1eVZhbCAqIGJ1eU1ldGhvZC5wcmljZSk7XG4gIH0sIFtidXlWYWxdKTtcbiAgY29uc3QgW2NwXSA9IHVzZUNvcHkoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbGc6cHgtMzIgdGV4dC1ncmF5LTEwMCBtYi0xNlwiPlxuICAgICAge3Nob3dJbmZvICYmIChcbiAgICAgICAgPFNob3dUb2tlbkluZm9cbiAgICAgICAgICBkYXRhPXtyZWNlaXZlTWV0aG9kfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJbmZvKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6LW14LTggZmxleC13cmFwXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgbGc6cHgtOCB0ZXh0LXhsIG1iLTE2IG14LWF1dG9cIlxuICAgICAgICAgIGlkPVwiYWlyZHJvcFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLTN4bCBweC00IGxnOnB4LTggcHktMTIgYmctYmFzZSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsXCI+UHJlLXNhbGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiByb3VuZGVkLTN4bCBiZy13YXJtR3JheS04MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ymctd2FybUdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5mbyh0cnVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCaUhlbHBDaXJjbGUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9jb2lucy8ke3JlY2VpdmVNZXRob2QuaW1nfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+SW5mbzwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IGJnLXdhcm0tOTAwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvbkNpcmNsZURvd24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdhcm1HcmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtidXlMaXN0c0ZpbHRlcn1cbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd0J1eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnV5TWV0aG9kKGUpfVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0J1eShmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgcm91bmRlZC0yeGwgcC0yIGxnOnAtNCBib3JkZXItd2FybUdyYXktNzAwIGJnLXdhcm1HcmF5LTgwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTIgbGc6cHgtNCBweS0xIGxnOnB5LTIgYmctd2FybUdyYXktNzAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy13YXJtR3JheS05MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dCdXkodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvY29pbnMvJHtidXlNZXRob2QuaW1nfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIGZvbnQtbWVkaXVtXCI+e2J1eU1ldGhvZC5zeW19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIGNsYXNzTmFtZT1cInctNiBoLTYgbXQtMSBtbC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB3LWZ1bGwgcHktMiBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidXlWYWx9XG4gICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlcykgPT4gc2V0QnV5VmFsKHZhbHVlcy52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtM3hsIHctZnVsbCBweS0yIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnV5VmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdXlWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgZGF0YT17cmVjZWl2ZUxpc3RzfVxuICAgICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93UmVjZWl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVjZWl2ZU1ldGhvZChlKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dSZWNlaXZlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkLTJ4bCBwLTIgbGc6cC00IGJvcmRlci13YXJtR3JheS03MDAgYmctd2FybUdyYXktODAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMiBsZzpweC00IHB5LTEgbGc6cHktMiBiZy13YXJtR3JheS03MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLXdhcm1HcmF5LTkwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1JlY2VpdmUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvY29pbnMvJHtyZWNlaXZlTWV0aG9kLmltZ30ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVNZXRob2Quc3ltfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biBjbGFzc05hbWU9XCJ3LTYgaC02IG10LTEgbWwtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LTJ4bCB3LWZ1bGwgcHktMiBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtcmlnaHQgaW5saW5lLWJsb2NrIHRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWNlaXZlVmFsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICB7YnV5TWV0aG9kLmNvbnRyYWN0QWRkcmVzcyA/IChcbiAgICAgICAgICAgICAgICA8QnV5VG9rZW5Db21cbiAgICAgICAgICAgICAgICAgIG9uQXBwcm92ZT17aGFuZGxlQXBwcm92ZX1cbiAgICAgICAgICAgICAgICAgIG9uQnV5PXtoYW5kbGVCdXlXaXRoVG9rZW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiQnV5XCJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzTmFtZT1cInctZnVsbCBweS00IHRleHQtMnhsIGZvbnQtbWVkaXVtIHJvdW5kZWQteGwgYmctcmlwcGxlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMiByaWdodC04IHRleHQtZ3JheS0zMDAgdW5kZXJsaW5lIGhvdmVyOnRleHQtcmlwcGxlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IHJlZmVycmFsXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWNjb3VudCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHctZnVsbCByb3VuZGVkLTJ4bCBweC00IHB0LTEyIHBiLTQgLW10LThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtbWVkaXVtXCI+UmVmZXJyYWwgbGluazwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIGNwKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9OQU1FfT9hZGRyZXNzPSR7YWNjb3VudH1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWstYWxsIGlubGluZS1ibG9jayB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICB7YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX05BTUV9P2FkZHJlc3M9JHthY2NvdW50fWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxJb0lvc0NvcHkgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgR2V0IDUwJSBvZiBhbGwgY2xhaW1zICYgNTAlIHdoZW4gdGhleSBidXkhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgKioqIEJvbnVzIDEwJSBvZiBCTkIgb3IgV0JUQyB3aGVuIHRoZXkgYnV5IChFeGFtcGxlOiBJZiB0aGV5XG4gICAgICAgICAgICAgICAgICBidXkgMSBCTkIgeW91IHdpbGwgcmVjZWl2ZSAwLjEgQk5CIGRpcmVjdGx5IHRyYW5zZmVyKVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3JlY2VpdmVMaXN0cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdy1mdWxsIHB0LTQgcGItNCBweC00IHJvdW5kZWQtMnhsIG10LThcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250bS1tZWRpdW1cIj57dmFsLm5hbWV9IGFpcmRyb3A8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt2YWwuYWlyZHJvcH0ge3ZhbC5zeW19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ2xhaW1cIlxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLXJpcHBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xhaW0odmFsLmNvbnRyYWN0QWRkcmVzc1tjaGFpbklkXSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=