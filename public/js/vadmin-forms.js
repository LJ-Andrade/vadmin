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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ({

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// ------------ Tags ------------ //
$('.Select-Tags').chosen({
    placeholder_text_multiple: 'Seleccione las etiquetas',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado la etiqueta'
});

$('.Select-Atribute').chosen({
    placeholder_text_multiple: 'Seleccionar',
    // max_selected_options: 3,
    search_contains: true,
    no_results_text: 'No se ha encontrado'
});

$('.Select-Category').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

$('.Select-Chosen').chosen({
    placeholder_text_single: 'Seleccione una categoría'
});

// --------- Slug sanitizer -------- //
$(".SlugInput").keyup(function () {
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');

    $(".SlugInput").val(Text);
});

// --------- Slug AutoFillnput from title --------- //
$("#TitleInput").keyup(function (event) {
    var stt = $(this).val();
    var Text = $(this).val();
    Text = Text.toLowerCase();
    var regExp = /\s+/g;
    Text = Text.replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g, '');
    Text = Text.replace(regExp, '-');
    Text = Text.replace('ñ', 'n');
    Text = Text.replace('á', 'a');
    Text = Text.replace('é', 'e');
    Text = Text.replace('í', 'i');
    Text = Text.replace('ó', 'o');
    Text = Text.replace('ú', 'u');
    $(".SlugInput").val(Text);
});

// $(document).ready(function() {
// 	$('#Multi_Images').filer({
// 		// limit: 3,
// 		maxSize: 3,
// 		extensions: ['jpg', 'jpeg', 'png', 'gif'],
// 		changeInput: true,
// 		showThumbs: true,
// 		addMore: true
// 	});
// });

//////////////////////////////
// 							//
//      CREATE FORM         //
//                          //
//////////////////////////////

// Show Notes Text Area
$('.ShowNotesTextArea').click(function () {
    var notes = $('.NotesTextArea');
    if (notes.hasClass('Hidden')) {
        notes.removeClass('Hidden');
    } else {
        notes.addClass('Hidden');
    }
});

// Add Another Address
$('.AddAnotherAddressBtn').click(function () {
    var addressInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";
    var locInput = "<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>";

    $('.AnotherAddress').append(addressInput);
    $('.AnotherLoc').append(locInput);
});

//////////////////////////////
// 							//
//   EDITORS AND FIELDS     //
//                          //
//////////////////////////////

// $('#Multi_Images').fileuploader({
//     extensions: ['jpg', 'jpeg', 'png', 'gif'],
//     limit: null,
//     addMore: true,
//     // Peso máximo de todas las imágenes
//     maxSize: 5,
//     // Peso máximo por imágen
//     fileMaxSize: 2,
//     theme: 'thumbnails',
//     enableApi: true,
//     captions: {
//         button: function(options) { return 'Seleccionar ' + (options.limit == 1 ? 'Imágenes' : 'Imágen'); },
//         feedback: function(options) { return 'Haga click para agregar...'; },
//         feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada'); },
//         drop: 'Arrastre las imágenes aquí',
//         paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
//         removeConfirmation: 'Eliminar?',
//         errors: {
//             filesLimit: 'Solo es posible subir ${limit} imágen.',
//             filesType: 'Solo se aceptan los formatos: ${extensions}.',
//             fileSize: '${name} es muy grandes! Seleccione una de ${fileMaxSize}MB. como máximo',
//             filesSizeAll: '${name} son muy grandes! Seleccione unas de ${fileMaxSize}MB. como máximo',
//             fileName: 'La imágen con el nombre ${name} ya está seleccionada.',
//             folderUpload: 'No está permitido subir carpetas.'
//         },
//         dialogs: {
//             // alert dialog
//             alert: function(text) {
//                 return alert_confirm(text);
//             },
//             // confirm dialog
//             confirm: function(text, callback) {
//                 'confirm(text) ? callback() : null;'
//             }
//         },
//     }
// });

$('#Single_Image').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
    limit: 1,
    addMore: false,
    fileMaxSize: 2,
    captions: {
        button: function button(options) {
            return 'Seleccionar ' + (options.limit == 1 ? 'Imágen' : 'Imágen');
        },
        feedback: function feedback(options) {
            return 'Agregar imágenes...';
        },
        feedback2: function feedback2(options) {
            return options.length + ' ' + (options.length > 1 ? ' imágenes seleccionadas' : ' imágen seleccionada');
        },
        drop: 'Arrastre las imágenes aquí',
        paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
        removeConfirmation: 'Eliminar?',
        errors: {
            filesLimit: 'Solo es posible subir ${limit} imágen.',
            filesType: 'Solo se aceptan los formatos: ${extensions}.',
            fileSize: 'La imágen pesa mucho! Elija una de ${fileMaxSize}MB como máximo.',
            fileName: 'La imágen con ese nombre ya ha sido elegida',
            folderUpload: 'No está permitido subir carpetas.'
        },
        dialogs: {
            // alert dialog
            alert: function (_alert) {
                function alert(_x) {
                    return _alert.apply(this, arguments);
                }

                alert.toString = function () {
                    return _alert.toString();
                };

                return alert;
            }(function (text) {
                return alert(text);
            }),
            // confirm dialog
            confirm: function confirm(text, callback) {
                'confirm(text) ? callback() : null;';
            }
        }
    }
});

$('#Multi_Images').fileuploader({
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
    changeInput: ' ',
    theme: 'thumbnails',
    enableApi: true,
    addMore: true,
    thumbnails: {
        box: '<div class="fileuploader-items">' + '<ul class="fileuploader-items-list">' + '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' + '</ul>' + '</div>',
        item: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '<div class="progress-holder">${progressBar}</div>' + '</div>' + '</li>',
        item2: '<li class="fileuploader-item">' + '<div class="fileuploader-item-inner">' + '<div class="thumbnail-holder">${image}</div>' + '<div class="actions-holder">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' + '<span class="fileuploader-action-popup"></span>' + '</div>' + '</div>' + '</li>',
        startImageRenderer: true,
        canvasImage: false,
        _selectors: {
            list: '.fileuploader-items-list',
            item: '.fileuploader-item',
            start: '.fileuploader-action-start',
            retry: '.fileuploader-action-retry',
            remove: '.fileuploader-action-remove'
        },
        onItemShow: function onItemShow(item, listEl, parentEl, newInputEl, inputEl) {
            var plusInput = listEl.find('.fileuploader-thumbnails-input'),
                api = $.fileuploader.getInstance(inputEl.get(0));

            plusInput.insertAfter(item.html)[api.getOptions().limit && api.getChoosedFiles().length >= api.getOptions().limit ? 'hide' : 'show']();

            if (item.format == 'image') {
                item.html.find('.fileuploader-item-icon').hide();
            }
        }
    },
    afterRender: function afterRender(listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        plusInput.on('click', function () {
            api.open();
        });
    },
    onRemove: function onRemove(item, listEl, parentEl, newInputEl, inputEl) {
        var plusInput = listEl.find('.fileuploader-thumbnails-input'),
            api = $.fileuploader.getInstance(inputEl.get(0));

        if (api.getOptions().limit && api.getChoosedFiles().length - 1 < api.getOptions().limit) plusInput.show();
    }
    /*
    // while using upload option, please set
    // startImageRenderer: false
    // for a better effect
    upload: {
        url: './php/upload_file.php',
        data: null,
        type: 'POST',
        enctype: 'multipart/form-data',
        start: true,
        synchron: true,
        beforeSend: null,
        onSuccess: function(data, item) {
            setTimeout(function() {
                item.html.find('.progress-holder').hide();
                item.renderThumbnail();
            }, 400);
        },
        onError: function(item) {
            item.html.find('.progress-holder').hide();
            item.html.find('.fileuploader-item-icon i').text('Failed!');
        },
        onProgress: function(data, item) {
            var progressBar = item.html.find('.progress-holder');
            
            if(progressBar.length > 0) {
                progressBar.show();
                progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
            }
        }
    },
    dragDrop: {
        container: '.fileuploader-thumbnails-input'
    },
    onRemove: function(item) {
        $.post('php/upload_remove.php', {
            file: item.name
        });
    },
    */
});

$('.Display-Input-Modificable').click(function () {
    $(this).removeClass('display-input-disabled');
});

// ---- Modificable input text
// Html element
//<p data-editable class="SlugInput">{{ $article->slug }}</p>   

$('body').on('click', '[data-editable]', function () {

    var $el = $(this);

    var $input = $('<input/>').val($el.text());
    $el.replaceWith($input);

    var save = function save() {
        var $p = $('<p data-editable />').text($input.val());
        $input.replaceWith($p);
    };

    /**
      We're defining the callback with `one`, because we know that
      the element will be gone just after that, and we don't want 
      any callbacks leftovers take memory. 
      Next time `p` turns into `input` this single callback 
      will be applied again.
    */
    $input.one('blur', save).focus();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMxYWU4Y2I3MjE5NzljODRmNTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwibmFtZXMiOlsiJCIsImNob3NlbiIsInBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGUiLCJzZWFyY2hfY29udGFpbnMiLCJub19yZXN1bHRzX3RleHQiLCJwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZSIsImtleXVwIiwiVGV4dCIsInZhbCIsInRvTG93ZXJDYXNlIiwicmVnRXhwIiwicmVwbGFjZSIsImV2ZW50Iiwic3R0IiwiY2xpY2siLCJub3RlcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFkZHJlc3NJbnB1dCIsImxvY0lucHV0IiwiYXBwZW5kIiwiZmlsZXVwbG9hZGVyIiwiZXh0ZW5zaW9ucyIsImxpbWl0IiwiYWRkTW9yZSIsImZpbGVNYXhTaXplIiwiY2FwdGlvbnMiLCJidXR0b24iLCJvcHRpb25zIiwiZmVlZGJhY2siLCJmZWVkYmFjazIiLCJsZW5ndGgiLCJkcm9wIiwicGFzdGUiLCJyZW1vdmVDb25maXJtYXRpb24iLCJlcnJvcnMiLCJmaWxlc0xpbWl0IiwiZmlsZXNUeXBlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsImZvbGRlclVwbG9hZCIsImRpYWxvZ3MiLCJhbGVydCIsInRleHQiLCJjb25maXJtIiwiY2FsbGJhY2siLCJjaGFuZ2VJbnB1dCIsInRoZW1lIiwiZW5hYmxlQXBpIiwidGh1bWJuYWlscyIsImJveCIsIml0ZW0iLCJpdGVtMiIsInN0YXJ0SW1hZ2VSZW5kZXJlciIsImNhbnZhc0ltYWdlIiwiX3NlbGVjdG9ycyIsImxpc3QiLCJzdGFydCIsInJldHJ5IiwicmVtb3ZlIiwib25JdGVtU2hvdyIsImxpc3RFbCIsInBhcmVudEVsIiwibmV3SW5wdXRFbCIsImlucHV0RWwiLCJwbHVzSW5wdXQiLCJmaW5kIiwiYXBpIiwiZ2V0SW5zdGFuY2UiLCJnZXQiLCJpbnNlcnRBZnRlciIsImh0bWwiLCJnZXRPcHRpb25zIiwiZ2V0Q2hvb3NlZEZpbGVzIiwiZm9ybWF0IiwiaGlkZSIsImFmdGVyUmVuZGVyIiwib24iLCJvcGVuIiwib25SZW1vdmUiLCJzaG93IiwiJGVsIiwiJGlucHV0IiwicmVwbGFjZVdpdGgiLCJzYXZlIiwiJHAiLCJvbmUiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0FBLEVBQUUsY0FBRixFQUFrQkMsTUFBbEIsQ0FBeUI7QUFDckJDLCtCQUEyQiwwQkFETjtBQUVyQjtBQUNBQyxxQkFBaUIsSUFISTtBQUlyQkMscUJBQWlCO0FBSkksQ0FBekI7O0FBT0FKLEVBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCO0FBQ3pCQywrQkFBMkIsYUFERjtBQUV6QjtBQUNBQyxxQkFBaUIsSUFIUTtBQUl6QkMscUJBQWlCO0FBSlEsQ0FBN0I7O0FBT0FKLEVBQUUsa0JBQUYsRUFBc0JDLE1BQXRCLENBQTZCO0FBQ3pCSSw2QkFBeUI7QUFEQSxDQUE3Qjs7QUFJQUwsRUFBRSxnQkFBRixFQUFvQkMsTUFBcEIsQ0FBMkI7QUFDdkJJLDZCQUF5QjtBQURGLENBQTNCOztBQUlBO0FBQ0FMLEVBQUUsWUFBRixFQUFnQk0sS0FBaEIsQ0FBc0IsWUFBVTtBQUM1QixRQUFJQyxPQUFXUCxFQUFFLElBQUYsRUFBUVEsR0FBUixFQUFmO0FBQ0FELFdBQWVBLEtBQUtFLFdBQUwsRUFBZjtBQUNBLFFBQUlDLFNBQVcsTUFBZjtBQUNBSCxXQUFlQSxLQUFLSSxPQUFMLENBQWEsZ0NBQWIsRUFBOEMsRUFBOUMsQ0FBZjtBQUNBSixXQUFlQSxLQUFLSSxPQUFMLENBQWFELE1BQWIsRUFBb0IsR0FBcEIsQ0FBZjtBQUNBSCxXQUFlQSxLQUFLSSxPQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixDQUFmO0FBQ0FKLFdBQWVBLEtBQUtJLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQWY7QUFDQUosV0FBZUEsS0FBS0ksT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBZjtBQUNBSixXQUFlQSxLQUFLSSxPQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixDQUFmO0FBQ0FKLFdBQWVBLEtBQUtJLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQWY7QUFDQUosV0FBZUEsS0FBS0ksT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBZjs7QUFFQVgsTUFBRSxZQUFGLEVBQWdCUSxHQUFoQixDQUFvQkQsSUFBcEI7QUFDSCxDQWREOztBQWdCQTtBQUNBUCxFQUFFLGFBQUYsRUFBaUJNLEtBQWpCLENBQXVCLFVBQVNNLEtBQVQsRUFBZ0I7QUFDbkMsUUFBSUMsTUFBTWIsRUFBRSxJQUFGLEVBQVFRLEdBQVIsRUFBVjtBQUNBLFFBQUlELE9BQVdQLEVBQUUsSUFBRixFQUFRUSxHQUFSLEVBQWY7QUFDQUQsV0FBZUEsS0FBS0UsV0FBTCxFQUFmO0FBQ0EsUUFBSUMsU0FBVyxNQUFmO0FBQ0FILFdBQWVBLEtBQUtJLE9BQUwsQ0FBYSxnQ0FBYixFQUE4QyxFQUE5QyxDQUFmO0FBQ0FKLFdBQWVBLEtBQUtJLE9BQUwsQ0FBYUQsTUFBYixFQUFvQixHQUFwQixDQUFmO0FBQ0FILFdBQWVBLEtBQUtJLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQWY7QUFDQUosV0FBZUEsS0FBS0ksT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBZjtBQUNBSixXQUFlQSxLQUFLSSxPQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixDQUFmO0FBQ0FKLFdBQWVBLEtBQUtJLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQWY7QUFDQUosV0FBZUEsS0FBS0ksT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBZjtBQUNBSixXQUFlQSxLQUFLSSxPQUFMLENBQWEsR0FBYixFQUFrQixHQUFsQixDQUFmO0FBQ0FYLE1BQUUsWUFBRixFQUFnQlEsR0FBaEIsQ0FBb0JELElBQXBCO0FBQ0gsQ0FkRDs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBUCxFQUFFLG9CQUFGLEVBQXdCYyxLQUF4QixDQUE4QixZQUFVO0FBQ3BDLFFBQUlDLFFBQVFmLEVBQUUsZ0JBQUYsQ0FBWjtBQUNBLFFBQUllLE1BQU1DLFFBQU4sQ0FBZSxRQUFmLENBQUosRUFBNkI7QUFDekJELGNBQU1FLFdBQU4sQ0FBa0IsUUFBbEI7QUFDSCxLQUZELE1BRU87QUFDSEYsY0FBTUcsUUFBTixDQUFlLFFBQWY7QUFDSDtBQUNKLENBUEQ7O0FBU0E7QUFDQWxCLEVBQUUsdUJBQUYsRUFBMkJjLEtBQTNCLENBQWlDLFlBQVU7QUFDdkMsUUFBSUssZUFBZSw4SEFBbkI7QUFDQSxRQUFJQyxXQUFlLDhIQUFuQjs7QUFFQXBCLE1BQUUsaUJBQUYsRUFBcUJxQixNQUFyQixDQUE0QkYsWUFBNUI7QUFDQW5CLE1BQUUsYUFBRixFQUFpQnFCLE1BQWpCLENBQXdCRCxRQUF4QjtBQUNILENBTkQ7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXBCLEVBQUUsZUFBRixFQUFtQnNCLFlBQW5CLENBQWdDO0FBQzVCQyxnQkFBWSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLENBRGdCO0FBRTVCQyxXQUFPLENBRnFCO0FBRzVCQyxhQUFTLEtBSG1CO0FBSTVCQyxpQkFBYSxDQUplO0FBSzVCQyxjQUFVO0FBQ05DLGdCQUFRLGdCQUFTQyxPQUFULEVBQWtCO0FBQUUsbUJBQU8sa0JBQWtCQSxRQUFRTCxLQUFSLElBQWlCLENBQWpCLEdBQXFCLFFBQXJCLEdBQWdDLFFBQWxELENBQVA7QUFBcUUsU0FEM0Y7QUFFTk0sa0JBQVUsa0JBQVNELE9BQVQsRUFBa0I7QUFBRSxtQkFBTyxxQkFBUDtBQUErQixTQUZ2RDtBQUdORSxtQkFBVyxtQkFBU0YsT0FBVCxFQUFrQjtBQUFFLG1CQUFPQSxRQUFRRyxNQUFSLEdBQWlCLEdBQWpCLElBQXdCSCxRQUFRRyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLHlCQUFyQixHQUFpRCxzQkFBekUsQ0FBUDtBQUEwRyxTQUhuSTtBQUlOQyxjQUFNLDRCQUpBO0FBS05DLGVBQU8sc1JBTEQ7QUFNTkMsNEJBQW9CLFdBTmQ7QUFPTkMsZ0JBQVE7QUFDSkMsd0JBQVksd0NBRFI7QUFFSkMsdUJBQVcsOENBRlA7QUFHSkMsc0JBQVUsa0VBSE47QUFJSkMsc0JBQVUsNkNBSk47QUFLSkMsMEJBQWM7QUFMVixTQVBGO0FBY05DLGlCQUFTO0FBQ0w7QUFDQUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsY0FBTyxVQUFTQyxJQUFULEVBQWU7QUFDbEIsdUJBQU9ELE1BQU1DLElBQU4sQ0FBUDtBQUNILGFBRkQsQ0FGSztBQUtMO0FBQ0FDLHFCQUFTLGlCQUFTRCxJQUFULEVBQWVFLFFBQWYsRUFBeUI7QUFDOUI7QUFDSDtBQVJJO0FBZEg7QUFMa0IsQ0FBaEM7O0FBaUNBOUMsRUFBRSxlQUFGLEVBQW1Cc0IsWUFBbkIsQ0FBZ0M7QUFDNUJDLGdCQUFZLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsQ0FEZ0I7QUFFNUJ3QixpQkFBYSxHQUZlO0FBRzVCQyxXQUFPLFlBSHFCO0FBSTVCQyxlQUFXLElBSmlCO0FBSzVCeEIsYUFBUyxJQUxtQjtBQU01QnlCLGdCQUFZO0FBQ1JDLGFBQUsscUNBQ0ssc0NBREwsR0FFUyx5R0FGVCxHQUdLLE9BSEwsR0FJQyxRQUxFO0FBTVJDLGNBQU0sbUNBQ0ssdUNBREwsR0FFUyw4Q0FGVCxHQUdTLDhCQUhULEdBSWdCLGlIQUpoQixHQUthLGlEQUxiLEdBTVMsUUFOVCxHQU9ZLG1EQVBaLEdBUUssUUFSTCxHQVNDLE9BZkM7QUFnQlJDLGVBQU8sbUNBQ0ksdUNBREosR0FFUSw4Q0FGUixHQUdRLDhCQUhSLEdBSVksaUhBSlosR0FLWSxpREFMWixHQU1RLFFBTlIsR0FPSSxRQVBKLEdBUUEsT0F4QkM7QUF5QlJDLDRCQUFvQixJQXpCWjtBQTBCUkMscUJBQWEsS0ExQkw7QUEyQlJDLG9CQUFZO0FBQ1JDLGtCQUFNLDBCQURFO0FBRVJMLGtCQUFNLG9CQUZFO0FBR1JNLG1CQUFPLDRCQUhDO0FBSVJDLG1CQUFPLDRCQUpDO0FBS1JDLG9CQUFRO0FBTEEsU0EzQko7QUFrQ1JDLG9CQUFZLG9CQUFTVCxJQUFULEVBQWVVLE1BQWYsRUFBdUJDLFFBQXZCLEVBQWlDQyxVQUFqQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDOUQsZ0JBQUlDLFlBQVlKLE9BQU9LLElBQVAsQ0FBWSxnQ0FBWixDQUFoQjtBQUFBLGdCQUNJQyxNQUFNcEUsRUFBRXNCLFlBQUYsQ0FBZStDLFdBQWYsQ0FBMkJKLFFBQVFLLEdBQVIsQ0FBWSxDQUFaLENBQTNCLENBRFY7O0FBR0FKLHNCQUFVSyxXQUFWLENBQXNCbkIsS0FBS29CLElBQTNCLEVBQWlDSixJQUFJSyxVQUFKLEdBQWlCakQsS0FBakIsSUFBMEI0QyxJQUFJTSxlQUFKLEdBQXNCMUMsTUFBdEIsSUFBZ0NvQyxJQUFJSyxVQUFKLEdBQWlCakQsS0FBM0UsR0FBbUYsTUFBbkYsR0FBNEYsTUFBN0g7O0FBRUEsZ0JBQUc0QixLQUFLdUIsTUFBTCxJQUFlLE9BQWxCLEVBQTJCO0FBQ3ZCdkIscUJBQUtvQixJQUFMLENBQVVMLElBQVYsQ0FBZSx5QkFBZixFQUEwQ1MsSUFBMUM7QUFDSDtBQUNKO0FBM0NPLEtBTmdCO0FBbUQ1QkMsaUJBQWEscUJBQVNmLE1BQVQsRUFBaUJDLFFBQWpCLEVBQTJCQyxVQUEzQixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDekQsWUFBSUMsWUFBWUosT0FBT0ssSUFBUCxDQUFZLGdDQUFaLENBQWhCO0FBQUEsWUFDSUMsTUFBTXBFLEVBQUVzQixZQUFGLENBQWUrQyxXQUFmLENBQTJCSixRQUFRSyxHQUFSLENBQVksQ0FBWixDQUEzQixDQURWOztBQUdBSixrQkFBVVksRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBVztBQUM3QlYsZ0JBQUlXLElBQUo7QUFDSCxTQUZEO0FBR0gsS0ExRDJCO0FBMkQ1QkMsY0FBVSxrQkFBUzVCLElBQVQsRUFBZVUsTUFBZixFQUF1QkMsUUFBdkIsRUFBaUNDLFVBQWpDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RCxZQUFJQyxZQUFZSixPQUFPSyxJQUFQLENBQVksZ0NBQVosQ0FBaEI7QUFBQSxZQUNJQyxNQUFNcEUsRUFBRXNCLFlBQUYsQ0FBZStDLFdBQWYsQ0FBMkJKLFFBQVFLLEdBQVIsQ0FBWSxDQUFaLENBQTNCLENBRFY7O0FBR0EsWUFBSUYsSUFBSUssVUFBSixHQUFpQmpELEtBQWpCLElBQTBCNEMsSUFBSU0sZUFBSixHQUFzQjFDLE1BQXRCLEdBQStCLENBQS9CLEdBQW1Db0MsSUFBSUssVUFBSixHQUFpQmpELEtBQWxGLEVBQ0kwQyxVQUFVZSxJQUFWO0FBQ1A7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxFNEIsQ0FBaEM7O0FBNkdBakYsRUFBRSw0QkFBRixFQUFnQ2MsS0FBaEMsQ0FBc0MsWUFBVTtBQUM1Q2QsTUFBRSxJQUFGLEVBQVFpQixXQUFSLENBQW9CLHdCQUFwQjtBQUNILENBRkQ7O0FBS0E7QUFDQTtBQUNBOztBQUVBakIsRUFBRSxNQUFGLEVBQVU4RSxFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsWUFBVTs7QUFFL0MsUUFBSUksTUFBTWxGLEVBQUUsSUFBRixDQUFWOztBQUVBLFFBQUltRixTQUFTbkYsRUFBRSxVQUFGLEVBQWNRLEdBQWQsQ0FBbUIwRSxJQUFJdEMsSUFBSixFQUFuQixDQUFiO0FBQ0FzQyxRQUFJRSxXQUFKLENBQWlCRCxNQUFqQjs7QUFFQSxRQUFJRSxPQUFPLFNBQVBBLElBQU8sR0FBVTtBQUNuQixZQUFJQyxLQUFLdEYsRUFBRSxxQkFBRixFQUF5QjRDLElBQXpCLENBQStCdUMsT0FBTzNFLEdBQVAsRUFBL0IsQ0FBVDtBQUNBMkUsZUFBT0MsV0FBUCxDQUFvQkUsRUFBcEI7QUFDRCxLQUhEOztBQUtBOzs7Ozs7O0FBT0FILFdBQU9JLEdBQVAsQ0FBVyxNQUFYLEVBQW1CRixJQUFuQixFQUF5QkcsS0FBekI7QUFFRCxDQXJCSCxFIiwiZmlsZSI6Ii9qcy92YWRtaW4tZm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzMWFlOGNiNzIxOTc5Yzg0ZjUwIiwiLy8gLS0tLS0tLS0tLS0tIFRhZ3MgLS0tLS0tLS0tLS0tIC8vXG4kKCcuU2VsZWN0LVRhZ3MnKS5jaG9zZW4oe1xuICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6ICdTZWxlY2Npb25lIGxhcyBldGlxdWV0YXMnLFxuICAgIC8vIG1heF9zZWxlY3RlZF9vcHRpb25zOiAzLFxuICAgIHNlYXJjaF9jb250YWluczogdHJ1ZSxcbiAgICBub19yZXN1bHRzX3RleHQ6ICdObyBzZSBoYSBlbmNvbnRyYWRvIGxhIGV0aXF1ZXRhJ1xufSk7XG5cbiQoJy5TZWxlY3QtQXRyaWJ1dGUnKS5jaG9zZW4oe1xuICAgIHBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGU6ICdTZWxlY2Npb25hcicsXG4gICAgLy8gbWF4X3NlbGVjdGVkX29wdGlvbnM6IDMsXG4gICAgc2VhcmNoX2NvbnRhaW5zOiB0cnVlLFxuICAgIG5vX3Jlc3VsdHNfdGV4dDogJ05vIHNlIGhhIGVuY29udHJhZG8nXG59KTtcblxuJCgnLlNlbGVjdC1DYXRlZ29yeScpLmNob3Nlbih7XG4gICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6ICdTZWxlY2Npb25lIHVuYSBjYXRlZ29yw61hJyxcbn0pO1xuXG4kKCcuU2VsZWN0LUNob3NlbicpLmNob3Nlbih7XG4gICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6ICdTZWxlY2Npb25lIHVuYSBjYXRlZ29yw61hJyxcbn0pO1xuXG4vLyAtLS0tLS0tLS0gU2x1ZyBzYW5pdGl6ZXIgLS0tLS0tLS0gLy9cbiQoXCIuU2x1Z0lucHV0XCIpLmtleXVwKGZ1bmN0aW9uKCl7XG4gICAgdmFyIFRleHQgICAgID0gJCh0aGlzKS52YWwoKTtcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHJlZ0V4cCAgID0gL1xccysvZztcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoL1smXFwvXFxcXCMswqEhwrQjKygpJH4lLidcIjoqPzw+e31dL2csJycpO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZShyZWdFeHAsJy0nKTtcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OxJywgJ24nKSA7XG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDoScsICdhJykgO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw6knLCAnZScpIDtcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OtJywgJ2knKSA7XG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsycsICdvJykgO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw7onLCAndScpIDtcbiAgICBcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXG59KTtcblxuLy8gLS0tLS0tLS0tIFNsdWcgQXV0b0ZpbGxucHV0IGZyb20gdGl0bGUgLS0tLS0tLS0tIC8vXG4kKFwiI1RpdGxlSW5wdXRcIikua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgc3R0ID0gJCh0aGlzKS52YWwoKTtcbiAgICB2YXIgVGV4dCAgICAgPSAkKHRoaXMpLnZhbCgpO1xuICAgIFRleHQgICAgICAgICA9IFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgcmVnRXhwICAgPSAvXFxzKy9nO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgvWyZcXC9cXFxcIyzCoSHCtCMrKCkkfiUuJ1wiOio/PD57fV0vZywnJyk7XG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKHJlZ0V4cCwnLScpO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw7EnLCAnbicpIDtcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OhJywgJ2EnKSA7XG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDqScsICdlJykgO1xuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgnw60nLCAnaScpIDtcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OzJywgJ28nKSA7XG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDuicsICd1JykgO1xuICAgICQoXCIuU2x1Z0lucHV0XCIpLnZhbChUZXh0KTsgICBcbn0pO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vIFx0JCgnI011bHRpX0ltYWdlcycpLmZpbGVyKHtcbi8vIFx0XHQvLyBsaW1pdDogMyxcbi8vIFx0XHRtYXhTaXplOiAzLFxuLy8gXHRcdGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxuLy8gXHRcdGNoYW5nZUlucHV0OiB0cnVlLFxuLy8gXHRcdHNob3dUaHVtYnM6IHRydWUsXG4vLyBcdFx0YWRkTW9yZTogdHJ1ZVxuLy8gXHR9KTtcbi8vIH0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFx0XHRcdFx0XHRcdFx0Ly9cbi8vICAgICAgQ1JFQVRFIEZPUk0gICAgICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gU2hvdyBOb3RlcyBUZXh0IEFyZWFcbiQoJy5TaG93Tm90ZXNUZXh0QXJlYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5vdGVzID0gJCgnLk5vdGVzVGV4dEFyZWEnKTtcbiAgICBpZiAobm90ZXMuaGFzQ2xhc3MoJ0hpZGRlbicpKXtcbiAgICAgICAgbm90ZXMucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGVzLmFkZENsYXNzKCdIaWRkZW4nKTtcbiAgICB9XG59KTtcblxuLy8gQWRkIEFub3RoZXIgQWRkcmVzc1xuJCgnLkFkZEFub3RoZXJBZGRyZXNzQnRuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICB2YXIgYWRkcmVzc0lucHV0ID0gXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2Ugb3RybyB0ZWzDqWZvbm8nIG5hbWU9J2RlbGl2ZXJ5YWRkcmVzc1tdJyB0eXBlPSd0ZXh0JyBzdHlsZT0nbWFyZ2luLXRvcDo1cHgnPlwiO1xuICAgIHZhciBsb2NJbnB1dCAgICAgPSBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBvdHJvIHRlbMOpZm9ubycgbmFtZT0nZGVsaXZlcnlhZGRyZXNzW10nIHR5cGU9J3RleHQnIHN0eWxlPSdtYXJnaW4tdG9wOjVweCc+XCI7XG5cbiAgICAkKCcuQW5vdGhlckFkZHJlc3MnKS5hcHBlbmQoYWRkcmVzc0lucHV0KTtcbiAgICAkKCcuQW5vdGhlckxvYycpLmFwcGVuZChsb2NJbnB1dCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFx0XHRcdFx0XHRcdFx0Ly9cbi8vICAgRURJVE9SUyBBTkQgRklFTERTICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gJCgnI011bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XG4vLyAgICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXG4vLyAgICAgbGltaXQ6IG51bGwsXG4vLyAgICAgYWRkTW9yZTogdHJ1ZSxcbi8vICAgICAvLyBQZXNvIG3DoXhpbW8gZGUgdG9kYXMgbGFzIGltw6FnZW5lc1xuLy8gICAgIG1heFNpemU6IDUsXG4vLyAgICAgLy8gUGVzbyBtw6F4aW1vIHBvciBpbcOhZ2VuXG4vLyAgICAgZmlsZU1heFNpemU6IDIsXG4vLyAgICAgdGhlbWU6ICd0aHVtYm5haWxzJyxcbi8vICAgICBlbmFibGVBcGk6IHRydWUsXG4vLyAgICAgY2FwdGlvbnM6IHtcbi8vICAgICAgICAgYnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnU2VsZWNjaW9uYXIgJyArIChvcHRpb25zLmxpbWl0ID09IDEgPyAnSW3DoWdlbmVzJyA6ICdJbcOhZ2VuJyk7IH0sXG4vLyAgICAgICAgIGZlZWRiYWNrOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnSGFnYSBjbGljayBwYXJhIGFncmVnYXIuLi4nOyB9LFxuLy8gICAgICAgICBmZWVkYmFjazI6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyAnICsgKG9wdGlvbnMubGVuZ3RoID4gMSA/ICcgaW3DoWdlbmVzIHNlbGVjY2lvbmFkYXMnIDogJyBpbcOhZ2VuIHNlbGVjY2lvbmFkYScpOyB9LFxuLy8gICAgICAgICBkcm9wOiAnQXJyYXN0cmUgbGFzIGltw6FnZW5lcyBhcXXDrScsXG4vLyAgICAgICAgIHBhc3RlOiAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1wZW5kaW5nLWxvYWRlclwiPjxkaXYgY2xhc3M9XCJsZWZ0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PC9kaXY+IFBhc3RpbmcgYSBmaWxlLCBjbGljayBoZXJlIHRvIGNhbmNlbC4nLFxuLy8gICAgICAgICByZW1vdmVDb25maXJtYXRpb246ICdFbGltaW5hcj8nLFxuLy8gICAgICAgICBlcnJvcnM6IHtcbi8vICAgICAgICAgICAgIGZpbGVzTGltaXQ6ICdTb2xvIGVzIHBvc2libGUgc3ViaXIgJHtsaW1pdH0gaW3DoWdlbi4nLFxuLy8gICAgICAgICAgICAgZmlsZXNUeXBlOiAnU29sbyBzZSBhY2VwdGFuIGxvcyBmb3JtYXRvczogJHtleHRlbnNpb25zfS4nLFxuLy8gICAgICAgICAgICAgZmlsZVNpemU6ICcke25hbWV9IGVzIG11eSBncmFuZGVzISBTZWxlY2Npb25lIHVuYSBkZSAke2ZpbGVNYXhTaXplfU1CLiBjb21vIG3DoXhpbW8nLFxuLy8gICAgICAgICAgICAgZmlsZXNTaXplQWxsOiAnJHtuYW1lfSBzb24gbXV5IGdyYW5kZXMhIFNlbGVjY2lvbmUgdW5hcyBkZSAke2ZpbGVNYXhTaXplfU1CLiBjb21vIG3DoXhpbW8nLFxuLy8gICAgICAgICAgICAgZmlsZU5hbWU6ICdMYSBpbcOhZ2VuIGNvbiBlbCBub21icmUgJHtuYW1lfSB5YSBlc3TDoSBzZWxlY2Npb25hZGEuJyxcbi8vICAgICAgICAgICAgIGZvbGRlclVwbG9hZDogJ05vIGVzdMOhIHBlcm1pdGlkbyBzdWJpciBjYXJwZXRhcy4nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGRpYWxvZ3M6IHtcbi8vICAgICAgICAgICAgIC8vIGFsZXJ0IGRpYWxvZ1xuLy8gICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKHRleHQpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnRfY29uZmlybSh0ZXh0KTtcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAvLyBjb25maXJtIGRpYWxvZ1xuLy8gICAgICAgICAgICAgY29uZmlybTogZnVuY3Rpb24odGV4dCwgY2FsbGJhY2spIHtcbi8vICAgICAgICAgICAgICAgICAnY29uZmlybSh0ZXh0KSA/IGNhbGxiYWNrKCkgOiBudWxsOydcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSxcbi8vICAgICB9XG4vLyB9KTtcblxuJCgnI1NpbmdsZV9JbWFnZScpLmZpbGV1cGxvYWRlcih7XG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXG4gICAgbGltaXQ6IDEsXG4gICAgYWRkTW9yZTogZmFsc2UsXG4gICAgZmlsZU1heFNpemU6IDIsXG4gICAgY2FwdGlvbnM6IHtcbiAgICAgICAgYnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnU2VsZWNjaW9uYXIgJyArIChvcHRpb25zLmxpbWl0ID09IDEgPyAnSW3DoWdlbicgOiAnSW3DoWdlbicpOyB9LFxuICAgICAgICBmZWVkYmFjazogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ0FncmVnYXIgaW3DoWdlbmVzLi4uJzsgfSxcbiAgICAgICAgZmVlZGJhY2syOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBvcHRpb25zLmxlbmd0aCArICcgJyArIChvcHRpb25zLmxlbmd0aCA+IDEgPyAnIGltw6FnZW5lcyBzZWxlY2Npb25hZGFzJyA6ICcgaW3DoWdlbiBzZWxlY2Npb25hZGEnKTsgfSxcbiAgICAgICAgZHJvcDogJ0FycmFzdHJlIGxhcyBpbcOhZ2VuZXMgYXF1w60nLFxuICAgICAgICBwYXN0ZTogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItcGVuZGluZy1sb2FkZXJcIj48ZGl2IGNsYXNzPVwibGVmdC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJyaWdodC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjwvZGl2PiBQYXN0aW5nIGEgZmlsZSwgY2xpY2sgaGVyZSB0byBjYW5jZWwuJyxcbiAgICAgICAgcmVtb3ZlQ29uZmlybWF0aW9uOiAnRWxpbWluYXI/JyxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICBmaWxlc0xpbWl0OiAnU29sbyBlcyBwb3NpYmxlIHN1YmlyICR7bGltaXR9IGltw6FnZW4uJyxcbiAgICAgICAgICAgIGZpbGVzVHlwZTogJ1NvbG8gc2UgYWNlcHRhbiBsb3MgZm9ybWF0b3M6ICR7ZXh0ZW5zaW9uc30uJyxcbiAgICAgICAgICAgIGZpbGVTaXplOiAnTGEgaW3DoWdlbiBwZXNhIG11Y2hvISBFbGlqYSB1bmEgZGUgJHtmaWxlTWF4U2l6ZX1NQiBjb21vIG3DoXhpbW8uJyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnTGEgaW3DoWdlbiBjb24gZXNlIG5vbWJyZSB5YSBoYSBzaWRvIGVsZWdpZGEnLFxuICAgICAgICAgICAgZm9sZGVyVXBsb2FkOiAnTm8gZXN0w6EgcGVybWl0aWRvIHN1YmlyIGNhcnBldGFzLicsXG4gICAgICAgIH0sXG4gICAgICAgIGRpYWxvZ3M6IHtcbiAgICAgICAgICAgIC8vIGFsZXJ0IGRpYWxvZ1xuICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQodGV4dCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gY29uZmlybSBkaWFsb2dcbiAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKHRleHQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgJ2NvbmZpcm0odGV4dCkgPyBjYWxsYmFjaygpIDogbnVsbDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cblxuJCgnI011bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCddLFxuICAgIGNoYW5nZUlucHV0OiAnICcsXG4gICAgdGhlbWU6ICd0aHVtYm5haWxzJyxcbiAgICBlbmFibGVBcGk6IHRydWUsXG4gICAgYWRkTW9yZTogdHJ1ZSxcbiAgICB0aHVtYm5haWxzOiB7XG4gICAgICAgIGJveDogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXNcIj4nICtcbiAgICAgICAgICAgICAgICAgICc8dWwgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXMtbGlzdFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICc8bGkgY2xhc3M9XCJmaWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dFwiPjxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dC1pbm5lclwiPis8L2Rpdj48L2xpPicgK1xuICAgICAgICAgICAgICAgICAgJzwvdWw+JyArXG4gICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICBpdGVtOiAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1cIj4nICtcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWhvbGRlclwiPiR7aW1hZ2V9PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ob2xkZXJcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXBcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwcm9ncmVzcy1ob2xkZXJcIj4ke3Byb2dyZXNzQmFyfTwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgIGl0ZW0yOiAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1cIj4nICtcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLWhvbGRlclwiPiR7aW1hZ2V9PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ob2xkZXJcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24tcG9wdXBcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICBzdGFydEltYWdlUmVuZGVyZXI6IHRydWUsXG4gICAgICAgIGNhbnZhc0ltYWdlOiBmYWxzZSxcbiAgICAgICAgX3NlbGVjdG9yczoge1xuICAgICAgICAgICAgbGlzdDogJy5maWxldXBsb2FkZXItaXRlbXMtbGlzdCcsXG4gICAgICAgICAgICBpdGVtOiAnLmZpbGV1cGxvYWRlci1pdGVtJyxcbiAgICAgICAgICAgIHN0YXJ0OiAnLmZpbGV1cGxvYWRlci1hY3Rpb24tc3RhcnQnLFxuICAgICAgICAgICAgcmV0cnk6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1yZXRyeScsXG4gICAgICAgICAgICByZW1vdmU6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmUnXG4gICAgICAgIH0sXG4gICAgICAgIG9uSXRlbVNob3c6IGZ1bmN0aW9uKGl0ZW0sIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcbiAgICAgICAgICAgIHZhciBwbHVzSW5wdXQgPSBsaXN0RWwuZmluZCgnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0JyksXG4gICAgICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwbHVzSW5wdXQuaW5zZXJ0QWZ0ZXIoaXRlbS5odG1sKVthcGkuZ2V0T3B0aW9ucygpLmxpbWl0ICYmIGFwaS5nZXRDaG9vc2VkRmlsZXMoKS5sZW5ndGggPj0gYXBpLmdldE9wdGlvbnMoKS5saW1pdCA/ICdoaWRlJyA6ICdzaG93J10oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaXRlbS5mb3JtYXQgPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcuZmlsZXVwbG9hZGVyLWl0ZW0taWNvbicpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcbiAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcbiAgICAgICAgICAgIGFwaSA9ICQuZmlsZXVwbG9hZGVyLmdldEluc3RhbmNlKGlucHV0RWwuZ2V0KDApKTtcbiAgICBcbiAgICAgICAgcGx1c0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYXBpLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvblJlbW92ZTogZnVuY3Rpb24oaXRlbSwgbGlzdEVsLCBwYXJlbnRFbCwgbmV3SW5wdXRFbCwgaW5wdXRFbCkge1xuICAgICAgICB2YXIgcGx1c0lucHV0ID0gbGlzdEVsLmZpbmQoJy5maWxldXBsb2FkZXItdGh1bWJuYWlscy1pbnB1dCcpLFxuICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xuICAgIFxuICAgICAgICBpZiAoYXBpLmdldE9wdGlvbnMoKS5saW1pdCAmJiBhcGkuZ2V0Q2hvb3NlZEZpbGVzKCkubGVuZ3RoIC0gMSA8IGFwaS5nZXRPcHRpb25zKCkubGltaXQpXG4gICAgICAgICAgICBwbHVzSW5wdXQuc2hvdygpO1xuICAgIH0sXG4gICAgLypcbiAgICAvLyB3aGlsZSB1c2luZyB1cGxvYWQgb3B0aW9uLCBwbGVhc2Ugc2V0XG4gICAgLy8gc3RhcnRJbWFnZVJlbmRlcmVyOiBmYWxzZVxuICAgIC8vIGZvciBhIGJldHRlciBlZmZlY3RcbiAgICB1cGxvYWQ6IHtcbiAgICAgICAgdXJsOiAnLi9waHAvdXBsb2FkX2ZpbGUucGhwJyxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBlbmN0eXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgICBzeW5jaHJvbjogdHJ1ZSxcbiAgICAgICAgYmVmb3JlU2VuZDogbnVsbCxcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucmVuZGVyVGh1bWJuYWlsKCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpLmhpZGUoKTtcbiAgICAgICAgICAgIGl0ZW0uaHRtbC5maW5kKCcuZmlsZXVwbG9hZGVyLWl0ZW0taWNvbiBpJykudGV4dCgnRmFpbGVkIScpO1xuICAgICAgICB9LFxuICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihwcm9ncmVzc0Jhci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc2hvdygpO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmZpbmQoJy5maWxldXBsb2FkZXItcHJvZ3Jlc3NiYXIgLmJhcicpLndpZHRoKGRhdGEucGVyY2VudGFnZSArIFwiJVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ0Ryb3A6IHtcbiAgICAgICAgY29udGFpbmVyOiAnLmZpbGV1cGxvYWRlci10aHVtYm5haWxzLWlucHV0J1xuICAgIH0sXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgJC5wb3N0KCdwaHAvdXBsb2FkX3JlbW92ZS5waHAnLCB7XG4gICAgICAgICAgICBmaWxlOiBpdGVtLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAqL1xufSk7XG5cblxuJCgnLkRpc3BsYXktSW5wdXQtTW9kaWZpY2FibGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktaW5wdXQtZGlzYWJsZWQnKTsgXG59KTtcblxuXG4vLyAtLS0tIE1vZGlmaWNhYmxlIGlucHV0IHRleHRcbi8vIEh0bWwgZWxlbWVudFxuLy88cCBkYXRhLWVkaXRhYmxlIGNsYXNzPVwiU2x1Z0lucHV0XCI+e3sgJGFydGljbGUtPnNsdWcgfX08L3A+ICAgXG5cbiQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtZWRpdGFibGVdJywgZnVuY3Rpb24oKXtcbiAgXG4gICAgdmFyICRlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dC8+JykudmFsKCAkZWwudGV4dCgpICk7XG4gICAgJGVsLnJlcGxhY2VXaXRoKCAkaW5wdXQgKTtcbiAgICBcbiAgICB2YXIgc2F2ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJHAgPSAkKCc8cCBkYXRhLWVkaXRhYmxlIC8+JykudGV4dCggJGlucHV0LnZhbCgpICk7XG4gICAgICAkaW5wdXQucmVwbGFjZVdpdGgoICRwICk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgIFdlJ3JlIGRlZmluaW5nIHRoZSBjYWxsYmFjayB3aXRoIGBvbmVgLCBiZWNhdXNlIHdlIGtub3cgdGhhdFxuICAgICAgdGhlIGVsZW1lbnQgd2lsbCBiZSBnb25lIGp1c3QgYWZ0ZXIgdGhhdCwgYW5kIHdlIGRvbid0IHdhbnQgXG4gICAgICBhbnkgY2FsbGJhY2tzIGxlZnRvdmVycyB0YWtlIG1lbW9yeS4gXG4gICAgICBOZXh0IHRpbWUgYHBgIHR1cm5zIGludG8gYGlucHV0YCB0aGlzIHNpbmdsZSBjYWxsYmFjayBcbiAgICAgIHdpbGwgYmUgYXBwbGllZCBhZ2Fpbi5cbiAgICAqL1xuICAgICRpbnB1dC5vbmUoJ2JsdXInLCBzYXZlKS5mb2N1cygpO1xuICAgIFxuICB9KTtcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwic291cmNlUm9vdCI6IiJ9