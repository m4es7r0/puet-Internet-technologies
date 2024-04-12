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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\n\n/* Your JS Code goes here */\n\nvar header = document.getElementById('header');\nvar video = document.getElementById('video');\nvar videoPlayButton = document.getElementById('video-play-button');\nvar formSubscribe = document.getElementById('subscribe-form');\nvar formSubscribeInput = document.querySelector('#subscribe-form input');\nwindow.addEventListener('scroll', function () {\n  header.classList.toggle('sticky', window.scrollY > 25);\n});\nvideoPlayButton.addEventListener('click', function () {\n  if (!videoPlayButton.classList.contains('first-click')) {\n    videoPlayButton.classList.add('first-click');\n  }\n  if (video.paused) {\n    videoPlayButton.classList.add('active');\n    video.play();\n  } else {\n    videoPlayButton.classList.remove('active');\n    video.pause();\n  }\n});\nformSubscribe.addEventListener('submit', function (e) {\n  e.preventDefault();\n  if (formSubscribeInput.value) {\n    window.alert(\"Thank you \".concat(formSubscribeInput.value, \" for subscribing!\"));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQTBCOztBQUUxQjs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUM5QyxJQUFNRSxlQUFlLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BFLElBQU1HLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFDL0QsSUFBTUksa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRTFFQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3RDVCxNQUFNLENBQUNVLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRUgsTUFBTSxDQUFDSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUVGUixlQUFlLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzlDLElBQUksQ0FBQ0wsZUFBZSxDQUFDTSxTQUFTLENBQUNHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUN0RFQsZUFBZSxDQUFDTSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDOUM7RUFFQSxJQUFJWCxLQUFLLENBQUNZLE1BQU0sRUFBRTtJQUNoQlgsZUFBZSxDQUFDTSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDdkNYLEtBQUssQ0FBQ2EsSUFBSSxDQUFDLENBQUM7RUFDZCxDQUFDLE1BQU07SUFDTFosZUFBZSxDQUFDTSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDMUNkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDLENBQUM7RUFDZjtBQUNGLENBQUMsQ0FBQztBQUVGYixhQUFhLENBQUNJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDVSxDQUFDLEVBQUs7RUFDOUNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEIsSUFBSWQsa0JBQWtCLENBQUNlLEtBQUssRUFBRTtJQUM1QmIsTUFBTSxDQUFDYyxLQUFLLGNBQUFDLE1BQUEsQ0FBY2pCLGtCQUFrQixDQUFDZSxLQUFLLHNCQUFtQixDQUFDO0VBQ3hFO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLyogWW91ciBKUyBDb2RlIGdvZXMgaGVyZSAqL1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuY29uc3QgdmlkZW9QbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXBsYXktYnV0dG9uJyk7XG5jb25zdCBmb3JtU3Vic2NyaWJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZS1mb3JtJyk7XG5jb25zdCBmb3JtU3Vic2NyaWJlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Vic2NyaWJlLWZvcm0gaW5wdXQnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ3N0aWNreScsIHdpbmRvdy5zY3JvbGxZID4gMjUpO1xufSk7XG5cbnZpZGVvUGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKCF2aWRlb1BsYXlCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1jbGljaycpKSB7XG4gICAgdmlkZW9QbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWNsaWNrJyk7XG4gIH1cblxuICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgdmlkZW9QbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHZpZGVvLnBsYXkoKTtcbiAgfSBlbHNlIHtcbiAgICB2aWRlb1BsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdmlkZW8ucGF1c2UoKTtcbiAgfVxufSk7XG5cbmZvcm1TdWJzY3JpYmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZm9ybVN1YnNjcmliZUlucHV0LnZhbHVlKSB7XG4gICAgd2luZG93LmFsZXJ0KGBUaGFuayB5b3UgJHtmb3JtU3Vic2NyaWJlSW5wdXQudmFsdWV9IGZvciBzdWJzY3JpYmluZyFgKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZpZGVvIiwidmlkZW9QbGF5QnV0dG9uIiwiZm9ybVN1YnNjcmliZSIsImZvcm1TdWJzY3JpYmVJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2Nyb2xsWSIsImNvbnRhaW5zIiwiYWRkIiwicGF1c2VkIiwicGxheSIsInJlbW92ZSIsInBhdXNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJhbGVydCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

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