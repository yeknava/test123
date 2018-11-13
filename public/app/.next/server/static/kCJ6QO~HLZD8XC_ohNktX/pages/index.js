module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAttribute; });
/* unused harmony export fetching */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var InitialState = {
  fetching: false,
  products: [],
  attributes: []
};
var actionTypes = {
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  ADD_PRODUCT: 'ADD_PRODUCT',
  FETCH_ATTRIBUTES: 'FETCH_ATTRIBUTES',
  ADD_ATTRIBUTES: 'ADD_ATTRIBUTES' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.FETCH_PRODUCT:
    case actionTypes.FETCH_ATTRIBUTES:
      return Object.assign({}, state, {
        fetching: true
      });

    case actionTypes.ADD_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.concat(action.payload)
      });

    case actionTypes.ADD_ATTRIBUTES:
      return Object.assign({}, state, {
        attributes: !Array.isArray(action.payload) ? _toConsumableArray(state.attributes).concat([action.payload]) : action.payload
      });

    default:
      return state;
  }
}; // ACTIONS

var addProduct = function addProduct(products) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD_PRODUCT,
      payload: products
    });
  };
};
var addAttribute = function addAttribute(attributes) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD_ATTRIBUTES,
      payload: attributes
    });
  };
};
var fetching = function fetching(dispatch) {
  return dispatch({
    type: actionTypes.FETCH_PRODUCT
  });
};
/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(13);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(5);

// EXTERNAL MODULE: ./store.js
var store = __webpack_require__(3);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/NewInput.js

/* harmony default export */ var NewInput = (function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
    type: "text",
    value: props.default,
    onChange: props.onchange
  }), external_react_default.a.createElement("button", {
    onClick: props.onclick
  }, props.btnText));
});
// CONCATENATED MODULE: ./pages/index.js


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







external_axios_default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var base_url = "http://localhost:8000";

var pages_Index =
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

      external_axios_default.a.get(base_url + '/products').then(function (res) {
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
      external_axios_default.a.get(base_url + '/products/' + product.id + '/attributes').then(function (res) {
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
        list.push(external_react_default.a.createElement("li", {
          key: l.id,
          onClick: function onClick() {
            return clickHandler(l);
          }
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

      external_axios_default.a.post(base_url + '/products', {
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

      external_axios_default.a.post(base_url + '/products/' + this.state.selectedProduct.id + '/attributes', {
        name: this.state.atext
      }).then(function (res) {
        console.log(res);
        if (res.data && res.data.err) _this5.setState({
          error: res.data.err,
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
      return external_react_default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, external_react_default.a.createElement("div", {
        style: {
          padding: 10
        }
      }, external_react_default.a.createElement("p", null, "click on product to see attrs or add new one"), external_react_default.a.createElement("p", {
        style: {
          color: "red"
        }
      }, this.state.error), external_react_default.a.createElement("p", null, this.state.help), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(NewInput, {
        btnText: "submit new product",
        default: this.state.text,
        onchange: this.onChangeInputText.bind(this),
        onclick: this.submitProduct.bind(this)
      })), this.ulCreator(this.props.products, this.fetchProductAttrs.bind(this)))), this.state.selectedProduct ? external_react_default.a.createElement("div", {
        style: {
          padding: 10
        }
      }, external_react_default.a.createElement("h3", null, this.state.selectedProduct && this.state.selectedProduct.name, " attrs:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(NewInput, {
        btnText: "submit new attributes",
        default: this.state.atext,
        onchange: this.onChangeAttrInputText.bind(this),
        onclick: this.submitAttr.bind(this)
      })), this.ulCreator(this.props.attributes))) : null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
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
}(external_react_default.a.Component);

function mapStateToProps(state) {
  return {
    products: state.products,
    attributes: state.attributes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(products) {
      return dispatch(Object(store["b" /* addProduct */])(products));
    },
    addAttribute: function addAttribute(attrs) {
      return dispatch(Object(store["a" /* addAttribute */])(attrs));
    }
  };
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(pages_Index));

/***/ })
/******/ ]);