"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./lib/apollo.ts":
/*!***********************!*\
  !*** ./lib/apollo.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SPACE = process.env.CONTENTFUL_SPACE;\nconst TOKEN = process.env.CONTENTFUL_CDA_TOKEN;\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`,\n  headers: {\n    Authorization: `Bearer ${TOKEN}`\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUUsS0FBSyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQTFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBQTFCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlSLHdEQUFKLENBQWlCO0FBQzlCUyxFQUFBQSxLQUFLLEVBQUUsSUFBSVIseURBQUosRUFEdUI7QUFFOUJTLEVBQUFBLEdBQUcsRUFBRyxvREFBbURSLEtBQU0sc0JBRmpDO0FBRzlCUyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsYUFBYSxFQUFHLFVBQVNOLEtBQU07QUFEeEI7QUFIcUIsQ0FBakIsQ0FBZjtBQVFBLGlFQUFlRSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL2Fwb2xsby50cz82NTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBTUEFDRSA9IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0U7XG5jb25zdCBUT0tFTiA9IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQ0RBX1RPS0VOO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIHVyaTogYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke1NQQUNFfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUT0tFTn1gLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiU1BBQ0UiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVOVEZVTF9TUEFDRSIsIlRPS0VOIiwiQ09OVEVOVEZVTF9DREFfVE9LRU4iLCJjbGllbnQiLCJjYWNoZSIsInVyaSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/apollo.ts\n");

/***/ }),

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/a0794527/Documents/marta/starwarsapp2/pages/[slug].tsx\";\n\n\n\nconst moduleBannerFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  fragment ModuleBannerFragment on ModuleBanner {\n    __typename\n    sys {\n      id\n    }\n    title\n    isClaimModule\n  }\n`;\nconst moduleTabsInfoFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  fragment ModuleTabsInfoFragment on ModuleTabsInfo {\n    __typename\n    sys {\n      id\n    }\n    slug\n  }\n`;\nconst applicationModeFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  fragment ApplicationModeFragment on ApplicationMode {\n    name\n    uuid\n  }\n`;\n\nconst SeosemPage = ({\n  list\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"hola\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  const {\n    data\n  } = await _lib_apollo__WEBPACK_IMPORTED_MODULE_1__.default.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n      query {\n        seosemPageCollection {\n          items {\n            slug\n          }\n        }\n      }\n    `\n  });\n  const {\n    seosemPageCollection: {\n      items\n    }\n  } = data;\n  const paths = items.map(value => {\n    return {\n      params: {\n        slug: value.slug.substring(1)\n      }\n    };\n  });\n  return {\n    paths: [{\n      params: {\n        slug1: \"industry\",\n        slug2: \"marketing-design-events\"\n      }\n    }],\n    fallback: false\n  };\n};\nconst getStaticProps = async context => {\n  try {\n    const response = await fetch(\"https://swapi.dev/api/people\");\n    const {\n      results\n    } = await response.json();\n    return {\n      props: {\n        list: results\n      }\n    };\n  } catch (e) {\n    return {\n      props: {\n        notFound: true\n      }\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeosemPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsb0JBQW9CLEdBQUdGLCtDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBVUEsTUFBTUcsc0JBQXNCLEdBQUdILCtDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSQTtBQVNBLE1BQU1JLHVCQUF1QixHQUFHSiwrQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7O0FBT0EsTUFBTUssVUFBb0IsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFjO0FBQ3pDLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlPLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBVyxNQUFNUCxzREFBQSxDQUFhO0FBQ2xDUSxJQUFBQSxLQUFLLEVBQUVULCtDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRzQyxHQUFiLENBQXZCO0FBWUEsUUFBTTtBQUFFVSxJQUFBQSxvQkFBb0IsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBQXhCLE1BQXFDSCxJQUEzQztBQUNBLFFBQU1JLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVdDLEtBQUQsSUFBZ0I7QUFDdEMsV0FBTztBQUNMQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNFLElBQU4sQ0FBV0MsU0FBWCxDQUFxQixDQUFyQjtBQURBO0FBREgsS0FBUDtBQUtELEdBTmEsQ0FBZDtBQU9BLFNBQU87QUFDTEwsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRUcsTUFBQUEsTUFBTSxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFBQSxLQUFLLEVBQUU7QUFBNUI7QUFBVixLQUFELENBREY7QUFFTEMsSUFBQUEsUUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlELENBekJNO0FBMkJBLE1BQU1DLGNBQThCLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUMvRCxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4QkFBRCxDQUE1QjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFjLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUExQjtBQUNBLFdBQU87QUFDTEMsTUFBQUEsS0FBSyxFQUFFO0FBQ0xyQixRQUFBQSxJQUFJLEVBQUVtQjtBQUREO0FBREYsS0FBUDtBQUtELEdBUkQsQ0FRRSxPQUFPRyxDQUFQLEVBQWU7QUFDZixXQUFPO0FBQ0xELE1BQUFBLEtBQUssRUFBRTtBQUNMRSxRQUFBQSxRQUFRLEVBQUU7QUFETDtBQURGLEtBQVA7QUFLRDtBQUNGLENBaEJNO0FBa0JQLGlFQUFleEIsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL1tzbHVnXS50c3g/NzhiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9saWIvYXBvbGxvXCI7XG5cbmNvbnN0IG1vZHVsZUJhbm5lckZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBNb2R1bGVCYW5uZXJGcmFnbWVudCBvbiBNb2R1bGVCYW5uZXIge1xuICAgIF9fdHlwZW5hbWVcbiAgICBzeXMge1xuICAgICAgaWRcbiAgICB9XG4gICAgdGl0bGVcbiAgICBpc0NsYWltTW9kdWxlXG4gIH1cbmA7XG5jb25zdCBtb2R1bGVUYWJzSW5mb0ZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBNb2R1bGVUYWJzSW5mb0ZyYWdtZW50IG9uIE1vZHVsZVRhYnNJbmZvIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgc3lzIHtcbiAgICAgIGlkXG4gICAgfVxuICAgIHNsdWdcbiAgfVxuYDtcbmNvbnN0IGFwcGxpY2F0aW9uTW9kZUZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBBcHBsaWNhdGlvbk1vZGVGcmFnbWVudCBvbiBBcHBsaWNhdGlvbk1vZGUge1xuICAgIG5hbWVcbiAgICB1dWlkXG4gIH1cbmA7XG5cbmNvbnN0IFNlb3NlbVBhZ2U6IE5leHRQYWdlID0gKHsgbGlzdCB9KSA9PiB7XG4gIHJldHVybiA8ZGl2PmhvbGE8L2Rpdj47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHtcbiAgICAgICAgc2Vvc2VtUGFnZUNvbGxlY3Rpb24ge1xuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KTtcblxuICBjb25zdCB7IHNlb3NlbVBhZ2VDb2xsZWN0aW9uOiB7IGl0ZW1zIH19ID0gZGF0YTtcbiAgY29uc3QgcGF0aHMgPSBpdGVtcy5tYXAoKHZhbHVlOiBhbnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHZhbHVlLnNsdWcuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IHNsdWcxOiBcImluZHVzdHJ5XCIsIHNsdWcyOiBcIm1hcmtldGluZy1kZXNpZ24tZXZlbnRzXCJ9IH1dLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlXCIpO1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBsaXN0OiByZXN1bHRzLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlb3NlbVBhZ2U7XG4iXSwibmFtZXMiOlsiZ3FsIiwiY2xpZW50IiwibW9kdWxlQmFubmVyRnJhZ21lbnQiLCJtb2R1bGVUYWJzSW5mb0ZyYWdtZW50IiwiYXBwbGljYXRpb25Nb2RlRnJhZ21lbnQiLCJTZW9zZW1QYWdlIiwibGlzdCIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsInF1ZXJ5Iiwic2Vvc2VtUGFnZUNvbGxlY3Rpb24iLCJpdGVtcyIsInBhdGhzIiwibWFwIiwidmFsdWUiLCJwYXJhbXMiLCJzbHVnIiwic3Vic3RyaW5nIiwic2x1ZzEiLCJzbHVnMiIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdHMiLCJqc29uIiwicHJvcHMiLCJlIiwibm90Rm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].tsx"));
module.exports = __webpack_exports__;

})();