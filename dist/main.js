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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomNumber */ \"./src/randomNumber.js\");\n    \r\n    \r\n    const snake = document.getElementById('snake')\r\n    const board = document.getElementById('board')\r\n    const ball = document.createElement('div')\r\n    const directions = document.querySelectorAll('[data-control]')\r\n    board.append(ball)\r\n    ball.classList.add('ball')\r\n    let MOVE_RIGHT = 0\r\n    let MOVE_DOWN = 0\r\n    let CONSTANT = 5\r\n    let WIN_POINT = [(0,_randomNumber__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(10,280) , (0,_randomNumber__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(10,280)]\r\n    let SNAKE_WIDTH = 1\r\n    snake.style.width = SNAKE_WIDTH + 'em'\r\n\r\n\r\n    // EVENT CATCHERS\r\n    directions.forEach(direction => {\r\n        direction.addEventListener('click',direction_handler)\r\n        direction.addEventListener('mousedown',direction_handler)\r\n    })\r\n\r\n    document.addEventListener('keydown',(key) => {\r\n        ball.style.margin = `${WIN_POINT[0]+'px'} ${WIN_POINT[1]+'px'}`\r\n        event_handler(key)\r\n        check_win()\r\n    })\r\n\r\n\r\n    // EVENT CONTROLLERS\r\n    function event_handler(e) {\r\n        if(e.keyCode == 39){\r\n            move_right()\r\n        }else if(e.keyCode == 37){\r\n            move_left()\r\n        }else if(e.keyCode == 38){\r\n            move_up()\r\n        }else if(e.keyCode == 40){\r\n            move_down()\r\n        }\r\n    }\r\n\r\n    function direction_handler(button) {\r\n        ball.style.margin = `${WIN_POINT[0]+'px'} ${WIN_POINT[1]+'px'}`\r\n        check_win()\r\n\r\n        if(button.target.dataset.control == \"right\"){\r\n            move_right()\r\n        }else if(button.target.dataset.control == \"left\"){\r\n            move_left()\r\n        }else if(button.target.dataset.control == \"up\"){\r\n            move_up()\r\n        }else if(button.target.dataset.control == \"down\"){\r\n            move_down()\r\n        }\r\n    }\r\n\r\n    // DIRECTIONS\r\n\r\n    function move_right() {\r\n        snake.style.transform = `rotate(0deg)`\r\n        board.style.backgroundColor = 'var(--darkest)'\r\n        MOVE_RIGHT+=CONSTANT\r\n        snake.style.marginLeft = MOVE_RIGHT+'px'\r\n        if(MOVE_RIGHT >= 300){\r\n            MOVE_RIGHT = CONSTANT\r\n            snake.style.marginLeft = CONSTANT\r\n        }\r\n    }\r\n\r\n    function move_down() {\r\n        MOVE_DOWN+=CONSTANT\r\n        snake.style.marginTop = MOVE_DOWN + 'px'\r\n        snake.style.transform = `rotate(90deg)`\r\n        if(MOVE_DOWN >= 300){\r\n            MOVE_DOWN = CONSTANT\r\n            snake.style.MOVE_DOWN = CONSTANT\r\n        }\r\n\r\n        document.addEventListener('keydown',(happens) => {\r\n            if(happens.keyCode == 39){\r\n                snake.style.transform = `rotate(0deg)`\r\n            }\r\n        })\r\n    }\r\n\r\n    function move_left() {\r\n        snake.style.transform = `rotate(-180deg)`\r\n        MOVE_RIGHT -= CONSTANT\r\n        snake.style.marginLeft = MOVE_RIGHT + 'px'\r\n        if(MOVE_RIGHT <= 0){    \r\n            MOVE_RIGHT = 300\r\n        }\r\n    }\r\n\r\n    function move_up() {\r\n        snake.style.transform =  `rotate(-90deg)`\r\n        MOVE_DOWN-= CONSTANT    \r\n        snake.style.marginTop = MOVE_DOWN + 'px'\r\n        if(MOVE_DOWN <= 0){\r\n            MOVE_DOWN = 300\r\n        }\r\n    }\r\n\r\n    // WINNING CHECKINGS\r\n    function check_win() {\r\n        if(WIN_POINT.includes(MOVE_DOWN)&&WIN_POINT.includes(MOVE_RIGHT)){\r\n            win()\r\n        }\r\n    }\r\n\r\n    function win() {\r\n        WIN_POINT = [(0,_randomNumber__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(10,280) , (0,_randomNumber__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(10,280)]\r\n        SNAKE_WIDTH += 0.5\r\n        snake.style.width = SNAKE_WIDTH + 'em'\r\n    }\n\n//# sourceURL=webpack://snake-game/./src/index.js?");

/***/ }),

/***/ "./src/randomNumber.js":
/*!*****************************!*\
  !*** ./src/randomNumber.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomNumber\": () => (/* binding */ randomNumber)\n/* harmony export */ });\nfunction randomNumber(start,range){\r\n    let number = Math.floor((Math.random() * range)  + start)\r\n\r\n    while(number > range){\r\n        number = Math.floor((Math.random() * range)  + start)\r\n    }\r\n\r\n    if(number % 5 == 0){\r\n        return number\r\n    }else return randomNumber(10,300)\r\n}\r\n\n\n//# sourceURL=webpack://snake-game/./src/randomNumber.js?");

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