"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_Customer_Files_index_js"],{

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

/***/ "./resources/js/src/components/Backend/UI/FormBlock/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/FormBlock/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _FormBlock_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormBlock.css */ "./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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









var FormBlock = /*#__PURE__*/function (_Component) {
  _inherits(FormBlock, _Component);

  var _super = _createSuper(FormBlock);

  function FormBlock() {
    _classCallCheck(this, FormBlock);

    return _super.apply(this, arguments);
  }

  _createClass(FormBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cms = _this$props.content.cms.pages.components.form_block,
          number = _this$props.number,
          _this$props$status = _this$props.status,
          status = _this$props$status === void 0 ? 0 : _this$props$status,
          body = _this$props.body,
          customer = _this$props.customer,
          errors = _this$props.errors,
          updated_at = _this$props.updated_at,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className;

      var formattedBody = body && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "title",
            children: [cms.body.group, " 1 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
              className: "fas fa-circle"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "body",
            children: Object.keys(body[0]).map(function (param) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                children: [cms.body[param], " : ", body[0][param]]
              }, body[0][param]);
            })
          })]
        })
      });

      var formStatus = customer ? body ? ['pending', 'rejected', 'approved'][status] : 'reserved' : 'available';
      var formBadger = {
        bg: {
          available: 'primary',
          reserved: 'darkgreen',
          pending: 'orange',
          rejected: 'red',
          approved: 'green'
        }[formStatus],
        icon: {
          available: 'check-circle',
          reserved: 'check-circle',
          pending: 'spinner fa-spin',
          rejected: 'times-circle',
          approved: 'check-circle'
        }[formStatus]
      };
      var formCircleButton = {
        bg: {
          available: 'transparent',
          reserved: 'transparent',
          pending: 'primary',
          rejected: 'red',
          approved: 'lightgreen'
        }[formStatus],
        icon: {
          available: '',
          reserved: '',
          pending: 'edit',
          rejected: 'edit',
          approved: 'check'
        }[formStatus]
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: 'UI FormBlock ' + className,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "content shadow",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex-fill",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "d-flex mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "far fa-copy text-border-30"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "text-20 text-500",
                  children: [cms.form, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-700",
                    children: number
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "green-line"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: 'badger bg-' + formBadger.bg,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "text",
                  children: cms[formStatus]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: 'fas fa-' + formBadger.icon
                  })
                })]
              }), status === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "text-red text-12 text-right",
                children: [errors, " ", errors > 1 ? cms.errors_found : cms.error_found]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "paper",
            children: formattedBody
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "flex-fill",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "border-line"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: 'circle-button shadow' + (status < 2 ? " cursor-pointer " : " ") + "bg-" + formCircleButton.bg,
                style: !body ? {
                  opacity: 0
                } : {},
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: 'fas fa-' + formCircleButton.icon
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "by",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "fas fa-user"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "label",
              children: [cms.by, " :"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "customer",
              children: customer || cms.not_available
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "edited",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "fas fa-calendar-check"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "label",
              children: [body ? cms.edited : cms.published, " :"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "updated text-truncate",
              children: (0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.convertDate)(updated_at)
            })]
          })]
        }), status === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "approved-big-line"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "approved-little-line"
          })]
        })]
      });
    }
  }]);

  return FormBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(FormBlock));

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/PageTitle/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/PageTitle/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PageTitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.css */ "./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      icon = _ref.icon;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "UI PageTitle",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "green-line"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "icon",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: 'fas fa-' + icon
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex-fill",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })]
  });
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

/***/ "./resources/js/src/containers/Backend/Customer/Files/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Customer/Files/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Backend/UI/PageTitle */ "./resources/js/src/components/Backend/UI/PageTitle/index.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_Backend_UI_FormBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Backend/UI/FormBlock */ "./resources/js/src/components/Backend/UI/FormBlock/index.js");
/* harmony import */ var _store_actions_backend_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions/backend/files */ "./resources/js/src/store/actions/backend/files.js");
/* harmony import */ var _Files_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Files.scss */ "./resources/js/src/containers/Backend/Customer/Files/Files.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Components











var icon = "copy";

var FilterOption = function FilterOption(_ref) {
  var name = _ref.name,
      active = _ref.active,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: 'option' + (active ? ' active' : ''),
    onClick: onClick,
    children: name
  });
};

var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      page: 1,
      show: 'All',
      search: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangeHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        return _this.props.get(_this.state.page, _this.state.show, value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setShow", function (show) {
      return _this.setState({
        show: show
      }, function () {
        return _this.props.get(_this.state.page, show, _this.state.search);
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: // Lifecycle methods
    function componentDidMount() {
      this.props.get();
    }
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
          _this$props$content$c = _this$props.content.cms.pages.backend.pages.files,
          title = _this$props$content$c.title,
          subtitle = _this$props$content$c.subtitle,
          index = _this$props$content$c.index,
          form = _this$props$content$c.form,
          _this$props$backend$f = _this$props.backend.files,
          loading = _this$props$backend$f.loading,
          error = _this$props$backend$f.error,
          message = _this$props$backend$f.message,
          _this$props$backend$f2 = _this$props$backend$f.selectedProject,
          selectedProject = _this$props$backend$f2 === void 0 ? {} : _this$props$backend$f2,
          _this$props$backend$f3 = _this$props$backend$f.forms,
          forms = _this$props$backend$f3 === void 0 ? [] : _this$props$backend$f3;
      var _this$state = this.state,
          show = _this$state.show,
          search = _this$state.search;

      var errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_2__["default"], {
          err: error
        })
      });

      var flash = this.props.location.state ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3__["default"], {
        time: 5000,
        message: this.props.location.state.message
      }) : null;

      var feedback = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3__["default"], {
        message: message
      });

      var formsContent = forms.map(function (form) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Backend_UI_FormBlock__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, form), {}, {
          className: "col-lg-3 pb-5"
        }), JSON.stringify(form));
      });

      var content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("section", {
          className: "files-status",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "d-flex align-items-center text-green",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                  className: "fas fa-copy text-21"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "px-2 mx-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                  className: "fas fa-circle text-6"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "text-25 text-500 text-border",
                children: [form.project, " ", selectedProject.number, " - ", form.project_files]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "filter",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterOption, {
                name: form.all,
                active: show === form.all,
                onClick: function onClick() {
                  return _this2.setShow(form.all);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "line"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterOption, {
                name: form.pending,
                active: show === form.pending,
                onClick: function onClick() {
                  return _this2.setShow(form.pending);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "line"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterOption, {
                name: form.approved,
                active: show === form.approved,
                onClick: function onClick() {
                  return _this2.setShow(form.approved);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "line"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterOption, {
                name: form.rejected,
                active: show === form.rejected,
                onClick: function onClick() {
                  return _this2.setShow(form.rejected);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "line"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FilterOption, {
                name: form.reserved,
                active: show === form.reserved,
                onClick: function onClick() {
                  return _this2.setShow(form.reserved);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
                className: "form-control border-0 bg-border-5 rounded-10 text-border-50 text-14 py-3 px-4",
                type: "search",
                name: "search",
                value: search,
                onChange: this.inputChangeHandler,
                placeholder: form.search + '...'
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "row",
              children: formsContent
            })
          })]
        })
      });

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "Files",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Backend_UI_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: title,
          subtitle: subtitle,
          icon: icon,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
            main: title
          })
        }), errors, flash, feedback, content]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get(page, show, search) {
      return dispatch((0,_store_actions_backend_files__WEBPACK_IMPORTED_MODULE_7__.getFiles)(page, show, search));
    },
    reset: function reset() {
      return dispatch((0,_store_actions_backend_files__WEBPACK_IMPORTED_MODULE_7__.resetFiles)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Index)));

/***/ }),

/***/ "./resources/js/src/store/actions/backend/files.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/store/actions/backend/files.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteFiles": () => (/* binding */ deleteFiles),
/* harmony export */   "getFile": () => (/* binding */ getFile),
/* harmony export */   "getFiles": () => (/* binding */ getFiles),
/* harmony export */   "getFilesInfo": () => (/* binding */ getFilesInfo),
/* harmony export */   "patchFiles": () => (/* binding */ patchFiles),
/* harmony export */   "postFiles": () => (/* binding */ postFiles),
/* harmony export */   "resetFiles": () => (/* binding */ resetFiles)
/* harmony export */ });
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var start = function start() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FILES_START
  };
};

var success = function success(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FILES_SUCCESS
  }, data);
};

var fail = function fail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FILES_FAIL,
    error: error
  };
};

var resource = function resource(type) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return _shared_utility__WEBPACK_IMPORTED_MODULE_0__.manageResource.apply(void 0, ['files', {
    start: start,
    success: success,
    fail: fail
  }, type].concat(params));
};

var resetFiles = function resetFiles() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FILES_RESET
  };
};
var getFiles = function getFiles(page, show, search) {
  return resource('index', page, show, search);
};
var getFilesInfo = function getFilesInfo() {
  return resource('info');
};
var getFile = function getFile(id) {
  return resource('show', id);
};
var postFiles = function postFiles(data) {
  return resource('post', data);
};
var patchFiles = function patchFiles(id, data) {
  return resource('patch', id, data);
};
var deleteFiles = function deleteFiles(id) {
  return resource('delete', id);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".UI.FormBlock {\r\n    position: relative;\r\n}\r\n\r\n.UI.FormBlock .content {\r\n    position: relative;\r\n    z-index: 2;\r\n    padding: 33px 27px 43px 27px;\r\n    background-color: var(--white);\r\n    border-radius: 30px;\r\n}\r\n\r\n.UI.FormBlock .approved-big-line,\r\n.UI.FormBlock .approved-little-line {\r\n    height: 119px;\r\n    width: 20px;\r\n    background-color: var(--green);\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 35px;\r\n    right: 15px;\r\n    transform: translateX(50%);\r\n}\r\n\r\n.UI.FormBlock .approved-little-line {\r\n    height: 60px;\r\n    width: 4px;\r\n    border-radius: 2px;\r\n    z-index: 3;\r\n    top: 66px;\r\n    right: 21px;\r\n    transform: none;\r\n}\r\n\r\n.UI.FormBlock .icon {\r\n    padding-right: 11.25px;\r\n}\r\n\r\n.UI.FormBlock .green-line {\r\n    width: 30px;\r\n    height: 4px;\r\n    border-radius: 2px;\r\n    background-color: var(--green);\r\n    margin-bottom: 13.18px;\r\n}\r\n\r\n.UI.FormBlock .badger {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 7px 10px 6px 13px;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 8px;\r\n    color: var(--white);\r\n}\r\n\r\n.UI.FormBlock .badger .text {\r\n    padding-right: 11.56px;\r\n}\r\n\r\n.UI.FormBlock .paper {\r\n    border-radius: 10px;\r\n    padding: 9.82px 12.3px;\r\n    height: 135.76px;\r\n    position: relative;\r\n}\r\n\r\n.UI.FormBlock .paper::after {\r\n    content: \"\";\r\n    background-image: url('/images/paper.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    opacity: 0.2;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.UI.FormBlock .paper .group {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.UI.FormBlock .paper .group .title {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    border-radius: 6px;\r\n    color: var(--green);\r\n    margin-bottom: 13px;\r\n    display: inline-block;\r\n    padding: 5px 11px 7px 10px;\r\n    background-color: var(--green-20);\r\n}\r\n\r\n.UI.FormBlock .paper .group .title i {\r\n    font-size: 8px;\r\n    margin-left: 8px;\r\n    color: var(--green-50);\r\n}\r\n\r\n.UI.FormBlock .paper .group .body {\r\n    font-size: 14px;\r\n    color: var(--dark);\r\n}\r\n\r\n.UI.FormBlock .border-line {\r\n    height: 1px;\r\n    background-color: var(--border-20);\r\n}\r\n\r\n.UI.FormBlock .circle-button {\r\n    width: 38px;\r\n    height: 38px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    color: var(--white);\r\n    margin-left: 26px;\r\n}\r\n\r\n.UI.FormBlock .by,\r\n.UI.FormBlock .edited {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.UI.FormBlock .by i,\r\n.UI.FormBlock .edited i {\r\n    color: var(--green);\r\n    font-size: 16px;\r\n    margin-right: 9px;\r\n}\r\n\r\n.UI.FormBlock .by .label,\r\n.UI.FormBlock .edited .label {\r\n    padding-right: 14px;\r\n}\r\n\r\n.UI.FormBlock .by .customer {\r\n    color: var(--primary);\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".UI.PageTitle {\r\n    top: 94px;\r\n    height: 108px;\r\n    display: flex;\r\n    z-index: 1000;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    padding-left: 88px;\r\n    align-items: center;\r\n    background-color: var(--white);\r\n}\r\n\r\n.UI.PageTitle::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--green-10);\r\n}\r\n\r\n.UI.PageTitle .green-line {\r\n    position: absolute;\r\n    width: 9px;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: var(--green);\r\n}\r\n\r\n.UI.PageTitle .icon {\r\n    padding-right: 23px;\r\n    font-size: 44px;\r\n    color: var(--green);\r\n}\r\n\r\n.UI.PageTitle .title {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    .UI.PageTitle+div {\r\n        /* padding: 1.5rem; */\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .UI.PageTitle+div {\r\n        /* padding: 3rem; */\r\n    }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Backend/Customer/Files/Files.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Backend/Customer/Files/Files.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Backend.Customer .Files > .content {\n  padding: 0 34px;\n}\n.Backend.Customer .Files > .content section.files-status {\n  margin: 64px 0;\n}\n.Backend.Customer .Files > .content section.files-status .header {\n  background-color: var(--white);\n  border-radius: 15px;\n  padding: 24px 32px;\n  margin-bottom: 40px;\n  display: flex;\n}\n.Backend.Customer .Files > .content section.files-status .header .filter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  font-size: 16px;\n}\n.Backend.Customer .Files > .content section.files-status .header .filter .option {\n  cursor: pointer;\n  font-weight: 400;\n  transition: all 0.25s;\n}\n.Backend.Customer .Files > .content section.files-status .header .filter .option.active {\n  font-weight: 700;\n}\n.Backend.Customer .Files > .content section.files-status .header .filter .line {\n  width: 2px;\n  height: 30px;\n  margin: 0 21px;\n  border-radius: 1px;\n  background-color: var(--border);\n}", ""]);
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

/***/ "./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_FormBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./FormBlock.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/FormBlock/FormBlock.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_FormBlock_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_FormBlock_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_PageTitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./PageTitle.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/PageTitle/PageTitle.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_PageTitle_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_PageTitle_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Customer/Files/Files.scss":
/*!***********************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Customer/Files/Files.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_Files_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./Files.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Backend/Customer/Files/Files.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_Files_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_Files_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);