"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_User_Cms_Frontend_js"],{

/***/ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/BreadcrumbItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Breadcrumb.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Breadcrumb = /*#__PURE__*/function (_Component) {
  _inherits(Breadcrumb, _Component);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _super.apply(this, arguments);
  }

  _createClass(Breadcrumb, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          main = _this$props.main,
          icon = _this$props.icon,
          home = _this$props.content.cms.pages.general.home,
          _this$props$dark = _this$props.dark,
          dark = _this$props$dark === void 0 ? false : _this$props$dark;
      var itemsComponent = null;
      if (items) itemsComponent = items.map(function (item, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            className: "text-border",
            to: item.to,
            children: item.content
          })
        }, i);
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "d-none d-sm-flex align-items-center",
        color: dark ? "light" : "secondary",
        listClassName: "bg-transparent rounded-0 justify-content-end",
        style: {
          top: '50%',
          right: 0,
          transform: 'translateY(-10px)',
          position: 'absolute',
          zIndex: 1000
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            className: "text-green text-decoration-none",
            to: "/",
            children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "fas fa-" + icon + " mr-1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-500 text-green-50",
              children: home
            })]
          })
        }), itemsComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: "green",
          className: "text-decoration-none",
          active: true,
          children: main
        })]
      });
    }
  }]);

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Breadcrumb));

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Form/Form.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Form/Form.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Form.js");
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.css */ "./resources/js/src/components/Backend/UI/Form/Form.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var onSubmit = _ref.onSubmit,
      title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      style = _ref.style,
      id = _ref.id,
      list = _ref.list,
      link = _ref.link,
      disabled = _ref.disabled;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'UI Form shadow ' + className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "green-line"
        })]
      }), list && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: link,
        className: "link",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-green",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: "fas fa-tasks"
          }), list]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: 'body ' + className,
      style: style,
      children: disabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        id: id,
        children: children
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onSubmit: onSubmit,
        id: id,
        encType: "multipart/form-data",
        children: children
      })
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/TitleWrapper/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleWrapper.css */ "./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "UI TitleWrapper py-2 py-md-3 py-xxl-4 px-3 px-md-4 px-xxl-5 bg-green-15 position-relative",
    children: children
  });
});

/***/ }),

/***/ "./resources/js/src/components/Content/Frontend.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Content/Frontend.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "restaurants": {
    "home": {
      "you_are_on_category": "You are on category",
      "select_category": "Select category",
      "search": "Search"
    },
    "meals": {
      "price": "Price",
      "compose": "Compose your meal to know the cost",
      "addons": {
        "title": "Food Addons",
        "dear_customers": "Dear customers, this item comes with an addon of your choice. If you would like extra addon, please select below",
        "your_cart_cost_is": "Your cart cost is"
      },
      "description": "Description",
      "must_read": "Must Read",
      "dear_customers": "Dear customers, we would love to make available more food items but unfortunately kindly note that some of the addons mentioned below might not be available. For special request, please contact us. Thanks for understanding.",
      "comments": {
        "title": "Comments",
        "post_comment": "Post comment",
        "name": "Full name",
        "body": "Type something here"
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/components/Error/Error.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Error/Error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var error = function error(_ref) {
  var err = _ref.err;
  return err ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "alert alert-danger",
    children: err.message ? err.message : err
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var message = _ref.message,
      time = _ref.time;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  if (time) setTimeout(function () {
    setVisible(false);
  }, time);
  return message ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: message.type,
    isOpen: visible,
    children: message.content
  }) : null;
});

/***/ }),

/***/ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var left = _ref.left,
      children = _ref.children,
      color = _ref.color,
      icon = _ref.icon,
      _ref$iconColor = _ref.iconColor,
      iconColor = _ref$iconColor === void 0 ? 'reset' : _ref$iconColor,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      size = _ref.size,
      _ref$pill = _ref.pill,
      pill = _ref$pill === void 0 ? false : _ref$pill,
      block = _ref.block,
      type = _ref.type,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    block: block,
    color: color,
    size: size,
    type: type,
    onClick: onClick,
    className: "d-inline-flex justify-content-center align-items-center text-14 text-400 px-4 py-2 ".concat(pill ? ' rounded-pill ' : 'rounded-10', " ").concat(className),
    children: [left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      size: "lg",
      className: "fas fa-".concat(icon, " mr-3 text-").concat(iconColor)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    }), !left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      size: "lg",
      className: "fas fa-".concat(icon, " ml-3 text-").concat(iconColor)
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-30 d-none d-sm-block mb-1 text-".concat(dark ? "light" : "secondary", " ").concat(className),
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-24 d-sm-none mb-1 text-".concat(dark ? "light" : "secondary", " ").concat(className),
      children: children
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-".concat(dark ? "light" : "secondary", " text-18 d-none d-sm-block text-300 ").concat(className),
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-".concat(dark ? "light" : "secondary", " text-14 d-sm-none text-300 ").concat(className),
      children: children
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Cms/Frontend.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Cms/Frontend.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Input.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabPane.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabContent.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Backend_UI_Form_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Backend/UI/Form/Form */ "./resources/js/src/components/Backend/UI/Form/Form.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Backend/UI/TitleWrapper */ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _store_actions_backend_cms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../store/actions/backend/cms */ "./resources/js/src/store/actions/backend/cms.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _components_Content_Frontend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/Content/Frontend */ "./resources/js/src/components/Content/Frontend.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // Components
















var icon = "wrench";

var Separator = function Separator(_ref) {
  var sm = _ref.sm;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    xs: 12,
    className: "mb-".concat(sm ? 2 : 3)
  });
};

var SubNavLinks = function SubNavLinks(_ref2) {
  var frontend = _ref2.frontend,
      language = _ref2.language;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("".concat(language.abbr, "-restaurants")),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(frontend),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  var _onChange = function onChange(e) {
    var valueCopy = _objectSpread({}, value);

    for (var _len = arguments.length, deepness = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      deepness[_key - 1] = arguments[_key];
    }

    if (deepness.length === 1) {
      valueCopy[deepness[0]] = e.target.value;
      return setValue(valueCopy);
    }

    var subValues = [];

    var subValue = _objectSpread({}, value);

    for (var i = 0; i < deepness.length - 1; i++) {
      var element = deepness[i];
      subValue = subValue[element];
      subValues.push(subValue);
    }

    subValues[subValues.length - 1][deepness[deepness.length - 1]] = e.target.value;

    for (var _i2 = 1; _i2 < deepness.length - 1; _i2++) {
      var _element = deepness[deepness.length - 1 - _i2];
      var index = subValues.length - 1 - _i2;
      subValues[index][_element] = subValues[index + 1];
    }

    valueCopy[deepness[0]] = subValues[0];
    setValue(valueCopy);
  };

  var recursiveDeepness = function recursiveDeepness(paramItem, paramName, paramValue, paramDeepness) {
    var paramPrepends = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var paramAppends = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    return Object.keys(paramItem).map(function (item) {
      var mainItem = paramItem[item];
      var mainName = "".concat(paramName, "[").concat(item, "]");
      var mainId = "".concat(paramName, "-").concat(item);
      var mainValue = paramValue[item];
      var mainDeepness = paramDeepness.concat(item);
      var prepend;
      var findPrepend = paramPrepends.find(function (el) {
        return new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(mainName);
      });
      prepend = !findPrepend ? null : findPrepend.action(mainItem);
      var append;
      var findAppend = paramAppends.find(function (el) {
        return new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(mainName);
      });
      append = !findAppend ? null : findAppend.action(mainItem);
      return typeof mainItem === 'string' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [prepend, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "col-md-6 col-lg-4 align-self-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            className: "text-small text-500",
            children: mainItem
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            type: "text",
            name: mainName,
            id: mainId,
            placeholder: mainItem,
            onChange: function onChange(e) {
              return _onChange.apply(void 0, [e].concat(_toConsumableArray(mainDeepness)));
            },
            value: mainValue
          })]
        }), append]
      }) : recursiveDeepness(mainItem, mainName, mainValue, mainDeepness, paramPrepends, paramAppends);
    });
  };

  var navItems = Object.keys(frontend).map(function (key) {
    var id = "".concat(language.abbr, "-").concat(key);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: activeTab === id ? 'active' : "",
        onClick: function onClick() {
          return toggle(id);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
          className: "text-capitalize",
          children: key.split('_').join(' ')
        })
      })
    }, id);
  });
  var prefix = "".concat(language.abbr, "[frontend]");
  var keys = Object.keys(_components_Content_Frontend__WEBPACK_IMPORTED_MODULE_14__["default"]);
  var resourceTabPanes = keys.map(function (item) {
    var currentItem = _components_Content_Frontend__WEBPACK_IMPORTED_MODULE_14__["default"][item];
    var currentName = "".concat(prefix, "[").concat(item, "]");
    var currentValue = value[item];
    var currentDeepness = [item];
    var current = recursiveDeepness(currentItem, currentName, currentValue, currentDeepness);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
      tabId: "".concat(language.abbr, "-").concat(item),
      className: "pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
        children: current
      })
    }, Math.random() + currentName);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
      tabs: true,
      pills: true,
      children: navItems
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
      activeTab: activeTab,
      children: resourceTabPanes
    })]
  }, Math.random() * Math.random());
};

var Frontend = /*#__PURE__*/function (_Component) {
  _inherits(Frontend, _Component);

  var _super = _createSuper(Frontend);

  function Frontend() {
    var _this;

    _classCallCheck(this, Frontend);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: "en"
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.props.patch(e.target);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "inputChangeHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          files = _e$target.files;

      _this.setState(_defineProperty({}, name, files ? files[0] : value));
    });

    _defineProperty(_assertThisInitialized(_this), "fileUpload", function () {
      return document.getElementById('logo').click();
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (tab) {
      if (_this.state.activeTab !== tab) _this.setState({
        activeTab: tab
      });
    });

    return _this;
  }

  _createClass(Frontend, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.props.reset();
                this.props.get();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$content$c = _this$props.content.cms.pages,
          save = _this$props$content$c.components.form.save,
          _this$props$content$c2 = _this$props$content$c.backend.pages.cms,
          title = _this$props$content$c2.title,
          frontend = _this$props$content$c2.frontend,
          _this$props$backend$c = _this$props.backend.cms,
          loading = _this$props$backend$c.loading,
          error = _this$props$backend$c.error,
          message = _this$props$backend$c.message,
          cms = _this$props$backend$c.cms,
          languages = _this$props$backend$c.languages,
          features = _this$props.auth.data.role.features;
      var activeTab = this.state.activeTab;
      var content = null;
      var errors = null;
      var feature = features.find(function (f) {
        return f.prefix === 'cms';
      });

      var redirect = !(feature && JSON.parse(feature.permissions).includes('u')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Redirect, {
        to: "/user/dashboard"
      });

      if (loading) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {})
      });else {
        errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
            err: error
          })
        });
        if (!languages) languages = [];
        var nav = languages.map(function (language) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
              className: activeTab === language.abbr ? 'active' : '',
              onClick: function onClick() {
                return _this2.toggle(language.abbr);
              },
              children: language.name
            })
          }, Math.random());
        });
        var tabContent = languages.map(function (language) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            tabId: language.abbr,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(SubNavLinks, {
              frontend: cms.pages[language.abbr].frontend,
              language: language
            })
          }, Math.random());
        });
        content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Backend_UI_Form_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
              onSubmit: this.submitHandler,
              icon: icon,
              title: frontend,
              link: "/admin/cms",
              innerClassName: "row",
              className: "shadow-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                lg: 12,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  message: message
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input", {
                    type: "hidden",
                    name: "_method",
                    defaultValue: "PATCH"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    lg: 2,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                      tabs: true,
                      vertical: true,
                      pills: true,
                      children: nav
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    lg: 10,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                      activeTab: activeTab,
                      children: tabContent
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                    className: "col-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      color: "green",
                      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_27__.faSave,
                      children: save
                    })
                  })]
                })]
              })
            })
          })
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
            main: frontend,
            icon: icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: frontend
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "p-4 pb-0",
          children: [redirect, errors, content]
        })]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.backend.cms.cms && prevState.app_name === '') {
        var frontend = nextProps.backend.cms.cms.frontend;
        return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_13__.updateObject)(prevState, _objectSpread({}, frontend));
      }

      return prevState;
    }
  }]);

  return Frontend;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch((0,_store_actions_backend_cms__WEBPACK_IMPORTED_MODULE_12__.getCms)());
    },
    patch: function patch(data) {
      return dispatch((0,_store_actions_backend_cms__WEBPACK_IMPORTED_MODULE_12__.patchCms)('frontend', data));
    },
    reset: function reset() {
      return dispatch((0,_store_actions_backend_cms__WEBPACK_IMPORTED_MODULE_12__.resetCms)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Frontend)));

/***/ }),

/***/ "./resources/js/src/store/actions/backend/cms.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/store/actions/backend/cms.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCms": () => (/* binding */ deleteCms),
/* harmony export */   "getCms": () => (/* binding */ getCms),
/* harmony export */   "patchCms": () => (/* binding */ patchCms),
/* harmony export */   "postCms": () => (/* binding */ postCms),
/* harmony export */   "resetCms": () => (/* binding */ resetCms)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var prefix = '/api/';
var resetCms = function resetCms() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CMS_RESET
  };
};

var cmsStart = function cmsStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CMS_START
  };
};

var cmsSuccess = function cmsSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CMS_SUCCESS
  }, data);
};

var cmsFail = function cmsFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.CMS_FAIL,
    error: error
  };
};

var getCms = function getCms() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, getState) {
      var role, token, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(cmsStart());
              role = getState().auth.role;
              _context.prev = 2;
              token = localStorage.getItem('token');
              _context.next = 6;
              return fetch("".concat(prefix + role, "/cms"), {
                headers: {
                  Authorization: token
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              resData = _context.sent;
              dispatch(cmsSuccess(resData));
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              dispatch(cmsFail(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
var postCms = function postCms(data) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch, getState) {
      var role, token, form, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(cmsStart());
              role = getState().auth.role;
              _context2.prev = 2;
              token = localStorage.getItem('token');
              form = new FormData(data);
              _context2.next = 7;
              return fetch("".concat(prefix + role, "/cms"), {
                method: 'POST',
                body: form,
                headers: {
                  Authorization: token
                }
              });

            case 7:
              res = _context2.sent;
              _context2.next = 10;
              return res.json();

            case 10:
              resData = _context2.sent;

              if (!(res.status === 422)) {
                _context2.next = 15;
                break;
              }

              throw new Error(Object.values(resData.errors).join('\n'));

            case 15:
              if (!(res.status !== 200 && res.status !== 201)) {
                _context2.next = 17;
                break;
              }

              throw new Error(resData.error.message);

            case 17:
              dispatch(cmsSuccess(resData));
              _context2.next = 24;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              dispatch(cmsFail(_context2.t0));

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 20]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var patchCms = function patchCms(id, data) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch, getState) {
      var role, token, form, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(cmsStart());
              role = getState().auth.role;
              _context3.prev = 2;
              token = localStorage.getItem('token');
              form = new FormData(data);
              _context3.next = 7;
              return fetch("".concat(prefix + role, "/cms/").concat(id), {
                method: 'POST',
                body: form,
                headers: {
                  Authorization: token
                }
              });

            case 7:
              res = _context3.sent;
              _context3.next = 10;
              return res.json();

            case 10:
              resData = _context3.sent;

              if (!(res.status === 422)) {
                _context3.next = 13;
                break;
              }

              throw new Error(Object.values(resData.errors).join('\n'));

            case 13:
              dispatch(cmsSuccess(resData));
              _context3.next = 20;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](2);
              console.log(_context3.t0);
              dispatch(cmsFail(_context3.t0));

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 16]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var deleteCms = function deleteCms(id) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch, getState) {
      var role, page, show, search, token, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch(cmsStart());
              role = getState().auth.role;
              _context4.prev = 2;
              page = document.getElementById('table-page').value;
              show = document.getElementById('table-show').value;
              search = document.getElementById('table-search').value;
              token = localStorage.getItem('token');
              _context4.next = 9;
              return fetch("".concat(prefix + role, "/cms/").concat(id, "?page=").concat(page, "&show=").concat(show, "&search=").concat(search), {
                method: 'DELETE',
                headers: {
                  Authorization: token
                }
              });

            case 9:
              res = _context4.sent;
              _context4.next = 12;
              return res.json();

            case 12:
              resData = _context4.sent;

              if (!(res.status === 422)) {
                _context4.next = 15;
                break;
              }

              throw new Error(Object.values(resData.errors).join('\n'));

            case 15:
              dispatch(cmsSuccess(resData));
              _context4.next = 22;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);
              dispatch(cmsFail(_context4.t0));

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 18]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Form/Form.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Form/Form.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.Form {\r\n    border-radius: 30px;\r\n    padding: 48px 69px 101px 69px;\r\n    background-color: var(--white);\r\n}\r\n\r\n.UI.Form .header {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 86px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.UI.Form .header .title {\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.UI.Form .header .subtitle {\r\n    font-size: 16px;\r\n    margin-bottom: 21px;\r\n}\r\n\r\n.UI.Form .header .green-line {\r\n    width: 46px;\r\n    height: 10px;\r\n    border-radius: 5px;\r\n    background-color: var(--green);\r\n}\r\n\r\n.UI.Form .header .link {\r\n    text-decoration: none;\r\n}\r\n\r\n.UI.Form .header .link button {\r\n    font-weight: 700;\r\n    border-radius: 10px;\r\n    padding: 19px 33px 18px 24.75px;\r\n}\r\n\r\n.UI.Form .header .link button i {\r\n    margin-right: 18.25px;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.TitleWrapper + div {\r\n    padding: 1rem;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    .UI.TitleWrapper + div {\r\n        padding: 1.5rem;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .UI.TitleWrapper + div {\r\n        padding: 3rem;\r\n    }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/reactstrap/es/Alert.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Alert.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/reactstrap/es/Fade.js");



var _excluded = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  closeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  tag: _utils__WEBPACK_IMPORTED_MODULE_6__.tagPropType,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)])
};
var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('close', closeClassName), cssModule);

  var alertTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Breadcrumb.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  listTag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  listClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
var defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className), cssModule);
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

/***/ }),

/***/ "./node_modules/reactstrap/es/BreadcrumbItem.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/BreadcrumbItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "active", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/Form.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "inline", "tag", "innerRef"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
var defaultProps = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submit = _this.submit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./node_modules/reactstrap/es/FormGroup.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/FormGroup.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "row", "disabled", "check", "inline", "tag"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  row: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  check: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
var defaultProps = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ }),

/***/ "./node_modules/reactstrap/es/Label.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Label.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];




var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  check: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  for: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
var defaultProps = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "./node_modules/reactstrap/es/Nav.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Nav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];




var propTypes = {
  tabs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  pills: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  justified: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  fill: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  navbar: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  card: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
var defaultProps = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./node_modules/reactstrap/es/NavItem.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/NavItem.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "active", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/NavLink.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/NavLink.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");




var _excluded = ["className", "cssModule", "active", "tag", "innerRef"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_6__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any)
};
var defaultProps = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContent.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
var defaultProps = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.omit)(this.props, Object.keys(propTypes));
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-content', className), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContent);
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContext.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContext": () => (/* binding */ TabContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./node_modules/reactstrap/es/TabPane.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/TabPane.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPane)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tabId", "tag"];





var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_4__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
};
var defaultProps = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var getClasses = function getClasses(activeTabId) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Form/Form.css":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Form/Form.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Form.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Form/Form.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Form_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Form_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./TitleWrapper.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/TitleWrapper/TitleWrapper.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_TitleWrapper_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);