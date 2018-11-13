webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NewInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NewInput */ "./components/NewInput.js");

var _jsxFileName = "/home/nava/Documents/Projects/Jobs/Testcases/snapmarket/public/app/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      text: '',
      atext: '',
      error: '',
      help: '',
      selectedProduct: null
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:8000/products').then(function (res) {
        if (res.data.length > 0) _this2.props.addProduct(res.data);
      }).catch(function (err) {});
    }
  }, {
    key: "fetchProductAttrs",
    value: function fetchProductAttrs(product) {
      var _this3 = this;

      this.setState({
        selectedProduct: product
      });
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:8000/products/' + product.id + '/attributes').then(function (res) {
        _this3.props.addAttribute(res.data);
      }).catch(function (err) {});
    }
  }, {
    key: "ulCreator",
    value: function ulCreator(arr) {
      var clickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if (!Array.isArray(arr)) return;
      var list = [];
      arr.map(function (l) {
        if (!l) return;
        list.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: l.id,
          onClick: function onClick() {
            return clickHandler(l);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "(", l.id, ") --- ", l.name));
      });
      return list;
    }
  }, {
    key: "onChangeInputText",
    value: function onChangeInputText(event) {
      this.setState({
        text: event.target.value
      });
    }
  }, {
    key: "onChangeAttrInputText",
    value: function onChangeAttrInputText(event) {
      this.setState({
        atext: event.target.value
      });
    }
  }, {
    key: "submitProduct",
    value: function submitProduct() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:8000/products', {
        name: this.state.text
      }).then(function (res) {
        console.log(res);
        if (res.data && res.data.err) _this4.setState({
          error: res.data.err,
          help: res.data.help_message
        });else {
          _this4.props.addProduct([res.data]);

          _this4.setState({
            text: "",
            error: "",
            help: ""
          });
        }
      }).catch(function (err) {
        console.log(err);

        _this4.setState({
          error: "خطا. لاگ رو بخون :'("
        });
      });
    }
  }, {
    key: "submitAttr",
    value: function submitAttr() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:8000/products/' + this.state.selectedProduct.id + '/attributes', {
        name: this.state.atext
      }).then(function (res) {
        console.log(res);
        if (res.data && res.data.error) _this5.setState({
          error: res.data.error,
          help: res.data.help_message
        });

        _this5.props.addAttribute(res.data);

        _this5.setState({
          atext: ""
        });
      }).catch(function (err) {
        console.log(err);

        _this5.setState({
          error: "خطا. لاگ رو بخون :'("
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "click on product to see attrs or add new one"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.state.help), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NewInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        btnText: "submit new product",
        default: this.state.text,
        onchange: this.onChangeInputText.bind(this),
        onclick: this.submitProduct.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), this.ulCreator(this.props.products, this.fetchProductAttrs.bind(this)))), this.state.selectedProduct ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.state.selectedProduct && this.state.selectedProduct.name, " attrs:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NewInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        btnText: "submit new attributes",
        default: this.state.atext,
        onchange: this.onChangeAttrInputText.bind(this),
        onclick: this.submitAttr.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), this.ulCreator(this.props.attributes))) : null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function mapStateToProps(state) {
  return {
    products: state.products,
    attributes: state.attributes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(products) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_4__["addProduct"])(products));
    },
    addAttribute: function addAttribute(attrs) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_4__["addAttribute"])(attrs));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7616dd0578e012b074b2.hot-update.js.map