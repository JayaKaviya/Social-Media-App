"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/forgot-password",{

/***/ "./components/forms/ForgotPasswordForm.mjs":
/*!*************************************************!*\
  !*** ./components/forms/ForgotPasswordForm.mjs ***!
  \*************************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _pages_user_profile_update_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/user/profile/update.mjs */ \"./pages/user/profile/update.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nvar ForgotPasswordForm = function ForgotPasswordForm(_ref) {\n  var handleSubmit = _ref.handleSubmit,\n    email = _ref.email,\n    setEmail = _ref.setEmail,\n    password = _ref.password,\n    setPassword = _ref.setPassword,\n    secret = _ref.secret,\n    setSecret = _ref.setSecret,\n    loading = _ref.loading,\n    page = _ref.page,\n    username = _ref.username,\n    setUsername = _ref.setUsername,\n    about = _ref.about,\n    setAbout = _ref.setAbout,\n    profileUpdate = _ref.profileUpdate;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Email address\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: email,\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        type: \"email\",\n        className: \"form-control\",\n        placeholder: \"Enter email\",\n        disabled: profileUpdate\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \" New Password\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: password,\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        className: \"form-control\",\n        placeholder: \"Enter password\"\n      })]\n    }), page !== \"login\" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"form-group p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            className: \"text-muted\",\n            children: \"Pick a question\"\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"select\", {\n          className: \"form-control\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could time travel, which era would you visit first?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What fictional character do you most identify with?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could possess any superpower, what would it be?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What is your dream vacation destination?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What was the first concert you ever attended?\"\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          className: \"form-text text-muted\",\n          children: \"In case you forget your password, you can utilize this option to reset it.\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"form-group p-2\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n          value: secret,\n          onChange: function onChange(e) {\n            return setSecret(e.target.value);\n          },\n          type: \"text\",\n          className: \"form-control\",\n          placeholder: \"write your answer here\"\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"form-group p-2\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n        disabled: profileUpdate ? loading : page === \"login\" ? !email || !password : !name || !email || !password || !secret,\n        className: \"btn btn-secondary btn-gradient  col-12\",\n        \"data-mdb-ripple-init\": true,\n        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SyncOutlined, {\n          spin: true,\n          className: \"py-1\"\n        }) : \"Submit\"\n      })\n    })]\n  });\n};\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7RUFBQSxDQUNGLENBQUM7QUFBQSxDQUNSO0FBQUFVLEVBQUEsR0F0Rks1QixrQkFBa0I7QUF1RnhCLCtEQUFlQSxrQkFBa0IsRUFBQztBQUFBLElBQUE0QixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5tanM/ZDRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N5bmNPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuaW1wb3J0IFByb2ZpbGVVcGRhdGUgZnJvbSBcIi4uLy4uL3BhZ2VzL3VzZXIvcHJvZmlsZS91cGRhdGUubWpzXCJcclxuXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZEZvcm0gPSh7XHJcbiAgIGhhbmRsZVN1Ym1pdCwgXHJcbiAgXHJcbiAgIGVtYWlsLHNldEVtYWlsLFxyXG4gICBwYXNzd29yZCxzZXRQYXNzd29yZCxcclxuICAgc2VjcmV0LHNldFNlY3JldCwgXHJcbiAgIGxvYWRpbmcsIFxyXG4gICBwYWdlLCBcclxuICAgdXNlcm5hbWUsc2V0VXNlcm5hbWUsIFxyXG4gICBhYm91dCxzZXRBYm91dCwgIFxyXG4gICBwcm9maWxlVXBkYXRlLFxyXG5cclxufSk9PiggXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPiBcclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICBkaXNhYmxlZD17cHJvZmlsZVVwZGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgIDwvZGl2PiBcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+IFxyXG4gICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPiBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiLz5cclxuICAgIDwvZGl2PiBcclxuXHJcbiAgICB7cGFnZSAhPT1cImxvZ2luXCIgJiYgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+IFxyXG4gICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlBpY2sgYSBxdWVzdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+IFxyXG4gICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JZiB5b3UgY291bGQgdGltZSB0cmF2ZWwsIHdoaWNoIGVyYSB3b3VsZCB5b3UgdmlzaXQgZmlyc3Q/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGZpY3Rpb25hbCBjaGFyYWN0ZXIgZG8geW91IG1vc3QgaWRlbnRpZnkgd2l0aD88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPklmIHlvdSBjb3VsZCBwb3NzZXNzIGFueSBzdXBlcnBvd2VyLCB3aGF0IHdvdWxkIGl0IGJlPzwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldoYXQgaXMgeW91ciBkcmVhbSB2YWNhdGlvbiBkZXN0aW5hdGlvbj88L29wdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XaGF0IHdhcyB0aGUgZmlyc3QgY29uY2VydCB5b3UgZXZlciBhdHRlbmRlZD88L29wdGlvbj5cclxuICAgICAgICAgICAgIDwvc2VsZWN0PiBcclxuICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgSW4gY2FzZSB5b3UgZm9yZ2V0IHlvdXIgcGFzc3dvcmQsIHlvdSBjYW4gdXRpbGl6ZSB0aGlzIG9wdGlvbiB0byByZXNldCBpdC5cclxuICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICB2YWx1ZT17c2VjcmV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiICBcclxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIndyaXRlIHlvdXIgYW5zd2VyIGhlcmVcIiAvPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPC8+IH1cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgIGRpc2FibGVkPXsgXHJcbiAgICAgIHByb2ZpbGVVcGRhdGUgPyBsb2FkaW5nIDogXHJcbiAgICAgIHBhZ2UgPT09IFwibG9naW5cIiBcclxuICAgICAgICA/ICFlbWFpbHx8ICFwYXNzd29yZFxyXG4gICAgICAgIDogIW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhc2VjcmV0IH1cclxuICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ncmFkaWVudCAgY29sLTEyXCIgZGF0YS1tZGItcmlwcGxlLWluaXQ+XHJcbiAgICAgIHsvKiBTdWJtaXQgKi99IFxyXG4gICAgICB7bG9hZGluZyA/IDxTeW5jT3V0bGluZWQgc3BpbiBjbGFzc05hbWU9XCJweS0xXCIvPiA6IFwiU3VibWl0XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPiBcclxuKSBcclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRGb3JtOyJdLCJuYW1lcyI6WyJTeW5jT3V0bGluZWQiLCJQcm9maWxlVXBkYXRlIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiRm9yZ290UGFzc3dvcmRGb3JtIiwiX3JlZiIsImhhbmRsZVN1Ym1pdCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwibG9hZGluZyIsInBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYWJvdXQiLCJzZXRBYm91dCIsInByb2ZpbGVVcGRhdGUiLCJvblN1Ym1pdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsIm5hbWUiLCJzcGluIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/ForgotPasswordForm.mjs\n"));

/***/ })

});