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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const phoneNumber = document.createElement(\"p\");\n  phoneNumber.textContent = \"📞 555 444 333\";\n\n  const address = document.createElement(\"p\");\n  address.textContent = \"🏠 20 Gogebashvili St, Batumi 6010, Adjara, Georgia\";\n\n  const restaurantLocation = document.createElement(\"img\");\n  restaurantLocation.src = \"img/restaurant-location.png\";\n  restaurantLocation.alt = \"Mozzafiato restaurant location\";\n\n  contact.appendChild(phoneNumber);\n  contact.appendChild(address);\n  contact.appendChild(restaurantLocation);\n\n  return contact;\n}\n\nfunction loadContact() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://-18-complete-project-restaurant-page-/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const khachapuriImage = document.createElement(\"img\");\n  khachapuriImage.src = \"img/khachapuri.jpg\";\n  khachapuriImage.alt = \"khachapuri\";\n\n  home.appendChild(createParagraph(\"Best khachapuri you could eat\"));\n  home.appendChild(createParagraph(\"Made with passion since 1998\"));\n  home.appendChild(khachapuriImage);\n  home.appendChild(createParagraph(\"Order online or visit us!\"));\n\n  return home;\n}\n\nfunction createParagraph(text) {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n}\n\nfunction loadHome() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://-18-complete-project-restaurant-page-/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// Import\n\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.classList.add(\"restaurant_name\");\n  restaurantName.textContent = \"Khachapuri House\";\n\n  header.appendChild(restaurantName);\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n\n  //Button\n  const homeButton = document.createElement(\"button\");\n  homeButton.classList.add(\"button-nav\");\n  homeButton.textContent = \"Home\";\n  homeButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(homeButton);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  //Menu\n  const menuButton = document.createElement(\"button\");\n  menuButton.classList.add(\"button-nav\");\n  menuButton.textContent = \"Menu\";\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  //Contact\n  const contactButton = document.createElement(\"button\");\n  contactButton.classList.add(\"button-nav\");\n  contactButton.textContent = \"Contact\";\n  contactButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(contactButton);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  nav.appendChild(homeButton);\n  nav.appendChild(menuButton);\n  nav.appendChild(contactButton);\n\n  return nav;\n}\n\nfunction setActiveButton(clickedButton) {\n  const buttons = document.querySelectorAll(\".button-nav\");\n\n  buttons.forEach((button) => {\n    if (button !== clickedButton) {\n      button.classList.remove(\"active\");\n    }\n  });\n\n  clickedButton.classList.add(\"active\");\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  return main;\n}\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n\n  setActiveButton(document.querySelector(\".button-nav\"));\n}\n\ninitializeWebsite();\n\n\n//# sourceURL=webpack://-18-complete-project-restaurant-page-/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n  const menuItemsData = [\n    {\n      name: \"Imeretian\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese, Olive oil\",\n    },\n    {\n      name: \"Adjarian\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil\",\n    },\n    {\n      name: \"Mengrelian\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil\",\n    },\n    {\n      name: \"Gurian\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil\",\n    },\n    {\n      name: \"Rachuli\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil\",\n    },\n    {\n      name: \"Penovani\",\n      description:\n        \"Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil\",\n    },\n  ];\n\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menuItemsData.map((item) => {\n    menu.appendChild(createMenuItem(item));\n  });\n\n  return menu;\n}\n\nfunction createMenuItem({ name, description }) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"menu-item\");\n\n  const foodName = document.createElement(\"h2\");\n  foodName.textContent = name;\n\n  const foodDescription = document.createElement(\"p\");\n  foodDescription.textContent = description;\n\n  const foodImage = document.createElement(\"img\");\n  foodImage.src = `img/${name.toLowerCase()}.jpg`;\n  foodImage.alt = name;\n\n  menuItem.append(foodImage, foodName, foodDescription);\n\n  return menuItem;\n}\n\nfunction loadMenu() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://-18-complete-project-restaurant-page-/./src/menu.js?");

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