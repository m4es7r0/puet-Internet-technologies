/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\n\n/* Your JS Code goes here */\n\nvar header = document.getElementById('header');\nvar headerMenuButton = document.querySelector('.menu');\nvar headerMenuMobile = document.querySelector('.header-menu-mobile');\nvar headerMenuMobileOverlay = document.querySelector('.header-menu-mobile-overlay');\nvar video = document.getElementById('video');\nvar videoPlayButton = document.getElementById('video-play-button');\nvar formSubscribe = document.getElementById('subscribe-form');\nvar formSubscribeInput = document.querySelector('#subscribe-form input');\n\n// sticky header\nwindow.addEventListener('scroll', function () {\n  header.classList.toggle('sticky', window.scrollY > 25);\n});\n\n// header menu\nheaderMenuButton.addEventListener('click', function () {\n  headerMenuMobile.classList.toggle('open');\n});\nheaderMenuMobile.addEventListener('click', function (e) {\n  if (e.target.tagName === 'A') {\n    headerMenuMobile.classList.remove('open');\n  }\n});\nheaderMenuMobile.addEventListener('transitionend', function () {\n  if (headerMenuMobile.classList.contains('open')) {\n    headerMenuMobileOverlay.style.zIndex = '5';\n  } else {\n    headerMenuMobileOverlay.style.zIndex = '-1';\n  }\n});\nheaderMenuMobileOverlay.addEventListener('click', function () {\n  headerMenuMobile.classList.remove('open');\n});\n\n// video\nvideoPlayButton.addEventListener('click', function () {\n  if (!videoPlayButton.classList.contains('first-click')) {\n    videoPlayButton.classList.add('first-click');\n  }\n  if (video.paused) {\n    videoPlayButton.classList.add('active');\n    video.play();\n  } else {\n    videoPlayButton.classList.remove('active');\n    video.pause();\n  }\n});\n\n// form subscribe\nformSubscribe.addEventListener('submit', function (e) {\n  e.preventDefault();\n  if (formSubscribeInput.value) {\n    window.alert(\"Thank you \".concat(formSubscribeInput.value, \" for subscribing!\"));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsQ0FBQyxDQUFDO0VBQ2xCLElBQUlqQixrQkFBa0IsQ0FBQ2tCLEtBQUssRUFBRTtJQUM1QmpCLE1BQU0sQ0FBQ2tCLEtBQUssY0FBQUMsTUFBQSxDQUFjcEIsa0JBQWtCLENBQUNrQixLQUFLLHNCQUFtQixDQUFDO0VBQ3hFO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5jb25zdCBoZWFkZXJNZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGhlYWRlck1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW1lbnUtbW9iaWxlJyk7XG5jb25zdCBoZWFkZXJNZW51TW9iaWxlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWVudS1tb2JpbGUtb3ZlcmxheScpO1xuXG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuY29uc3QgdmlkZW9QbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXBsYXktYnV0dG9uJyk7XG5cbmNvbnN0IGZvcm1TdWJzY3JpYmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLWZvcm0nKTtcbmNvbnN0IGZvcm1TdWJzY3JpYmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJzY3JpYmUtZm9ybSBpbnB1dCcpO1xuXG4vLyBzdGlja3kgaGVhZGVyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc3RpY2t5Jywgd2luZG93LnNjcm9sbFkgPiAyNSk7XG59KTtcblxuLy8gaGVhZGVyIG1lbnVcbmhlYWRlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhlYWRlck1lbnVNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xufSk7XG5cbmhlYWRlck1lbnVNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgaGVhZGVyTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH1cbn0pO1xuXG5oZWFkZXJNZW51TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gIGlmIChoZWFkZXJNZW51TW9iaWxlLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgaGVhZGVyTWVudU1vYmlsZU92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzUnO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlck1lbnVNb2JpbGVPdmVybGF5LnN0eWxlLnpJbmRleCA9ICctMSc7XG4gIH1cbn0pO1xuXG5oZWFkZXJNZW51TW9iaWxlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGVhZGVyTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG59KTtcblxuLy8gdmlkZW9cbnZpZGVvUGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKCF2aWRlb1BsYXlCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1jbGljaycpKSB7XG4gICAgdmlkZW9QbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWNsaWNrJyk7XG4gIH1cblxuICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgdmlkZW9QbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHZpZGVvLnBsYXkoKTtcbiAgfSBlbHNlIHtcbiAgICB2aWRlb1BsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdmlkZW8ucGF1c2UoKTtcbiAgfVxufSk7XG5cbi8vIGZvcm0gc3Vic2NyaWJlXG5mb3JtU3Vic2NyaWJlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGZvcm1TdWJzY3JpYmVJbnB1dC52YWx1ZSkge1xuICAgIHdpbmRvdy5hbGVydChgVGhhbmsgeW91ICR7Zm9ybVN1YnNjcmliZUlucHV0LnZhbHVlfSBmb3Igc3Vic2NyaWJpbmchYCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJNZW51QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnVNb2JpbGUiLCJoZWFkZXJNZW51TW9iaWxlT3ZlcmxheSIsInZpZGVvIiwidmlkZW9QbGF5QnV0dG9uIiwiZm9ybVN1YnNjcmliZSIsImZvcm1TdWJzY3JpYmVJbnB1dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzY3JvbGxZIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJyZW1vdmUiLCJjb250YWlucyIsInN0eWxlIiwiekluZGV4IiwiYWRkIiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImFsZXJ0IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;