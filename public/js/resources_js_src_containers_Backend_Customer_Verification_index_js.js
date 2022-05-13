"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_Customer_Verification_index_js"],{

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

/***/ "./resources/js/src/components/UI/Button/CenterButton/CenterButton.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/UI/Button/CenterButton/CenterButton.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      color = _ref.color,
      icon = _ref.icon,
      className = _ref.className,
      size = _ref.size,
      type = _ref.type,
      left = _ref.left;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: color,
    size: size,
    type: type,
    onClick: onClick,
    className: "rounded-15 px-5 py-4 text-25 text-700 ".concat(className),
    children: [left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      className: "fas fa-" + icon + " mr-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    }), !left && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
      className: "fas fa-" + icon + " ml-4"
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Customer/Verification/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Customer/Verification/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Button/CenterButton/CenterButton */ "./resources/js/src/components/UI/Button/CenterButton/CenterButton.js");
/* harmony import */ var _store_actions_backend_verifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/actions/backend/verifications */ "./resources/js/src/store/actions/backend/verifications.js");
/* harmony import */ var _Verification_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Verification.css */ "./resources/js/src/containers/Backend/Customer/Verification/Verification.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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











var FileType = function FileType(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      selected = _ref.selected,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    onClick: onClick,
    className: 'FileType' + (selected ? " selected" : ""),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-500 mb-1",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      style: {
        opacity: .5
      },
      children: subtitle
    })]
  });
};

var Image = function Image(_ref2) {
  var title = _ref2.title,
      name = _ref2.name,
      photo = _ref2.photo,
      onClick = _ref2.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "Image",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      onClick: onClick,
      id: 'embed-' + name,
      className: "image embed-responsive embed-responsive-16by9",
      style: {
        backgroundImage: 'url("' + photo + '")'
      },
      children: !photo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
        className: "far fa-image fa-fw text-62"
      })
    })]
  });
};

var initialState = {
  filetype: '',
  photo1: null,
  photo2: null,
  selfie: null,
  page: 1,
  add: false
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

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({}, initialState));

    _defineProperty(_assertThisInitialized(_this), "saveHandler", function (e) {
      e.preventDefault();

      _this.props.post(e.target);
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangeHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          files = _e$target.files;
      if (files) _this.readURL(e.target);

      _this.setState(_defineProperty({}, name, files ? files[0] : value));
    });

    _defineProperty(_assertThisInitialized(_this), "readURL", function (input) {
      if (input.files && input.files[0]) {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
          document.getElementById("embed-".concat(input.name)).style.backgroundImage = "url('".concat(e.target.result, "')");
        };

        reader.readAsDataURL(file); // convert to base64 string
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fileUpload", function (name) {
      return document.getElementById(name).click();
    });

    _defineProperty(_assertThisInitialized(_this), "filetypeSelect", function (value) {
      _this.setState({
        filetype: value
      }, function () {
        document.querySelector('[name=filetype]').value = value;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToPage", function (page) {
      return _this.setState({
        page: page
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: // Lifecycle methods
    function componentDidMount() {
      this.props.reset();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.backend.verifications.message && this.props.backend.verifications.message && this.props.backend.verifications.message.type === 'success' && !this.props.edit) {
        if (this.state.add) this.setState(_objectSpread({}, initialState));else this.props.history.push({
          pathname: '/customer/verifications',
          state: {
            message: this.props.backend.verifications.message
          }
        });
      }

      if (!prevProps.backend.verifications.verification && this.props.backend.verifications.verification) {
        var verification = this.props.backend.verifications.verification;
        this.setState(_objectSpread({}, verification));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$content$c = _this$props.content.cms.pages.backend.pages.verifications,
          title = _this$props$content$c.title,
          form = _this$props$content$c.form,
          _this$props$backend$v = _this$props.backend.verifications,
          loading = _this$props$backend$v.loading,
          error = _this$props$backend$v.error,
          message = _this$props$backend$v.message,
          _this$props$auth$data = _this$props.auth.data,
          is_verified = _this$props$auth$data.is_verified,
          under_verification = _this$props$auth$data.under_verification;
      var _this$state = this.state,
          filetype = _this$state.filetype,
          photo1 = _this$state.photo1,
          photo2 = _this$state.photo2,
          selfie = _this$state.selfie,
          page = _this$state.page;
      var content, errors, redirect;
      if (is_verified || under_verification) redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
        to: "/customer/dashboard"
      });
      if (loading) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      });else {
        if (message && message.type === 'success') redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
          to: "/customer/verification/success"
        });
        errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_3__["default"], {
            err: error
          })
        });
        content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_2__["default"], {
            message: message
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: page === 1 ? "d-block" : "d-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "pb-3 mb-5",
              children: form.filetype
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FileType, {
              title: form.filetypes.nic.title,
              subtitle: form.filetypes.nic.subtitle,
              onClick: function onClick() {
                return _this2.filetypeSelect('nic');
              },
              selected: filetype === 'nic'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "border-top border-bottom",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FileType, {
                title: form.filetypes.pp.title,
                subtitle: form.filetypes.pp.subtitle,
                onClick: function onClick() {
                  return _this2.filetypeSelect('pp');
                },
                selected: filetype === 'pp'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "border-bottom",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FileType, {
                title: form.filetypes.dl.title,
                subtitle: form.filetypes.dl.subtitle,
                onClick: function onClick() {
                  return _this2.filetypeSelect('dl');
                },
                selected: filetype === 'dl'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FileType, {
              title: form.filetypes.rp.title,
              subtitle: form.filetypes.rp.subtitle,
              onClick: function onClick() {
                return _this2.filetypeSelect('rp');
              },
              selected: filetype === 'rp'
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "pt-1 mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "p-1 pr-5 d-flex align-items-center rounded-12 mandatory",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "py-4 pl-4 pr-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fas fa-exclamation-triangle mt-2 text-43"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "pb-3 pl-1 text-11",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                    className: "text-gray",
                    children: [form.your_file, "."]
                  }), ' ']
                })]
              })
            }), filetype !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "hidden",
                name: "filetype",
                value: filetype,
                onChange: this.inputChangeHandler
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                color: "green",
                type: "button",
                onClick: function onClick() {
                  return _this2.goToPage(2);
                },
                className: "btn-block py-3",
                icon: "next",
                children: form.next
              })]
            })]
          }), page === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "pb-3 mb-5",
              children: form.images
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Image, {
              name: "selfie",
              title: form.selfie,
              onClick: function onClick() {
                return _this2.fileUpload('selfie');
              },
              photo: selfie
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Image, {
              name: "photo1",
              title: form.filetypes[filetype].photo1,
              onClick: function onClick() {
                return _this2.fileUpload('photo1');
              },
              photo: photo1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Image, {
              name: "photo2",
              title: form.filetypes[filetype].photo2,
              onClick: function onClick() {
                return _this2.fileUpload('photo2');
              },
              photo: photo2
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "pt-1 mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "p-1 pr-5 d-flex align-items-center rounded-12 mandatory",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "py-4 pl-4 pr-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fas fa-exclamation-triangle mt-2 text-43"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "pb-3 pl-1 text-11",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                    className: "text-gray",
                    children: [form.check_info, "."]
                  }), ' ']
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                color: "red",
                type: "button",
                onClick: function onClick() {
                  return _this2.goToPage(1);
                },
                className: "btn-block py-3 mb-3",
                icon: "previous",
                children: form.previous
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UI_Button_CenterButton_CenterButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                color: "orange",
                className: "btn-block py-3",
                icon: "validate",
                children: form.validate
              })]
            })]
          })]
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "Backend Customer Verification",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "d-flex align-items-center mb-4 pb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "pr-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
              className: "fas fa-chevron-left text-13 cursor-pointer",
              onClick: this.props.history.goBack
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "text-14 text-500",
            children: title
          })]
        }), errors, redirect, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
          onSubmit: this.saveHandler,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            type: "file",
            id: "selfie",
            name: "selfie",
            className: "d-none",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            type: "file",
            id: "photo1",
            name: "photo1",
            className: "d-none",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
            type: "file",
            id: "photo2",
            name: "photo2",
            className: "d-none",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg"
          }), content]
        })]
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
    post: function post(data) {
      return dispatch((0,_store_actions_backend_verifications__WEBPACK_IMPORTED_MODULE_6__.postVerifications)(data));
    },
    reset: function reset() {
      return dispatch((0,_store_actions_backend_verifications__WEBPACK_IMPORTED_MODULE_6__.resetVerifications)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Index)));

/***/ }),

/***/ "./resources/js/src/store/actions/backend/verifications.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/store/actions/backend/verifications.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postVerifications": () => (/* binding */ postVerifications),
/* harmony export */   "resetVerifications": () => (/* binding */ resetVerifications)
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
var resetVerifications = function resetVerifications() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.VERIFICATIONS_RESET
  };
};

var verificationsStart = function verificationsStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.VERIFICATIONS_START
  };
};

var verificationsSuccess = function verificationsSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.VERIFICATIONS_SUCCESS
  }, data);
};

var verificationsFail = function verificationsFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.VERIFICATIONS_FAIL,
    error: error
  };
};

var postVerifications = function postVerifications(data) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, getState) {
      var role, token, form, res, resData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(verificationsStart());
              role = getState().auth.role;
              _context.prev = 2;
              token = localStorage.getItem('token');
              form = new FormData(data);
              _context.next = 7;
              return fetch("".concat(prefix + role, "/verifications"), {
                method: 'POST',
                body: form,
                headers: {
                  Authorization: token
                }
              });

            case 7:
              res = _context.sent;
              _context.next = 10;
              return res.json();

            case 10:
              resData = _context.sent;

              if (!(res.status === 422)) {
                _context.next = 13;
                break;
              }

              throw new Error(Object.values(resData.errors).join('\n'));

            case 13:
              dispatch(verificationsSuccess(resData));
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              dispatch(verificationsFail(_context.t0));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 16]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/Customer/Verification/Verification.css":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/Customer/Verification/Verification.css ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Backend.Customer.Verification .FileType {\r\n    padding: 0.5rem 1rem;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Backend.Customer.Verification .FileType.selected {\r\n    background-color: var(--orange-80);\r\n}\r\n\r\n.Backend.Customer.Verification .Image {\r\n    margin-bottom: 33px;\r\n}\r\n\r\n.Backend.Customer.Verification .Image .title {\r\n    padding-left: 4px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.Backend.Customer.Verification .Image .image {\r\n    background-size: cover;\r\n    cursor: pointer;\r\n    background-color: var(--white-5);\r\n    color: var(--white-5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 13px;\r\n}\r\n\r\n.Backend.Customer.Verification.Success .message {\r\n    background-color: var(--white-5);\r\n}\r\n", ""]);
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

/***/ "./resources/js/src/containers/Backend/Customer/Verification/Verification.css":
/*!************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Customer/Verification/Verification.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Verification_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Verification.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/Customer/Verification/Verification.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Verification_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Verification_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);