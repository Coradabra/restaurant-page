/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Card(heading) {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n\n  const headingElement = document.createElement(\"h5\");\n  headingElement.textContent = heading;\n\n  card.appendChild(headingElement);\n\n  return card;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/card.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partial_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial/navbar */ \"./src/partial/navbar.js\");\n/* harmony import */ var _partial_pageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partial/pageLayout */ \"./src/partial/pageLayout.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\nconst { container, innerContainer } = (0,_partial_pageLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ncontent.appendChild((0,_partial_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild(container);\n\ninnerContainer.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n\n\nfunction HomePage() {\n  const { createElement, createDocumentFragment } = document;\n\n  const fragment = createDocumentFragment();\n\n  const heading = createElement(\"h3\");\n  heading.textContent = \"Welcome!\";\n\n  const about = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"About\");\n  const aboutText = createElement(\"p\");\n  aboutText.textContent = \"Welcome to this restaurant. I love pizza!\";\n  about.appendChild(aboutText);\n\n  const hours = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Hours\");\n\n  const location = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Location\");\n  const locationText = createElement(\"p\");\n  locationText.textContent = \"123 Feedme Street, Famished, VIC 3199\";\n  location.appendChild(locationText);\n\n  fragment.appendChild(heading);\n  fragment.appendChild(about);\n  fragment.appendChild(hours);\n  fragment.appendChild(location);\n\n  return fragment;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/partial/navbar.js":
/*!*******************************!*\
  !*** ./src/partial/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Navbar() {\n  const navLinks = [\n    { name: \"Home\", to: () => {} },\n    { name: \"Menu\", to: () => {} },\n    { name: \"Contact\", to: () => {} },\n  ];\n\n  const navbar = document.createElement(\"div\");\n\n  navLinks.forEach((navLink) => {\n    const link = document.createElement(\"button\");\n    link.textContent = navLink.name;\n    link.addEventListener(\"click\", navLink.to);\n    navbar.appendChild(link);\n  });\n\n  navbar.classList.add(\"navbar\");\n\n  return navbar;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n\n//# sourceURL=webpack://restaurant-page/./src/partial/navbar.js?");

/***/ }),

/***/ "./src/partial/pageLayout.js":
/*!***********************************!*\
  !*** ./src/partial/pageLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction PageLayout() {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n\n  const innerContainer = document.createElement(\"div\");\n  innerContainer.classList.add(\"innerContainer\");\n\n  container.appendChild(innerContainer);\n\n  return { container, innerContainer };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);\n\n\n//# sourceURL=webpack://restaurant-page/./src/partial/pageLayout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;