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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Card(heading = \"\") {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n\n  const headingElement = document.createElement(\"h5\");\n  headingElement.textContent = heading;\n\n  card.appendChild(headingElement);\n  card.id = heading;\n\n  return card;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/card.js?");

/***/ }),

/***/ "./src/components/configElement.js":
/*!*****************************************!*\
  !*** ./src/components/configElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction configElement(elementType, textContent, className = null) {\n  const element = document.createElement(elementType);\n  element.textContent = textContent;\n  if (className) {\n    element.classList.add(className);\n  }\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configElement);\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/configElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partial_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial/navbar */ \"./src/partial/navbar.js\");\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/router */ \"./src/utils/router.js\");\n\n\n\nconst content = document.querySelector(\"#content\");\n\ncontent.appendChild((0,_partial_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n(0,_utils_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n\n\nfunction ContactPage() {\n  const page = document.createElement(\"div\");\n  page.classList.add(\"page\");\n\n  const heading = document.createElement(\"h3\");\n  heading.textContent = \"Welcome!\";\n\n  const about = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"About\");\n  const aboutText = document.createElement(\"p\");\n  aboutText.textContent = \"Welcome to this restaurant. I love pizza!\";\n  about.appendChild(aboutText);\n\n  const hours = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Hours\");\n\n  const location = (0,_components_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Location\");\n  const locationText = document.createElement(\"p\");\n  locationText.textContent = \"123 Feedme Street, Famished, VIC 3199\";\n  location.appendChild(locationText);\n\n  page.appendChild(heading);\n  page.appendChild(about);\n  page.appendChild(hours);\n  page.appendChild(location);\n\n  return page;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_configElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/configElement */ \"./src/components/configElement.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n\n\n\nfunction HomePage() {\n  const HOURS = [\n    { day: \"Monday\", hours: \"Closed\" },\n    { day: \"Tuesday\", hours: \"6am - 4pm\" },\n    { day: \"Wednesday\", hours: \"6am - 4pm\" },\n    { day: \"Thursday\", hours: \"6am - 5pm\" },\n    { day: \"Friday\", hours: \"6am - 5pm\" },\n    { day: \"Saturday\", hours: \"7am - 3pm\" },\n    { day: \"Sunday\", hours: \"8am - 2pm\" },\n  ];\n\n  const page = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"\", \"page\");\n\n  const heading = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\", \"Welcome!\");\n\n  const about = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"About\");\n  const aboutText = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    \"p\",\n    \"Welcome to this restaurant. I love pizza!\"\n  );\n  about.appendChild(aboutText);\n\n  const hours = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Hours\");\n  const hoursList = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\", \"\", \"openHours\");\n  HOURS.forEach((day) => {\n    const listItem = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\", day.day);\n    const openHours = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\", day.hours);\n    listItem.appendChild(openHours);\n    hoursList.appendChild(listItem);\n  });\n  hours.appendChild(hoursList);\n\n  const location = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Location\");\n  const locationText = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    \"p\",\n    \"123 Feedme Street, Famished, VIC 3199\"\n  );\n  location.appendChild(locationText);\n\n  page.appendChild(heading);\n  page.appendChild(about);\n  page.appendChild(hours);\n  page.appendChild(location);\n\n  return page;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_configElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/configElement */ \"./src/components/configElement.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n\n\n\nfunction MenuPage() {\n  const MENU = [\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n    { title: \"\", description: \"\", price: 0 },\n  ];\n\n  const page = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"\", \"page\");\n\n  const heading = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\", \"MENU\");\n  page.appendChild(heading);\n\n  MENU.forEach((item) => {\n    const card = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.title);\n    const description = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", item.description);\n    const price = (0,_components_configElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", `$${item.price}`);\n\n    card.appendChild(description);\n    card.appendChild(price);\n\n    page.appendChild(card);\n  });\n\n  return page;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/partial/navbar.js":
/*!*******************************!*\
  !*** ./src/partial/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/router */ \"./src/utils/router.js\");\n\n\nfunction Navbar() {\n  const navLinks = [\n    { name: \"Home\", to: () => (0,_utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"HOME\") },\n    { name: \"Menu\", to: () => (0,_utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"MENU\") },\n    { name: \"Contact\", to: () => (0,_utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"CONTACT\") },\n  ];\n\n  const LOGO = \"Restaraunt\";\n\n  const navbar = document.createElement(\"div\");\n  const container = document.createElement(\"div\");\n  const logo = document.createElement(\"h1\");\n  logo.textContent = LOGO;\n\n  const navList = document.createElement(\"div\");\n  navList.classList.add(\"links\");\n\n  navLinks.forEach((navLink) => {\n    const link = document.createElement(\"button\");\n    link.textContent = navLink.name;\n    link.addEventListener(\"click\", navLink.to);\n    navList.appendChild(link);\n  });\n\n  container.appendChild(logo);\n  container.appendChild(navList);\n  navbar.appendChild(container);\n  navbar.classList.add(\"navbar\");\n\n  return navbar;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n\n//# sourceURL=webpack://restaurant-page/./src/partial/navbar.js?");

/***/ }),

/***/ "./src/utils/router.js":
/*!*****************************!*\
  !*** ./src/utils/router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n\n\n\n\nfunction determineRoute(path) {\n  switch (path) {\n    case \"HOME\":\n      return (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    case \"MENU\":\n      return (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    case \"CONTACT\":\n      return (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    default:\n      return (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n}\n\nfunction Router(path = \"HOME\") {\n  const currentPage = document.querySelector(\".page\");\n  if (currentPage) {\n    currentPage.remove();\n  }\n\n  const contents = document.querySelector(\"#content\");\n  const newPage = determineRoute(path);\n  contents.appendChild(newPage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils/router.js?");

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