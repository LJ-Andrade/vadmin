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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

/*
|--------------------------------------------------------------------------
| LISTS
|--------------------------------------------------------------------------
*/

// Set List Action Buttons
$(document).on("click", ".List-Checkbox", function (e) {
	e.stopPropagation();

	var selectedRows = [];
	$(".List-Checkbox:checked").each(function () {
		selectedRows.push($(this).attr('data-id'));
		$('#RowsToDeletion').val(selectedRows);
	});

	if (selectedRows.length == 1) {
		$('#EditId').val(selectedRows);
	} else if (selectedRows.length < 1) {
		$('#EditId').val('');
	} else if (selectedRows.length > 1) {
		$('#EditId').val('');
	} else {
		$('#EditId').val('');
	}

	showButtons(this);

	var checkbox = $(this).prop('checked');
	if (checkbox) {
		$(this).parent().parent().parent().addClass('row-selected');
	} else {
		$(this).parent().parent().parent().removeClass('row-selected');
	}
});

function showButtons(trigger) {

	var countSelected = $('.List-Checkbox:checkbox:checked').length;
	if (countSelected == 1) {
		$('.DeleteBtn').removeClass('Hidden');
		$('.EditBtn').removeClass('Hidden');
	} else if (countSelected >= 2) {
		$('.EditBtn').addClass('Hidden');
	} else if (countSelected == 0) {
		$('.DeleteBtn').addClass('Hidden');
		$('.EditBtn').addClass('Hidden');
	}
}

// Show Edit and Delete buttons in bottom if scrolled to mutch
$(document).scroll(function (e) {
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > 150) {
		$('.DeleteBtn').css({ "position": "fixed", "bottom": "50px", "right": "10px", "z-index": "999" });
		$('.EditBtn').css({ "position": "fixed", "bottom": "50px", "right": "130px", "z-index": "999" });
	} else {
		$('.DeleteBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
		$('.EditBtn').css({ "position": "relative", "bottom": "auto", "right": "auto", "z-index": "999" });
	}
});

// Uncheck all checkboxes on reload.
function uncheckAll() {
	$('#TableList tbody .CheckBoxes').find('input[type="checkbox"]').each(function () {
		$(this).prop('checked', false);
	});
}
uncheckAll();

/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

deleteRecord = function deleteRecord(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {

		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					$('#Id' + id).hide(200);
					for (i = 0; i < id.length; i++) {
						$('#Id' + id[i]).hide(200);
					}
					alert_ok('Ok!', 'Eliminación completa');
					console.log(data);
					return true;
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			},
			complete: function complete() {
				// $('#Main-Loader').addClass('Hidden');
			}
		});
	});
};

deleteAndReload = function deleteAndReload(id, route, bigtext, smalltext) {
	swal({
		title: bigtext,
		text: smalltext,
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'ELIMINAR',
		cancelButtonText: 'Cancelar',
		confirmButtonClass: 'btn btnGreen',
		cancelButtonClass: 'btn btnRed',
		buttonsStyling: false
	}).then(function () {
		$.ajax({
			url: route,
			method: 'POST',
			dataType: 'JSON',
			data: { id: id },
			beforeSend: function beforeSend() {
				// $('#Main-Loader').removeClass('Hidden');
			},
			success: function success(data) {
				$('#BatchDeleteBtn').addClass('Hidden');
				if (data.success == true) {
					// alert_ok('Ok!','Eliminación completa');
					location.reload();
				} else {
					alert_error('Ups!', 'Ha ocurrido un error (Puede que este registro tenga relación con otros items en el sistema). Debe eliminar primero los mismos.');
					console.log(data);
					return false;
				}
			},
			error: function error(data) {
				$('#Error').html(data.responseText);
				console.log(data);
			}
		});
	});
};

/*
|--------------------------------------------------------------------------
| ALERTS
|--------------------------------------------------------------------------
*/

function alert_ok(bigtext, smalltext) {
	swal(bigtext, smalltext, 'success');
}

function alert_error(bigtext, smalltext) {
	swal(bigtext, smalltext, 'error');
}

function alert_info(bigtext, smalltext) {

	swal({
		title: bigtext,
		type: 'info',
		html: smalltext,
		showCloseButton: true,
		showCancelButton: false,
		confirmButtonText: '<i class="ion-checkmark-round"></i> Ok!'
	});
}

function closeParent() {
	$(this).parent('hide');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZmNDE1NzA2ODNiYjBiNDNhZjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImRvY3VtZW50Iiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRSb3dzIiwiZWFjaCIsInB1c2giLCJ2YWwiLCJsZW5ndGgiLCJzaG93QnV0dG9ucyIsImNoZWNrYm94IiwicHJvcCIsInBhcmVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0cmlnZ2VyIiwiY291bnRTZWxlY3RlZCIsInNjcm9sbCIsInNjcm9sbEFtb3VudCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImNzcyIsInVuY2hlY2tBbGwiLCJmaW5kIiwiZGVsZXRlUmVjb3JkIiwiaWQiLCJyb3V0ZSIsImJpZ3RleHQiLCJzbWFsbHRleHQiLCJzd2FsIiwidGl0bGUiLCJ0ZXh0IiwidHlwZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiaGlkZSIsImkiLCJhbGVydF9vayIsImNvbnNvbGUiLCJsb2ciLCJhbGVydF9lcnJvciIsImVycm9yIiwiaHRtbCIsInJlc3BvbnNlVGV4dCIsImNvbXBsZXRlIiwiZGVsZXRlQW5kUmVsb2FkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydF9pbmZvIiwic2hvd0Nsb3NlQnV0dG9uIiwiY2xvc2VQYXJlbnQi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M0IsRUFBcUM7QUFDakNDLE1BQ0lGLE9BREosRUFFSUMsU0FGSixFQUdJLFNBSEo7QUFLSDs7QUFFRCxTQUFTMEIsV0FBVCxDQUFxQjNCLE9BQXJCLEVBQThCQyxTQUE5QixFQUF3QztBQUNwQ0MsTUFDSUYsT0FESixFQUVJQyxTQUZKLEVBR0ksT0FISjtBQUtIOztBQUVELFNBQVNrQyxVQUFULENBQW9CbkMsT0FBcEIsRUFBNkJDLFNBQTdCLEVBQXVDOztBQUVuQ0MsTUFBSztBQUNHQyxTQUFPSCxPQURWO0FBRURLLFFBQU0sTUFGTDtBQUdEd0IsUUFBTTVCLFNBSEw7QUFJRG1DLG1CQUFpQixJQUpoQjtBQUtEOUIsb0JBQWtCLEtBTGpCO0FBTURHLHFCQUNJO0FBUEgsRUFBTDtBQVNIOztBQUdELFNBQVM0QixXQUFULEdBQXNCO0FBQ3JCcEUsR0FBRSxJQUFGLEVBQVFnQixNQUFSLENBQWUsTUFBZjtBQUNBLEMiLCJmaWxlIjoiL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2ZjQxNTcwNjgzYmIwYjQzYWYxIiwiJC5hamF4U2V0dXAoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICB9XG59KTtcbiBcbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTElTVFNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gU2V0IExpc3QgQWN0aW9uIEJ1dHRvbnNcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuTGlzdC1DaGVja2JveFwiLCBmdW5jdGlvbihlKXtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdHZhciBzZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAkKFwiLkxpc3QtQ2hlY2tib3g6Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyAgICAgICAgICBcbiAgICAgICAgc2VsZWN0ZWRSb3dzLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xuXHRcdCQoJyNSb3dzVG9EZWxldGlvbicpLnZhbChzZWxlY3RlZFJvd3MpO1xuICAgIH0pO1xuICAgICAgIFxuICAgIGlmKHNlbGVjdGVkUm93cy5sZW5ndGggPT0gMSl7XG4gICAgICAgICQoJyNFZGl0SWQnKS52YWwoc2VsZWN0ZWRSb3dzKTtcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpe1xuICAgICAgICAkKCcjRWRpdElkJykudmFsKCcnKTtcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEpe1xuICAgICAgICAkKCcjRWRpdElkJykudmFsKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjRWRpdElkJykudmFsKCcnKTtcbiAgICB9XG5cbiAgICBzaG93QnV0dG9ucyh0aGlzKTtcblxuXHR2YXIgY2hlY2tib3ggPSAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKTtcblx0aWYoY2hlY2tib3gpe1xuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Jvdy1zZWxlY3RlZCcpO1xuXHR9XG59KTtcblxuXG5mdW5jdGlvbiBzaG93QnV0dG9ucyh0cmlnZ2VyKSB7XG5cdFxuXHR2YXIgY291bnRTZWxlY3RlZCA9ICQoJy5MaXN0LUNoZWNrYm94OmNoZWNrYm94OmNoZWNrZWQnKS5sZW5ndGg7XG5cdGlmKGNvdW50U2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAkKCcuRGVsZXRlQnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdCQoJy5FZGl0QnRuJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdFxuXHR9IGVsc2UgaWYoY291bnRTZWxlY3RlZCA+PSAyKSB7XG4gICAgICAgICQoJy5FZGl0QnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xuICAgIH0gZWxzZSBpZihjb3VudFNlbGVjdGVkID09IDApIHtcbiAgICAgICAgJCgnLkRlbGV0ZUJ0bicpLmFkZENsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgJCgnLkVkaXRCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XG4gICAgfVxufVxuXG4vLyBTaG93IEVkaXQgYW5kIERlbGV0ZSBidXR0b25zIGluIGJvdHRvbSBpZiBzY3JvbGxlZCB0byBtdXRjaFxuJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpe1xuXHR2YXIgc2Nyb2xsQW1vdW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRpZihzY3JvbGxBbW91bnQgPiAxNTApe1xuXHRcdCQoJy5EZWxldGVCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwiYm90dG9tXCI6XCI1MHB4XCIsIFwicmlnaHRcIjpcIjEwcHhcIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xuXHRcdCQoJy5FZGl0QnRuJykuY3NzKHtcInBvc2l0aW9uXCI6XCJmaXhlZFwiLCBcImJvdHRvbVwiOlwiNTBweFwiLCBcInJpZ2h0XCI6XCIxMzBweFwiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnLkRlbGV0ZUJ0bicpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJib3R0b21cIjpcImF1dG9cIiwgXCJyaWdodFwiOlwiYXV0b1wiLCBcInotaW5kZXhcIjpcIjk5OVwifSk7XG5cdFx0JCgnLkVkaXRCdG4nKS5jc3Moe1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCIsIFwiYm90dG9tXCI6XCJhdXRvXCIsIFwicmlnaHRcIjpcImF1dG9cIiwgXCJ6LWluZGV4XCI6XCI5OTlcIn0pO1xuXHR9XG59KTtcblxuLy8gVW5jaGVjayBhbGwgY2hlY2tib3hlcyBvbiByZWxvYWQuXG5mdW5jdGlvbiB1bmNoZWNrQWxsKCl7XG5cdCQoJyNUYWJsZUxpc3QgdGJvZHkgLkNoZWNrQm94ZXMnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcdFxuXHR9KTtcdFxufVxudW5jaGVja0FsbCgpO1xuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEZVTkNUSU9OU1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5kZWxldGVSZWNvcmQgPSBmdW5jdGlvbihpZCwgcm91dGUsIGJpZ3RleHQsIHNtYWxsdGV4dCkge1xuXHRzd2FsKHtcblx0XHR0aXRsZTogYmlndGV4dCxcblx0XHR0ZXh0OiBzbWFsbHRleHQsXG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxuXHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXG5cdFx0Y29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG5cdFx0Y2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcblx0XHRjb25maXJtQnV0dG9uVGV4dDogJ0VMSU1JTkFSJyxcblx0XHRjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxuXHRcdGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG5HcmVlbicsXG5cdFx0Y2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuUmVkJyxcblx0XHRidXR0b25zU3R5bGluZzogZmFsc2Vcblx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cbiBcdFx0JC5hamF4KHtcblx0XHRcdHVybDogcm91dGUsXG5cdFx0XHRtZXRob2Q6ICdQT1NUJywgICAgICAgICAgICAgXG5cdFx0XHRkYXRhVHlwZTogJ0pTT04nLFxuXHRcdFx0ZGF0YTogeyBpZDogaWQgfSxcblx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vICQoJyNNYWluLUxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0JCgnI0JhdGNoRGVsZXRlQnRuJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpIHtcblx0XHRcdFx0XHQkKCcjSWQnK2lkKS5oaWRlKDIwMCk7XG5cdFx0XHRcdFx0Zm9yKGk9MDsgaSA8IGlkLmxlbmd0aCA7IGkrKyl7XG5cdFx0XHRcdFx0XHQkKCcjSWQnK2lkW2ldKS5oaWRlKDIwMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbGVydF9lcnJvcignVXBzIScsJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChQdWVkZSBxdWUgZXN0ZSByZWdpc3RybyB0ZW5nYSByZWxhY2nDs24gY29uIG90cm9zIGl0ZW1zIGVuIGVsIHNpc3RlbWEpLiBEZWJlIGVsaW1pbmFyIHByaW1lcm8gbG9zIG1pc21vcy4nKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcblx0XHRcdHtcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcblx0XHRcdH0sXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyAkKCcjTWFpbi1Mb2FkZXInKS5hZGRDbGFzcygnSGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG59XG5cbmRlbGV0ZUFuZFJlbG9hZCA9IGZ1bmN0aW9uKGlkLCByb3V0ZSwgYmlndGV4dCwgc21hbGx0ZXh0KSB7XG5cdHN3YWwoe1xuXHRcdHRpdGxlOiBiaWd0ZXh0LFxuXHRcdHRleHQ6IHNtYWxsdGV4dCxcblx0XHR0eXBlOiAnd2FybmluZycsXG5cdFx0c2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcblx0XHRjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2Jyxcblx0XHRjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuXHRcdGNvbmZpcm1CdXR0b25UZXh0OiAnRUxJTUlOQVInLFxuXHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXG5cdFx0Y29uZmlybUJ1dHRvbkNsYXNzOiAnYnRuIGJ0bkdyZWVuJyxcblx0XHRjYW5jZWxCdXR0b25DbGFzczogJ2J0biBidG5SZWQnLFxuXHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiByb3V0ZSxcblx0XHRcdG1ldGhvZDogJ1BPU1QnLCAgICAgICAgICAgICBcblx0XHRcdGRhdGFUeXBlOiAnSlNPTicsXG5cdFx0XHRkYXRhOiB7IGlkOiBpZCB9LFxuXHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gJCgnI01haW4tTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHQkKCcjQmF0Y2hEZWxldGVCdG4nKS5hZGRDbGFzcygnSGlkZGVuJyk7XG5cdFx0XHRcdGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdC8vIGFsZXJ0X29rKCdPayEnLCdFbGltaW5hY2nDs24gY29tcGxldGEnKTtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbGVydF9lcnJvcignVXBzIScsJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChQdWVkZSBxdWUgZXN0ZSByZWdpc3RybyB0ZW5nYSByZWxhY2nDs24gY29uIG90cm9zIGl0ZW1zIGVuIGVsIHNpc3RlbWEpLiBEZWJlIGVsaW1pbmFyIHByaW1lcm8gbG9zIG1pc21vcy4nKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24oZGF0YSlcblx0XHRcdHtcblx0XHRcdFx0JCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1x0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG59XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQUxFUlRTXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmZ1bmN0aW9uIGFsZXJ0X29rKGJpZ3RleHQsIHNtYWxsdGV4dCl7XG4gICAgc3dhbChcbiAgICAgICAgYmlndGV4dCxcbiAgICAgICAgc21hbGx0ZXh0LFxuICAgICAgICAnc3VjY2VzcydcbiAgICApOyAgICBcbn1cbiAgICBcbmZ1bmN0aW9uIGFsZXJ0X2Vycm9yKGJpZ3RleHQsIHNtYWxsdGV4dCl7XG4gICAgc3dhbChcbiAgICAgICAgYmlndGV4dCxcbiAgICAgICAgc21hbGx0ZXh0LFxuICAgICAgICAnZXJyb3InXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWxlcnRfaW5mbyhiaWd0ZXh0LCBzbWFsbHRleHQpe1xuXG4gICAgc3dhbCh7XG4gICAgICAgICAgICB0aXRsZTogYmlndGV4dCxcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICBodG1sOiBzbWFsbHRleHQsXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OlxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiaW9uLWNoZWNrbWFyay1yb3VuZFwiPjwvaT4gT2shJ1xuICAgICAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjbG9zZVBhcmVudCgpe1xuXHQkKHRoaXMpLnBhcmVudCgnaGlkZScpO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1mdW5jdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9