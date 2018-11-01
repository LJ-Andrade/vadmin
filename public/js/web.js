/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

$(document).ready(function () {

	//
	// |--------------------------------------------------------------------------
	// | Vendor
	// |--------------------------------------------------------------------------
	//

	//
	// |--------------------------------------------------------------------------
	// | Sliders
	// |--------------------------------------------------------------------------
	//

	//
	// |--------------------------------------------------------------------------
	// | Navigation
	// |--------------------------------------------------------------------------
	//
	$('#navfull-top-btn, #navfull-bottom-btn').click(function () {
		toggleNav();
	});

	window.toggleNav = function () {
		var nav = $('#navfull');
		var body = $('body');
		var trigger = $('#navfull-top-btn');
		var bottomTrigger = $('#navfull-bottom-btn');

		if (nav.hasClass('navfull-active')) {
			nav.removeClass('navfull-active');
			trigger.removeClass('navfull-top-active');
			bottomTrigger.removeClass('navfull-bottom-active');
			body.css('overflow', 'auto');
		} else {
			nav.addClass('navfull-active');
			trigger.addClass('navfull-top-active');
			bottomTrigger.addClass('navfull-bottom-active');
			body.css('overflow', 'hidden');
		}
	};

	//
	// |--------------------------------------------------------------------------
	// | Forms
	// |--------------------------------------------------------------------------
	//

	window.fillDemo = function () {
		var message = "Quisiera que me envien una demostración de un e-commerce. Muchas gracias.";
		$('#Form-Textarea').html(message);
		$('#Form-Name-Input').focus();
	};

	//
	// |--------------------------------------------------------------------------
	// | Others
	// |--------------------------------------------------------------------------
	//

	// Scroll Smoothing
	// --------------------------------------------------
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]').not('[href="#0"]').click(function (event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						// Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

	// Go to top
	// --------------------------------------------------
	$('#go-to-top').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#go-to-top').fadeIn('slow');
		} else {
			$('#go-to-top').fadeOut('slow');
		}
	});
	$('#go-to-top').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
}); // Document Ready

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMxYWU4Y2I3MjE5NzljODRmNTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvd2ViLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVOYXYiLCJ3aW5kb3ciLCJuYXYiLCJib2R5IiwidHJpZ2dlciIsImJvdHRvbVRyaWdnZXIiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3NzIiwiYWRkQ2xhc3MiLCJmaWxsRGVtbyIsIm1lc3NhZ2UiLCJodG1sIiwiZm9jdXMiLCJub3QiLCJldmVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwibGVuZ3RoIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkdGFyZ2V0IiwiaXMiLCJhdHRyIiwiaGlkZSIsInNjcm9sbCIsImZhZGVJbiIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLEdBQUUsdUNBQUYsRUFBMkNHLEtBQTNDLENBQWlELFlBQVc7QUFDM0RDO0FBQ0EsRUFGRDs7QUFJQUMsUUFBT0QsU0FBUCxHQUFtQixZQUNuQjtBQUNDLE1BQU1FLE1BQU1OLEVBQUUsVUFBRixDQUFaO0FBQ0EsTUFBTU8sT0FBT1AsRUFBRSxNQUFGLENBQWI7QUFDQSxNQUFNUSxVQUFVUixFQUFFLGtCQUFGLENBQWhCO0FBQ0EsTUFBTVMsZ0JBQWdCVCxFQUFFLHFCQUFGLENBQXRCOztBQUVBLE1BQUdNLElBQUlJLFFBQUosQ0FBYSxnQkFBYixDQUFILEVBQ0E7QUFDQ0osT0FBSUssV0FBSixDQUFnQixnQkFBaEI7QUFDQUgsV0FBUUcsV0FBUixDQUFvQixvQkFBcEI7QUFDQUYsaUJBQWNFLFdBQWQsQ0FBMEIsdUJBQTFCO0FBQ0FKLFFBQUtLLEdBQUwsQ0FBUyxVQUFULEVBQW9CLE1BQXBCO0FBQ0EsR0FORCxNQU1PO0FBQ05OLE9BQUlPLFFBQUosQ0FBYSxnQkFBYjtBQUNBTCxXQUFRSyxRQUFSLENBQWlCLG9CQUFqQjtBQUNBSixpQkFBY0ksUUFBZCxDQUF1Qix1QkFBdkI7QUFDQU4sUUFBS0ssR0FBTCxDQUFTLFVBQVQsRUFBb0IsUUFBcEI7QUFDQTtBQUNELEVBbkJEOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBUCxRQUFPUyxRQUFQLEdBQWtCLFlBQ2xCO0FBQ0MsTUFBTUMsVUFBVSwyRUFBaEI7QUFDQWYsSUFBRSxnQkFBRixFQUFvQmdCLElBQXBCLENBQXlCRCxPQUF6QjtBQUNBZixJQUFFLGtCQUFGLEVBQXNCaUIsS0FBdEI7QUFDQSxFQUxEOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBakIsR0FBRSxjQUFGO0FBQ0M7QUFERCxFQUVFa0IsR0FGRixDQUVNLFlBRk4sRUFHRUEsR0FIRixDQUdNLGFBSE4sRUFJRWYsS0FKRixDQUlRLFVBQVNnQixLQUFULEVBQWdCO0FBQ3RCO0FBQ0EsTUFBSUMsU0FBU0MsUUFBVCxDQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsS0FBd0MsS0FBS0QsUUFBTCxDQUFjQyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBQXhDLElBQTRFRixTQUFTRyxRQUFULElBQXFCLEtBQUtBLFFBQTFHLEVBQ0E7QUFDQztBQUNBLE9BQUlDLFNBQVN4QixFQUFFLEtBQUt5QixJQUFQLENBQWI7QUFDQUQsWUFBU0EsT0FBT0UsTUFBUCxHQUFnQkYsTUFBaEIsR0FBeUJ4QixFQUFFLFdBQVcsS0FBS3lCLElBQUwsQ0FBVUUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQWdDLEdBQWxDLENBQWxDO0FBQ0E7QUFDQSxPQUFJSCxPQUFPRSxNQUFYLEVBQW1CO0FBQ2xCO0FBQ0FQLFVBQU1TLGNBQU47QUFDQTVCLE1BQUUsWUFBRixFQUFnQjZCLE9BQWhCLENBQXdCO0FBQ3hCQyxnQkFBV04sT0FBT08sTUFBUCxHQUFnQkM7QUFESCxLQUF4QixFQUVHLElBRkgsRUFFUyxZQUFXO0FBQ25CO0FBQ0E7QUFDQSxTQUFJQyxVQUFVakMsRUFBRXdCLE1BQUYsQ0FBZDtBQUNBUyxhQUFRaEIsS0FBUjtBQUNBLFNBQUlnQixRQUFRQyxFQUFSLENBQVcsUUFBWCxDQUFKLEVBQTBCO0FBQUU7QUFDM0IsYUFBTyxLQUFQO0FBQ0EsTUFGRCxNQUVPO0FBQ05ELGNBQVFFLElBQVIsQ0FBYSxVQUFiLEVBQXdCLElBQXhCLEVBRE0sQ0FDeUI7QUFDL0JGLGNBQVFoQixLQUFSLEdBRk0sQ0FFVztBQUNqQjtBQUNELEtBYkQ7QUFjQTtBQUNEO0FBQ0QsRUEvQkY7O0FBaUNBO0FBQ0E7QUFDQWpCLEdBQUUsWUFBRixFQUFnQm9DLElBQWhCO0FBQ0dwQyxHQUFFSyxNQUFGLEVBQVVnQyxNQUFWLENBQWlCLFlBQVU7QUFDdkIsTUFBSXJDLEVBQUUsSUFBRixFQUFROEIsU0FBUixLQUFzQixHQUExQixFQUErQjtBQUMzQjlCLEtBQUUsWUFBRixFQUFnQnNDLE1BQWhCLENBQXVCLE1BQXZCO0FBQ0gsR0FGRCxNQUVPO0FBQ0h0QyxLQUFFLFlBQUYsRUFBZ0J1QyxPQUFoQixDQUF3QixNQUF4QjtBQUNIO0FBQ0osRUFORDtBQU9BdkMsR0FBRSxZQUFGLEVBQWdCRyxLQUFoQixDQUFzQixZQUFVO0FBQzVCSCxJQUFFLFlBQUYsRUFBZ0I2QixPQUFoQixDQUF3QixFQUFFQyxXQUFXLENBQWIsRUFBeEIsRUFBMEMsR0FBMUM7QUFDQSxTQUFPLEtBQVA7QUFDTixFQUhFO0FBS0gsQ0FqSEQsRSxDQWlISSxpQiIsImZpbGUiOiIvanMvd2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzFhZThjYjcyMTk3OWM4NGY1MCIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XG4vL1xuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8IFZlbmRvclxuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuXG4vL1xuLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB8IFNsaWRlcnNcbi8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cblxuXHQvL1xuXHQvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gfCBOYXZpZ2F0aW9uXG5cdC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHQkKCcjbmF2ZnVsbC10b3AtYnRuLCAjbmF2ZnVsbC1ib3R0b20tYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0dG9nZ2xlTmF2KCk7XG5cdH0pO1xuXHRcblx0d2luZG93LnRvZ2dsZU5hdiA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGNvbnN0IG5hdiA9ICQoJyNuYXZmdWxsJyk7XG5cdFx0Y29uc3QgYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCB0cmlnZ2VyID0gJCgnI25hdmZ1bGwtdG9wLWJ0bicpO1xuXHRcdGNvbnN0IGJvdHRvbVRyaWdnZXIgPSAkKCcjbmF2ZnVsbC1ib3R0b20tYnRuJyk7XG5cdFx0XG5cdFx0aWYobmF2Lmhhc0NsYXNzKCduYXZmdWxsLWFjdGl2ZScpKVxuXHRcdHtcblx0XHRcdG5hdi5yZW1vdmVDbGFzcygnbmF2ZnVsbC1hY3RpdmUnKTtcblx0XHRcdHRyaWdnZXIucmVtb3ZlQ2xhc3MoJ25hdmZ1bGwtdG9wLWFjdGl2ZScpO1xuXHRcdFx0Ym90dG9tVHJpZ2dlci5yZW1vdmVDbGFzcygnbmF2ZnVsbC1ib3R0b20tYWN0aXZlJyk7XG5cdFx0XHRib2R5LmNzcygnb3ZlcmZsb3cnLCdhdXRvJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdi5hZGRDbGFzcygnbmF2ZnVsbC1hY3RpdmUnKTtcblx0XHRcdHRyaWdnZXIuYWRkQ2xhc3MoJ25hdmZ1bGwtdG9wLWFjdGl2ZScpO1xuXHRcdFx0Ym90dG9tVHJpZ2dlci5hZGRDbGFzcygnbmF2ZnVsbC1ib3R0b20tYWN0aXZlJyk7XG5cdFx0XHRib2R5LmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcblx0XHR9XG5cdH1cblx0XG5cdC8vXG5cdC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyB8IEZvcm1zXG5cdC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHRcblx0d2luZG93LmZpbGxEZW1vID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IFwiUXVpc2llcmEgcXVlIG1lIGVudmllbiB1bmEgZGVtb3N0cmFjacOzbiBkZSB1biBlLWNvbW1lcmNlLiBNdWNoYXMgZ3JhY2lhcy5cIjtcblx0XHQkKCcjRm9ybS1UZXh0YXJlYScpLmh0bWwobWVzc2FnZSk7XG5cdFx0JCgnI0Zvcm0tTmFtZS1JbnB1dCcpLmZvY3VzKCk7XG5cdH1cblxuXHQvL1xuXHQvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gfCBPdGhlcnNcblx0Ly8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vXG5cdFx0XG5cdC8vIFNjcm9sbCBTbW9vdGhpbmdcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0JCgnYVtocmVmKj1cIiNcIl0nKVxuXHRcdC8vIFJlbW92ZSBsaW5rcyB0aGF0IGRvbid0IGFjdHVhbGx5IGxpbmsgdG8gYW55dGhpbmdcblx0XHQubm90KCdbaHJlZj1cIiNcIl0nKVxuXHRcdC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxuXHRcdC5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0Ly8gT24tcGFnZSBsaW5rc1xuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cblx0XHRcdFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcblx0XHRcdFx0dGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuXHRcdFx0XHQvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cblx0XHRcdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcblx0XHRcdFx0XHQvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCBpZiBhbmltYXRpb24gaXMgYWN0dWFsbHkgZ29ubmEgaGFwcGVuXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdFx0fSwgMTAwMCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cblx0XHRcdFx0XHRcdC8vIE11c3QgY2hhbmdlIGZvY3VzIVxuXHRcdFx0XHRcdFx0dmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG5cdFx0XHRcdFx0XHQkdGFyZ2V0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkgeyAvLyBDaGVja2luZyBpZiB0aGUgdGFyZ2V0IHdhcyBmb2N1c2VkXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcblx0XHRcdFx0XHRcdFx0JHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XG5cdC8vIEdvIHRvIHRvcFxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQkKCcjZ28tdG8tdG9wJykuaGlkZSgpO1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgICQoJyNnby10by10b3AnKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNnby10by10b3AnKS5mYWRlT3V0KCdzbG93Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcjZ28tdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA1MDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG5cdH0pO1xuXHRcbn0pOyAvLyBEb2N1bWVudCBSZWFkeVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvd2ViLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==