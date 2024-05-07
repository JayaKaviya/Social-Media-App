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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _pages_user_profile_update_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/user/profile/update.mjs */ \"./pages/user/profile/update.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\nvar ForgotPasswordForm = function ForgotPasswordForm(_ref) {\n  var handleSubmit = _ref.handleSubmit,\n    email = _ref.email,\n    setEmail = _ref.setEmail,\n    password = _ref.password,\n    setPassword = _ref.setPassword,\n    secret = _ref.secret,\n    setSecret = _ref.setSecret,\n    loading = _ref.loading,\n    page = _ref.page,\n    username = _ref.username,\n    setUsername = _ref.setUsername,\n    about = _ref.about,\n    setAbout = _ref.setAbout,\n    profileUpdate = _ref.profileUpdate;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Username\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        type: \"text\",\n        value: username,\n        onChange: function onChange(e) {\n          return setUsername(e.target.value);\n        },\n        className: \"form-control\",\n        placeholder: \"Enter username\"\n      })]\n    }), \" )}\", profileUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"About\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        type: \"text\",\n        value: about,\n        onChange: function onChange(e) {\n          return setAbout(e.target.value);\n        },\n        className: \"form-control\",\n        placeholder: \"Write about yourself...\"\n      })]\n    }), page !== \"login\" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Your name\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        type: \"text\",\n        value: name,\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        className: \"form-control\",\n        placeholder: \"Enter name\"\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Email address\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: email,\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        },\n        type: \"email\",\n        className: \"form-control\",\n        placeholder: \"Enter email\",\n        disabled: profileUpdate\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n      className: \"form-group p-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n          className: \"text-muted\",\n          children: \"Password\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n        value: password,\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        className: \"form-control\",\n        placeholder: \"Enter password\"\n      })]\n    }), page !== \"login\" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"form-group p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n            className: \"text-muted\",\n            children: \"Pick a question\"\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"select\", {\n          className: \"form-control\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could time travel, which era would you visit first?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What fictional character do you most identify with?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"If you could possess any superpower, what would it be?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What is your dream vacation destination?\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"option\", {\n            children: \"What was the first concert you ever attended?\"\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"small\", {\n          className: \"form-text text-muted\",\n          children: \"In case you forget your password, you can utilize this option to reset it.\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"form-group p-2\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n          value: secret,\n          onChange: function onChange(e) {\n            return setSecret(e.target.value);\n          },\n          type: \"text\",\n          className: \"form-control\",\n          placeholder: \"write your answer here\"\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"form-group p-2\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n        disabled: profileUpdate ? loading : page === \"login\" ? !email || !password : !name || !email || !password || !secret,\n        className: \"btn btn-secondary btn-gradient  col-12\",\n        \"data-mdb-ripple-init\": true,\n        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SyncOutlined, {\n          spin: true,\n          className: \"py-1\"\n        }) : \"Submit\"\n      })\n    })]\n  });\n};\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FDdkJDLElBQUksS0FBSyxPQUFPLEdBQ1osQ0FBQ1AsS0FBSyxJQUFHLENBQUNFLFFBQVEsR0FDbEIsQ0FBQ29CLElBQUksSUFBSSxDQUFDdEIsS0FBSyxJQUFJLENBQUNFLFFBQVEsSUFBSSxDQUFDRSxNQUFRO1FBQy9DVyxTQUFTLEVBQUMsd0NBQXdDO1FBQUMsNEJBQW9CO1FBQUFELFFBQUEsRUFFcEVSLE9BQU8sZ0JBQUdkLHNEQUFBLENBQUNILDJEQUFZO1VBQUNvQyxJQUFJO1VBQUNWLFNBQVMsRUFBQztRQUFNLENBQUMsQ0FBQyxHQUFHO01BQVEsQ0FDbkQ7SUFBQyxDQUNOLENBQUM7RUFBQSxDQUNGLENBQUM7QUFBQSxDQUNSO0FBQUFXLEVBQUEsR0F4SEs3QixrQkFBa0I7QUF5SHhCLCtEQUFlQSxrQkFBa0IsRUFBQztBQUFBLElBQUE2QixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5tanM/ZDRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N5bmNPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuaW1wb3J0IFByb2ZpbGVVcGRhdGUgZnJvbSBcIi4uLy4uL3BhZ2VzL3VzZXIvcHJvZmlsZS91cGRhdGUubWpzXCJcclxuXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZEZvcm0gPSh7XHJcbiAgIGhhbmRsZVN1Ym1pdCwgXHJcbiAgXHJcbiAgIGVtYWlsLHNldEVtYWlsLFxyXG4gICBwYXNzd29yZCxzZXRQYXNzd29yZCxcclxuICAgc2VjcmV0LHNldFNlY3JldCwgXHJcbiAgIGxvYWRpbmcsIFxyXG4gICBwYWdlLCBcclxuICAgdXNlcm5hbWUsc2V0VXNlcm5hbWUsIFxyXG4gICBhYm91dCxzZXRBYm91dCwgIFxyXG4gICBwcm9maWxlVXBkYXRlLFxyXG5cclxufSk9PiggXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gIFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+IFxyXG4gICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJuYW1lXCIvPlxyXG4gICAgPC9kaXY+ICl9XHJcblxyXG4gICAge3Byb2ZpbGVVcGRhdGUgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj4gXHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+QWJvdXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgdmFsdWU9e2Fib3V0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRBYm91dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYWJvdXQgeW91cnNlbGYuLi5cIi8+XHJcbiAgICA8L2Rpdj4gKX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAge3BhZ2UgIT09IFwibG9naW5cIiAmJiAoIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPiBcclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Zb3VyIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIi8+XHJcbiAgICA8L2Rpdj4gICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj4gXHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2ZpbGVVcGRhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICA8L2Rpdj4gXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPiBcclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCIvPlxyXG4gICAgPC9kaXY+IFxyXG5cclxuICAgIHtwYWdlICE9PVwibG9naW5cIiAmJiBcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwLTJcIj4gXHJcbiAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+UGljayBhIHF1ZXN0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zbWFsbD4gXHJcbiAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPklmIHlvdSBjb3VsZCB0aW1lIHRyYXZlbCwgd2hpY2ggZXJhIHdvdWxkIHlvdSB2aXNpdCBmaXJzdD88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldoYXQgZmljdGlvbmFsIGNoYXJhY3RlciBkbyB5b3UgbW9zdCBpZGVudGlmeSB3aXRoPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SWYgeW91IGNvdWxkIHBvc3Nlc3MgYW55IHN1cGVycG93ZXIsIHdoYXQgd291bGQgaXQgYmU/PC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2hhdCBpcyB5b3VyIGRyZWFtIHZhY2F0aW9uIGRlc3RpbmF0aW9uPzwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldoYXQgd2FzIHRoZSBmaXJzdCBjb25jZXJ0IHlvdSBldmVyIGF0dGVuZGVkPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgPC9zZWxlY3Q+IFxyXG4gICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICBJbiBjYXNlIHlvdSBmb3JnZXQgeW91ciBwYXNzd29yZCwgeW91IGNhbiB1dGlsaXplIHRoaXMgb3B0aW9uIHRvIHJlc2V0IGl0LlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgIHZhbHVlPXtzZWNyZXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwid3JpdGUgeW91ciBhbnN3ZXIgaGVyZVwiIC8+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8Lz4gfVxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICA8YnV0dG9uIFxyXG4gICAgZGlzYWJsZWQ9eyBcclxuICAgICAgcHJvZmlsZVVwZGF0ZSA/IGxvYWRpbmcgOiBcclxuICAgICAgcGFnZSA9PT0gXCJsb2dpblwiIFxyXG4gICAgICAgID8gIWVtYWlsfHwgIXBhc3N3b3JkXHJcbiAgICAgICAgOiAhbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFzZWNyZXQgfVxyXG4gICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWdyYWRpZW50ICBjb2wtMTJcIiBkYXRhLW1kYi1yaXBwbGUtaW5pdD5cclxuICAgICAgey8qIFN1Ym1pdCAqL30gXHJcbiAgICAgIHtsb2FkaW5nID8gPFN5bmNPdXRsaW5lZCBzcGluIGNsYXNzTmFtZT1cInB5LTFcIi8+IDogXCJTdWJtaXRcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+IFxyXG4pIFxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZEZvcm07Il0sIm5hbWVzIjpbIlN5bmNPdXRsaW5lZCIsIlByb2ZpbGVVcGRhdGUiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJGb3Jnb3RQYXNzd29yZEZvcm0iLCJfcmVmIiwiaGFuZGxlU3VibWl0IiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJsb2FkaW5nIiwicGFnZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJhYm91dCIsInNldEFib3V0IiwicHJvZmlsZVVwZGF0ZSIsIm9uU3VibWl0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJzZXROYW1lIiwiZGlzYWJsZWQiLCJzcGluIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/ForgotPasswordForm.mjs\n"));

/***/ })

});