"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _Users_a0794527_Documents_marta_starwarsapp2_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/a0794527/Documents/marta/starwarsapp2/pages/[slug].tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _this = undefined;\n\n\n\nvar moduleBannerFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = (0,_Users_a0794527_Documents_marta_starwarsapp2_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  fragment ModuleBannerFragment on ModuleBanner {\\n    __typename\\n    sys {\\n      id\\n    }\\n    title\\n    isClaimModule\\n  }\\n\"])));\nvar moduleTabsInfoFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject2 || (_templateObject2 = (0,_Users_a0794527_Documents_marta_starwarsapp2_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  fragment ModuleTabsInfoFragment on ModuleTabsInfo {\\n    __typename\\n    sys {\\n      id\\n    }\\n    slug\\n  }\\n\"])));\nvar applicationModeFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject3 || (_templateObject3 = (0,_Users_a0794527_Documents_marta_starwarsapp2_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  fragment ApplicationModeFragment on ApplicationMode {\\n    name\\n    uuid\\n  }\\n\"])));\n\nvar SeosemPage = function SeosemPage(_ref) {\n  var list = _ref.list;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: \"hola\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = SeosemPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SeosemPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SeosemPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBR0EsSUFBTUMsb0JBQW9CLEdBQUdELG1EQUFILHVWQUExQjtBQVVBLElBQU1FLHNCQUFzQixHQUFHRixtREFBSCx5VUFBNUI7QUFTQSxJQUFNRyx1QkFBdUIsR0FBR0gsbURBQUgseVNBQTdCOztBQU9BLElBQU1JLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekMsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1EOztBQWlETiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bc2x1Z10udHN4Pzc4YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuXG5jb25zdCBtb2R1bGVCYW5uZXJGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgTW9kdWxlQmFubmVyRnJhZ21lbnQgb24gTW9kdWxlQmFubmVyIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgc3lzIHtcbiAgICAgIGlkXG4gICAgfVxuICAgIHRpdGxlXG4gICAgaXNDbGFpbU1vZHVsZVxuICB9XG5gO1xuY29uc3QgbW9kdWxlVGFic0luZm9GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgTW9kdWxlVGFic0luZm9GcmFnbWVudCBvbiBNb2R1bGVUYWJzSW5mbyB7XG4gICAgX190eXBlbmFtZVxuICAgIHN5cyB7XG4gICAgICBpZFxuICAgIH1cbiAgICBzbHVnXG4gIH1cbmA7XG5jb25zdCBhcHBsaWNhdGlvbk1vZGVGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgQXBwbGljYXRpb25Nb2RlRnJhZ21lbnQgb24gQXBwbGljYXRpb25Nb2RlIHtcbiAgICBuYW1lXG4gICAgdXVpZFxuICB9XG5gO1xuXG5jb25zdCBTZW9zZW1QYWdlOiBOZXh0UGFnZSA9ICh7IGxpc3QgfSkgPT4ge1xuICByZXR1cm4gPGRpdj5ob2xhPC9kaXY+O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSB7XG4gICAgICAgIHNlb3NlbVBhZ2VDb2xsZWN0aW9uIHtcbiAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgfSk7XG5cbiAgY29uc3QgeyBzZW9zZW1QYWdlQ29sbGVjdGlvbjogeyBpdGVtcyB9fSA9IGRhdGE7XG4gIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiB2YWx1ZS5zbHVnLnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFt7IHBhcmFtczogeyBzbHVnOiBcImluZHVzdHJ5XCIsIHNsdWc6IFwibWFya2V0aW5nLWRlc2lnbi1ldmVudHNcIn0gfV0sXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vc3dhcGkuZGV2L2FwaS9wZW9wbGVcIik7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGxpc3Q6IHJlc3VsdHMsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vvc2VtUGFnZTtcbiJdLCJuYW1lcyI6WyJncWwiLCJtb2R1bGVCYW5uZXJGcmFnbWVudCIsIm1vZHVsZVRhYnNJbmZvRnJhZ21lbnQiLCJhcHBsaWNhdGlvbk1vZGVGcmFnbWVudCIsIlNlb3NlbVBhZ2UiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ })

});