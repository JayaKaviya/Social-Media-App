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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _pages_user_profile_update_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/user/profile/update.mjs */ \"./pages/user/profile/update.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nvar ForgotPasswordForm = function ForgotPasswordForm(_ref) {\n  var handleSubmit = _ref.handleSubmit,\n    email = _ref.email,\n    setEmail = _ref.setEmail,\n    newPassword = _ref.newPassword,\n    setNewPassword = _ref.setNewPassword,\n    secret = _ref.secret,\n    setSecret = _ref.setSecret,\n    loading = _ref.loading,\n    page = _ref.page,\n    username = _ref.username,\n    setUsername = _ref.setUsername,\n    about = _ref.about,\n    setAbout = _ref.setAbout,\n    profileUpdate = _ref.profileUpdate;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Email address\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: email,\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        type: \"email\",\n        className: \"form-control\",\n        placeholder: \"Enter email\",\n        disabled: profileUpdate\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"New Password\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: newPassword,\n        onChange: function onChange(e) {\n          return setNewPassword(e.target.value);\n        },\n        type: \"password\",\n        className: \"form-control\",\n        placeholder: \"Enter new password\"\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"form-group p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            className: \"text-muted\",\n            children: \"Pick a question\"\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"select\", {\n          className: \"form-control\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could time travel, which era would you visit first?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What fictional character do you most identify with?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could possess any superpower, what would it be?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What is your dream vacation destination?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What was the first concert you ever attended?\"\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          className: \"form-text text-muted\",\n          children: \"In case you forget your password, you can utilize this option to reset it.\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"form-group p-2\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n          value: secret,\n          onChange: function onChange(e) {\n            return setSecret(e.target.value);\n          },\n          type: \"text\",\n          className: \"form-control\",\n          placeholder: \"write your answer here\"\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"form-group p-2\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n        disabled: !email || !newPassword || !secret || loading,\n        className: \"btn btn-secondary btn-gradient  col-12\",\n        \"data-mdb-ripple-init\": true,\n        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SyncOutlined, {\n          spin: true,\n          className: \"py-1\"\n        }) : \"Submit\"\n      })\n    })]\n  });\n};\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9Gb3Jnb3RQYXNzd29yZEZvcm0ubWpzP2Q0ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTeW5jT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmltcG9ydCBQcm9maWxlVXBkYXRlIGZyb20gXCIuLi8uLi9wYWdlcy91c2VyL3Byb2ZpbGUvdXBkYXRlLm1qc1wiXHJcblxyXG5cclxuY29uc3QgRm9yZ290UGFzc3dvcmRGb3JtID0oe1xyXG4gICBoYW5kbGVTdWJtaXQsIFxyXG4gIFxyXG4gICBlbWFpbCxzZXRFbWFpbCxcclxuICAgbmV3UGFzc3dvcmQsc2V0TmV3UGFzc3dvcmQsXHJcbiAgIHNlY3JldCxzZXRTZWNyZXQsIFxyXG4gICBsb2FkaW5nLCBcclxuICAgcGFnZSwgXHJcbiAgIHVzZXJuYW1lLHNldFVzZXJuYW1lLCBcclxuICAgYWJvdXQsc2V0QWJvdXQsICBcclxuICAgcHJvZmlsZVVwZGF0ZSxcclxuXHJcbn0pPT4oIFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+ICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj4gXHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2ZpbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICA8L2Rpdj4gXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPiBcclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuZXcgcGFzc3dvcmRcIi8+XHJcbiAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPiBcclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5QaWNrIGEgcXVlc3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NtYWxsPiBcclxuICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SWYgeW91IGNvdWxkIHRpbWUgdHJhdmVsLCB3aGljaCBlcmEgd291bGQgeW91IHZpc2l0IGZpcnN0Pzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2hhdCBmaWN0aW9uYWwgY2hhcmFjdGVyIGRvIHlvdSBtb3N0IGlkZW50aWZ5IHdpdGg/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JZiB5b3UgY291bGQgcG9zc2VzcyBhbnkgc3VwZXJwb3dlciwgd2hhdCB3b3VsZCBpdCBiZT88L29wdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGlzIHlvdXIgZHJlYW0gdmFjYXRpb24gZGVzdGluYXRpb24/PC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2hhdCB3YXMgdGhlIGZpcnN0IGNvbmNlcnQgeW91IGV2ZXIgYXR0ZW5kZWQ/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgIEluIGNhc2UgeW91IGZvcmdldCB5b3VyIHBhc3N3b3JkLCB5b3UgY2FuIHV0aWxpemUgdGhpcyBvcHRpb24gdG8gcmVzZXQgaXQuXHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj5cclxuICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgdmFsdWU9e3NlY3JldH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIiAgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ3cml0ZSB5b3VyIGFuc3dlciBoZXJlXCIgLz5cclxuICAgIDwvZGl2PiBcclxuICAgIDwvPiBcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgIGRpc2FibGVkPXshZW1haWwgfHwgIW5ld1Bhc3N3b3JkIHx8ICFzZWNyZXQgfHwgbG9hZGluZ31cclxuICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ncmFkaWVudCAgY29sLTEyXCIgZGF0YS1tZGItcmlwcGxlLWluaXQ+XHJcbiAgICAgIHsvKiBTdWJtaXQgKi99IFxyXG4gICAgICB7bG9hZGluZyA/IDxTeW5jT3V0bGluZWQgc3BpbiBjbGFzc05hbWU9XCJweS0xXCIvPiA6IFwiU3VibWl0XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPiBcclxuKSBcclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRGb3JtOyJdLCJuYW1lcyI6WyJTeW5jT3V0bGluZWQiLCJQcm9maWxlVXBkYXRlIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiRm9yZ290UGFzc3dvcmRGb3JtIiwiX3JlZiIsImhhbmRsZVN1Ym1pdCIsImVtYWlsIiwic2V0RW1haWwiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwibG9hZGluZyIsInBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYWJvdXQiLCJzZXRBYm91dCIsInByb2ZpbGVVcGRhdGUiLCJvblN1Ym1pdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsInNwaW4iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/ForgotPasswordForm.mjs\n"));

/***/ })

});