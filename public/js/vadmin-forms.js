!function(e){var i={};function t(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/",t(t.s=66)}({66:function(e,i,t){e.exports=t(67)},67:function(e,i){$(".Select-Tags").chosen({placeholder_text_multiple:"Seleccione las etiquetas",search_contains:!0,no_results_text:"No se ha encontrado la etiqueta"}),$(".Select-Atribute").chosen({placeholder_text_multiple:"Seleccionar",search_contains:!0,no_results_text:"No se ha encontrado"}),$(".Select-Category").chosen({placeholder_text_single:"Seleccione una categoría"}),$(".Select-Chosen").chosen({placeholder_text_single:"Seleccione una categoría"}),$(".SlugInput").keyup(function(){var e=$(this).val();e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g,"")).replace(/\s+/g,"-")).replace("ñ","n")).replace("á","a")).replace("é","e")).replace("í","i")).replace("ó","o")).replace("ú","u"),$(".SlugInput").val(e)}),$("#TitleInput").keyup(function(e){$(this).val();var i=$(this).val();i=(i=(i=(i=(i=(i=(i=(i=(i=i.toLowerCase()).replace(/[&\/\\#,¡!´#+()$~%.'":*?<>{}]/g,"")).replace(/\s+/g,"-")).replace("ñ","n")).replace("á","a")).replace("é","e")).replace("í","i")).replace("ó","o")).replace("ú","u"),$(".SlugInput").val(i)}),$(".ShowNotesTextArea").click(function(){var e=$(".NotesTextArea");e.hasClass("Hidden")?e.removeClass("Hidden"):e.addClass("Hidden")}),$(".AddAnotherAddressBtn").click(function(){$(".AnotherAddress").append("<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>"),$(".AnotherLoc").append("<input class='form-control' placeholder='Ingrese otro teléfono' name='deliveryaddress[]' type='text' style='margin-top:5px'>")}),$("#Single_Image").fileuploader({extensions:["jpg","jpeg","png","gif"],limit:1,addMore:!1,fileMaxSize:2,captions:{button:function(e){return"Seleccionar "+(e.limit,"Imágen")},feedback:function(e){return"Agregar imágenes..."},feedback2:function(e){return e.length+" "+(e.length>1?" imágenes seleccionadas":" imágen seleccionada")},drop:"Arrastre las imágenes aquí",paste:'<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',removeConfirmation:"Eliminar?",errors:{filesLimit:"Solo es posible subir ${limit} imágen.",filesType:"Solo se aceptan los formatos: ${extensions}.",fileSize:"La imágen pesa mucho! Elija una de ${fileMaxSize}MB como máximo.",fileName:"La imágen con ese nombre ya ha sido elegida",folderUpload:"No está permitido subir carpetas."},dialogs:{alert:function(e){function i(i){return e.apply(this,arguments)}return i.toString=function(){return e.toString()},i}(function(e){return alert(e)}),confirm:function(e,i){"confirm(text) ? callback() : null;"}}}}),$("#Multi_Images").fileuploader({extensions:["jpg","jpeg","png","gif","bmp"],changeInput:" ",theme:"thumbnails",enableApi:!0,addMore:!0,thumbnails:{box:'<div class="fileuploader-items"><ul class="fileuploader-items-list"><li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li></ul></div>',item:'<li class="fileuploader-item"><div class="fileuploader-item-inner"><div class="thumbnail-holder">${image}</div><div class="actions-holder"><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a><span class="fileuploader-action-popup"></span></div><div class="progress-holder">${progressBar}</div></div></li>',item2:'<li class="fileuploader-item"><div class="fileuploader-item-inner"><div class="thumbnail-holder">${image}</div><div class="actions-holder"><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a><span class="fileuploader-action-popup"></span></div></div></li>',startImageRenderer:!0,canvasImage:!1,_selectors:{list:".fileuploader-items-list",item:".fileuploader-item",start:".fileuploader-action-start",retry:".fileuploader-action-retry",remove:".fileuploader-action-remove"},onItemShow:function(e,i,t,a,l){var n=i.find(".fileuploader-thumbnails-input"),o=$.fileuploader.getInstance(l.get(0));n.insertAfter(e.html)[o.getOptions().limit&&o.getChoosedFiles().length>=o.getOptions().limit?"hide":"show"](),"image"==e.format&&e.html.find(".fileuploader-item-icon").hide()}},afterRender:function(e,i,t,a){var l=e.find(".fileuploader-thumbnails-input"),n=$.fileuploader.getInstance(a.get(0));l.on("click",function(){n.open()})},onRemove:function(e,i,t,a,l){var n=i.find(".fileuploader-thumbnails-input"),o=$.fileuploader.getInstance(l.get(0));o.getOptions().limit&&o.getChoosedFiles().length-1<o.getOptions().limit&&n.show()}}),$(".Display-Input-Modificable").click(function(){$(this).removeClass("display-input-disabled")}),$("body").on("click","[data-editable]",function(){var e=$(this),i=$("<input/>").val(e.text());e.replaceWith(i);i.one("blur",function(){var e=$("<p data-editable />").text(i.val());i.replaceWith(e)}).focus()})}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzBkZTYwNzg5ZThmZmY2M2QxNmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92YWRtaW4tZm9ybXMuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIiQiLCJjaG9zZW4iLCJwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlIiwic2VhcmNoX2NvbnRhaW5zIiwibm9fcmVzdWx0c190ZXh0IiwicGxhY2Vob2xkZXJfdGV4dF9zaW5nbGUiLCJrZXl1cCIsIlRleHQiLCJ0aGlzIiwidmFsIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZXZlbnQiLCJjbGljayIsIm5vdGVzIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXBwZW5kIiwiZmlsZXVwbG9hZGVyIiwiZXh0ZW5zaW9ucyIsImxpbWl0IiwiYWRkTW9yZSIsImZpbGVNYXhTaXplIiwiY2FwdGlvbnMiLCJidXR0b24iLCJvcHRpb25zIiwiZmVlZGJhY2siLCJmZWVkYmFjazIiLCJsZW5ndGgiLCJkcm9wIiwicGFzdGUiLCJyZW1vdmVDb25maXJtYXRpb24iLCJlcnJvcnMiLCJmaWxlc0xpbWl0IiwiZmlsZXNUeXBlIiwiZmlsZVNpemUiLCJmaWxlTmFtZSIsImZvbGRlclVwbG9hZCIsImRpYWxvZ3MiLCJhbGVydCIsIl94IiwiX2FsZXJ0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0b1N0cmluZyIsInRleHQiLCJjb25maXJtIiwiY2FsbGJhY2siLCJjaGFuZ2VJbnB1dCIsInRoZW1lIiwiZW5hYmxlQXBpIiwidGh1bWJuYWlscyIsImJveCIsIml0ZW0iLCJpdGVtMiIsInN0YXJ0SW1hZ2VSZW5kZXJlciIsImNhbnZhc0ltYWdlIiwiX3NlbGVjdG9ycyIsImxpc3QiLCJzdGFydCIsInJldHJ5IiwicmVtb3ZlIiwib25JdGVtU2hvdyIsImxpc3RFbCIsInBhcmVudEVsIiwibmV3SW5wdXRFbCIsImlucHV0RWwiLCJwbHVzSW5wdXQiLCJmaW5kIiwiYXBpIiwiZ2V0SW5zdGFuY2UiLCJpbnNlcnRBZnRlciIsImh0bWwiLCJnZXRPcHRpb25zIiwiZ2V0Q2hvb3NlZEZpbGVzIiwiZm9ybWF0IiwiaGlkZSIsImFmdGVyUmVuZGVyIiwib24iLCJvcGVuIiwib25SZW1vdmUiLCJzaG93IiwiJGVsIiwiJGlucHV0IiwicmVwbGFjZVdpdGgiLCJvbmUiLCIkcCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FDQUssY0FBQSxFQUNBQyxZQUFBLEVBQ0FDLElBQUFOLEtBTUFaLEVBQUFtQixFQUFBLFNBQUFoQixHQUNBLElBQUFTLEVBQUFULEtBQUFpQixXQUNBLFdBQTJCLE9BQUFqQixFQUFBLFNBQzNCLFdBQWlDLE9B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QUFPM0UsT0FDL0MyRSxFQUFPQyxZQUFhRSxLQVVHQyIsImZpbGUiOiIvanMvdmFkbWluLWZvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MGRlNjA3ODllOGZmZjYzZDE2YSIsIi8vIC0tLS0tLS0tLS0tLSBUYWdzIC0tLS0tLS0tLS0tLSAvL1xyXG4kKCcuU2VsZWN0LVRhZ3MnKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogJ1NlbGVjY2lvbmUgbGFzIGV0aXF1ZXRhcycsXHJcbiAgICAvLyBtYXhfc2VsZWN0ZWRfb3B0aW9uczogMyxcclxuICAgIHNlYXJjaF9jb250YWluczogdHJ1ZSxcclxuICAgIG5vX3Jlc3VsdHNfdGV4dDogJ05vIHNlIGhhIGVuY29udHJhZG8gbGEgZXRpcXVldGEnXHJcbn0pO1xyXG5cclxuJCgnLlNlbGVjdC1BdHJpYnV0ZScpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlOiAnU2VsZWNjaW9uYXInLFxyXG4gICAgLy8gbWF4X3NlbGVjdGVkX29wdGlvbnM6IDMsXHJcbiAgICBzZWFyY2hfY29udGFpbnM6IHRydWUsXHJcbiAgICBub19yZXN1bHRzX3RleHQ6ICdObyBzZSBoYSBlbmNvbnRyYWRvJ1xyXG59KTtcclxuXHJcbiQoJy5TZWxlY3QtQ2F0ZWdvcnknKS5jaG9zZW4oe1xyXG4gICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6ICdTZWxlY2Npb25lIHVuYSBjYXRlZ29yw61hJyxcclxufSk7XHJcblxyXG4kKCcuU2VsZWN0LUNob3NlbicpLmNob3Nlbih7XHJcbiAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogJ1NlbGVjY2lvbmUgdW5hIGNhdGVnb3LDrWEnLFxyXG59KTtcclxuXHJcbi8vIC0tLS0tLS0tLSBTbHVnIHNhbml0aXplciAtLS0tLS0tLSAvL1xyXG4kKFwiLlNsdWdJbnB1dFwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG4gICAgdmFyIFRleHQgICAgID0gJCh0aGlzKS52YWwoKTtcclxuICAgIFRleHQgICAgICAgICA9IFRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciByZWdFeHAgICA9IC9cXHMrL2c7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoL1smXFwvXFxcXCMswqEhwrQjKygpJH4lLidcIjoqPzw+e31dL2csJycpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKHJlZ0V4cCwnLScpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsScsICduJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDoScsICdhJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDqScsICdlJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDrScsICdpJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDsycsICdvJykgO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC5yZXBsYWNlKCfDuicsICd1JykgO1xyXG4gICAgXHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuLy8gLS0tLS0tLS0tIFNsdWcgQXV0b0ZpbGxucHV0IGZyb20gdGl0bGUgLS0tLS0tLS0tIC8vXHJcbiQoXCIjVGl0bGVJbnB1dFwiKS5rZXl1cChmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHN0dCA9ICQodGhpcykudmFsKCk7XHJcbiAgICB2YXIgVGV4dCAgICAgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgVGV4dCAgICAgICAgID0gVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHJlZ0V4cCAgID0gL1xccysvZztcclxuICAgIFRleHQgICAgICAgICA9IFRleHQucmVwbGFjZSgvWyZcXC9cXFxcIyzCoSHCtCMrKCkkfiUuJ1wiOio/PD57fV0vZywnJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UocmVnRXhwLCctJyk7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OxJywgJ24nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OhJywgJ2EnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OpJywgJ2UnKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OtJywgJ2knKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8OzJywgJ28nKSA7XHJcbiAgICBUZXh0ICAgICAgICAgPSBUZXh0LnJlcGxhY2UoJ8O6JywgJ3UnKSA7XHJcbiAgICAkKFwiLlNsdWdJbnB1dFwiKS52YWwoVGV4dCk7ICAgXHJcbn0pO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vIFx0JCgnI011bHRpX0ltYWdlcycpLmZpbGVyKHtcclxuLy8gXHRcdC8vIGxpbWl0OiAzLFxyXG4vLyBcdFx0bWF4U2l6ZTogMyxcclxuLy8gXHRcdGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZiddLFxyXG4vLyBcdFx0Y2hhbmdlSW5wdXQ6IHRydWUsXHJcbi8vIFx0XHRzaG93VGh1bWJzOiB0cnVlLFxyXG4vLyBcdFx0YWRkTW9yZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBcdFx0XHRcdFx0XHRcdC8vXHJcbi8vICAgICAgQ1JFQVRFIEZPUk0gICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBTaG93IE5vdGVzIFRleHQgQXJlYVxyXG4kKCcuU2hvd05vdGVzVGV4dEFyZWEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgdmFyIG5vdGVzID0gJCgnLk5vdGVzVGV4dEFyZWEnKTtcclxuICAgIGlmIChub3Rlcy5oYXNDbGFzcygnSGlkZGVuJykpe1xyXG4gICAgICAgIG5vdGVzLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm90ZXMuYWRkQ2xhc3MoJ0hpZGRlbicpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEFkZCBBbm90aGVyIEFkZHJlc3NcclxuJCgnLkFkZEFub3RoZXJBZGRyZXNzQnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHZhciBhZGRyZXNzSW5wdXQgPSBcIjxpbnB1dCBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nSW5ncmVzZSBvdHJvIHRlbMOpZm9ubycgbmFtZT0nZGVsaXZlcnlhZGRyZXNzW10nIHR5cGU9J3RleHQnIHN0eWxlPSdtYXJnaW4tdG9wOjVweCc+XCI7XHJcbiAgICB2YXIgbG9jSW5wdXQgICAgID0gXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2Ugb3RybyB0ZWzDqWZvbm8nIG5hbWU9J2RlbGl2ZXJ5YWRkcmVzc1tdJyB0eXBlPSd0ZXh0JyBzdHlsZT0nbWFyZ2luLXRvcDo1cHgnPlwiO1xyXG5cclxuICAgICQoJy5Bbm90aGVyQWRkcmVzcycpLmFwcGVuZChhZGRyZXNzSW5wdXQpO1xyXG4gICAgJCgnLkFub3RoZXJMb2MnKS5hcHBlbmQobG9jSW5wdXQpO1xyXG59KTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gXHRcdFx0XHRcdFx0XHQvL1xyXG4vLyAgIEVESVRPUlMgQU5EIEZJRUxEUyAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gJCgnI011bHRpX0ltYWdlcycpLmZpbGV1cGxvYWRlcih7XHJcbi8vICAgICBleHRlbnNpb25zOiBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnXSxcclxuLy8gICAgIGxpbWl0OiBudWxsLFxyXG4vLyAgICAgYWRkTW9yZTogdHJ1ZSxcclxuLy8gICAgIC8vIFBlc28gbcOheGltbyBkZSB0b2RhcyBsYXMgaW3DoWdlbmVzXHJcbi8vICAgICBtYXhTaXplOiA1LFxyXG4vLyAgICAgLy8gUGVzbyBtw6F4aW1vIHBvciBpbcOhZ2VuXHJcbi8vICAgICBmaWxlTWF4U2l6ZTogMixcclxuLy8gICAgIHRoZW1lOiAndGh1bWJuYWlscycsXHJcbi8vICAgICBlbmFibGVBcGk6IHRydWUsXHJcbi8vICAgICBjYXB0aW9uczoge1xyXG4vLyAgICAgICAgIGJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ1NlbGVjY2lvbmFyICcgKyAob3B0aW9ucy5saW1pdCA9PSAxID8gJ0ltw6FnZW5lcycgOiAnSW3DoWdlbicpOyB9LFxyXG4vLyAgICAgICAgIGZlZWRiYWNrOiBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiAnSGFnYSBjbGljayBwYXJhIGFncmVnYXIuLi4nOyB9LFxyXG4vLyAgICAgICAgIGZlZWRiYWNrMjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gb3B0aW9ucy5sZW5ndGggKyAnICcgKyAob3B0aW9ucy5sZW5ndGggPiAxID8gJyBpbcOhZ2VuZXMgc2VsZWNjaW9uYWRhcycgOiAnIGltw6FnZW4gc2VsZWNjaW9uYWRhJyk7IH0sXHJcbi8vICAgICAgICAgZHJvcDogJ0FycmFzdHJlIGxhcyBpbcOhZ2VuZXMgYXF1w60nLFxyXG4vLyAgICAgICAgIHBhc3RlOiAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1wZW5kaW5nLWxvYWRlclwiPjxkaXYgY2xhc3M9XCJsZWZ0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNwaW5uZXJcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0LWhhbGZcIiBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjogJHttc31zXCI+PC9kaXY+PC9kaXY+IFBhc3RpbmcgYSBmaWxlLCBjbGljayBoZXJlIHRvIGNhbmNlbC4nLFxyXG4vLyAgICAgICAgIHJlbW92ZUNvbmZpcm1hdGlvbjogJ0VsaW1pbmFyPycsXHJcbi8vICAgICAgICAgZXJyb3JzOiB7XHJcbi8vICAgICAgICAgICAgIGZpbGVzTGltaXQ6ICdTb2xvIGVzIHBvc2libGUgc3ViaXIgJHtsaW1pdH0gaW3DoWdlbi4nLFxyXG4vLyAgICAgICAgICAgICBmaWxlc1R5cGU6ICdTb2xvIHNlIGFjZXB0YW4gbG9zIGZvcm1hdG9zOiAke2V4dGVuc2lvbnN9LicsXHJcbi8vICAgICAgICAgICAgIGZpbGVTaXplOiAnJHtuYW1lfSBlcyBtdXkgZ3JhbmRlcyEgU2VsZWNjaW9uZSB1bmEgZGUgJHtmaWxlTWF4U2l6ZX1NQi4gY29tbyBtw6F4aW1vJyxcclxuLy8gICAgICAgICAgICAgZmlsZXNTaXplQWxsOiAnJHtuYW1lfSBzb24gbXV5IGdyYW5kZXMhIFNlbGVjY2lvbmUgdW5hcyBkZSAke2ZpbGVNYXhTaXplfU1CLiBjb21vIG3DoXhpbW8nLFxyXG4vLyAgICAgICAgICAgICBmaWxlTmFtZTogJ0xhIGltw6FnZW4gY29uIGVsIG5vbWJyZSAke25hbWV9IHlhIGVzdMOhIHNlbGVjY2lvbmFkYS4nLFxyXG4vLyAgICAgICAgICAgICBmb2xkZXJVcGxvYWQ6ICdObyBlc3TDoSBwZXJtaXRpZG8gc3ViaXIgY2FycGV0YXMuJ1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZGlhbG9nczoge1xyXG4vLyAgICAgICAgICAgICAvLyBhbGVydCBkaWFsb2dcclxuLy8gICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBhbGVydF9jb25maXJtKHRleHQpO1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAvLyBjb25maXJtIGRpYWxvZ1xyXG4vLyAgICAgICAgICAgICBjb25maXJtOiBmdW5jdGlvbih0ZXh0LCBjYWxsYmFjaykge1xyXG4vLyAgICAgICAgICAgICAgICAgJ2NvbmZpcm0odGV4dCkgPyBjYWxsYmFjaygpIDogbnVsbDsnXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcbiQoJyNTaW5nbGVfSW1hZ2UnKS5maWxldXBsb2FkZXIoe1xyXG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJ10sXHJcbiAgICBsaW1pdDogMSxcclxuICAgIGFkZE1vcmU6IGZhbHNlLFxyXG4gICAgZmlsZU1heFNpemU6IDIsXHJcbiAgICBjYXB0aW9uczoge1xyXG4gICAgICAgIGJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ1NlbGVjY2lvbmFyICcgKyAob3B0aW9ucy5saW1pdCA9PSAxID8gJ0ltw6FnZW4nIDogJ0ltw6FnZW4nKTsgfSxcclxuICAgICAgICBmZWVkYmFjazogZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gJ0FncmVnYXIgaW3DoWdlbmVzLi4uJzsgfSxcclxuICAgICAgICBmZWVkYmFjazI6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyAnICsgKG9wdGlvbnMubGVuZ3RoID4gMSA/ICcgaW3DoWdlbmVzIHNlbGVjY2lvbmFkYXMnIDogJyBpbcOhZ2VuIHNlbGVjY2lvbmFkYScpOyB9LFxyXG4gICAgICAgIGRyb3A6ICdBcnJhc3RyZSBsYXMgaW3DoWdlbmVzIGFxdcOtJyxcclxuICAgICAgICBwYXN0ZTogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItcGVuZGluZy1sb2FkZXJcIj48ZGl2IGNsYXNzPVwibGVmdC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJyaWdodC1oYWxmXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7bXN9c1wiPjwvZGl2PjwvZGl2PiBQYXN0aW5nIGEgZmlsZSwgY2xpY2sgaGVyZSB0byBjYW5jZWwuJyxcclxuICAgICAgICByZW1vdmVDb25maXJtYXRpb246ICdFbGltaW5hcj8nLFxyXG4gICAgICAgIGVycm9yczoge1xyXG4gICAgICAgICAgICBmaWxlc0xpbWl0OiAnU29sbyBlcyBwb3NpYmxlIHN1YmlyICR7bGltaXR9IGltw6FnZW4uJyxcclxuICAgICAgICAgICAgZmlsZXNUeXBlOiAnU29sbyBzZSBhY2VwdGFuIGxvcyBmb3JtYXRvczogJHtleHRlbnNpb25zfS4nLFxyXG4gICAgICAgICAgICBmaWxlU2l6ZTogJ0xhIGltw6FnZW4gcGVzYSBtdWNobyEgRWxpamEgdW5hIGRlICR7ZmlsZU1heFNpemV9TUIgY29tbyBtw6F4aW1vLicsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnTGEgaW3DoWdlbiBjb24gZXNlIG5vbWJyZSB5YSBoYSBzaWRvIGVsZWdpZGEnLFxyXG4gICAgICAgICAgICBmb2xkZXJVcGxvYWQ6ICdObyBlc3TDoSBwZXJtaXRpZG8gc3ViaXIgY2FycGV0YXMuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpYWxvZ3M6IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQgZGlhbG9nXHJcbiAgICAgICAgICAgIGFsZXJ0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQodGV4dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGNvbmZpcm0gZGlhbG9nXHJcbiAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKHRleHQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAnY29uZmlybSh0ZXh0KSA/IGNhbGxiYWNrKCkgOiBudWxsOydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiQoJyNNdWx0aV9JbWFnZXMnKS5maWxldXBsb2FkZXIoe1xyXG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCddLFxyXG4gICAgY2hhbmdlSW5wdXQ6ICcgJyxcclxuICAgIHRoZW1lOiAndGh1bWJuYWlscycsXHJcbiAgICBlbmFibGVBcGk6IHRydWUsXHJcbiAgICBhZGRNb3JlOiB0cnVlLFxyXG4gICAgdGh1bWJuYWlsczoge1xyXG4gICAgICAgIGJveDogJzxkaXYgY2xhc3M9XCJmaWxldXBsb2FkZXItaXRlbXNcIj4nICtcclxuICAgICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtcy1saXN0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXRcIj48ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQtaW5uZXJcIj4rPC9kaXY+PC9saT4nICtcclxuICAgICAgICAgICAgICAgICAgJzwvdWw+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicsXHJcbiAgICAgICAgaXRlbTogJzxsaSBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZpbGV1cGxvYWRlci1pdGVtLWlubmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtaG9sZGVyXCI+JHtpbWFnZX08L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFjdGlvbnMtaG9sZGVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImZpbGV1cGxvYWRlci1hY3Rpb24gZmlsZXVwbG9hZGVyLWFjdGlvbi1yZW1vdmVcIiB0aXRsZT1cIiR7Y2FwdGlvbnMucmVtb3ZlfVwiPjxpIGNsYXNzPVwicmVtb3ZlXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbi1wb3B1cFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwcm9ncmVzcy1ob2xkZXJcIj4ke3Byb2dyZXNzQmFyfTwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAnPC9saT4nLFxyXG4gICAgICAgIGl0ZW0yOiAnPGxpIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsZXVwbG9hZGVyLWl0ZW0taW5uZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRodW1ibmFpbC1ob2xkZXJcIj4ke2ltYWdlfTwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ob2xkZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZmlsZXVwbG9hZGVyLWFjdGlvbiBmaWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZVwiIHRpdGxlPVwiJHtjYXB0aW9ucy5yZW1vdmV9XCI+PGkgY2xhc3M9XCJyZW1vdmVcIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmaWxldXBsb2FkZXItYWN0aW9uLXBvcHVwXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgJzwvbGk+JyxcclxuICAgICAgICBzdGFydEltYWdlUmVuZGVyZXI6IHRydWUsXHJcbiAgICAgICAgY2FudmFzSW1hZ2U6IGZhbHNlLFxyXG4gICAgICAgIF9zZWxlY3RvcnM6IHtcclxuICAgICAgICAgICAgbGlzdDogJy5maWxldXBsb2FkZXItaXRlbXMtbGlzdCcsXHJcbiAgICAgICAgICAgIGl0ZW06ICcuZmlsZXVwbG9hZGVyLWl0ZW0nLFxyXG4gICAgICAgICAgICBzdGFydDogJy5maWxldXBsb2FkZXItYWN0aW9uLXN0YXJ0JyxcclxuICAgICAgICAgICAgcmV0cnk6ICcuZmlsZXVwbG9hZGVyLWFjdGlvbi1yZXRyeScsXHJcbiAgICAgICAgICAgIHJlbW92ZTogJy5maWxldXBsb2FkZXItYWN0aW9uLXJlbW92ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSXRlbVNob3c6IGZ1bmN0aW9uKGl0ZW0sIGxpc3RFbCwgcGFyZW50RWwsIG5ld0lucHV0RWwsIGlucHV0RWwpIHtcclxuICAgICAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuICAgICAgICAgICAgICAgIGFwaSA9ICQuZmlsZXVwbG9hZGVyLmdldEluc3RhbmNlKGlucHV0RWwuZ2V0KDApKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBsdXNJbnB1dC5pbnNlcnRBZnRlcihpdGVtLmh0bWwpW2FwaS5nZXRPcHRpb25zKCkubGltaXQgJiYgYXBpLmdldENob29zZWRGaWxlcygpLmxlbmd0aCA+PSBhcGkuZ2V0T3B0aW9ucygpLmxpbWl0ID8gJ2hpZGUnIDogJ3Nob3cnXSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoaXRlbS5mb3JtYXQgPT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItaXRlbS1pY29uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgXHJcbiAgICAgICAgcGx1c0lucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhcGkub3BlbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlOiBmdW5jdGlvbihpdGVtLCBsaXN0RWwsIHBhcmVudEVsLCBuZXdJbnB1dEVsLCBpbnB1dEVsKSB7XHJcbiAgICAgICAgdmFyIHBsdXNJbnB1dCA9IGxpc3RFbC5maW5kKCcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnKSxcclxuICAgICAgICAgICAgYXBpID0gJC5maWxldXBsb2FkZXIuZ2V0SW5zdGFuY2UoaW5wdXRFbC5nZXQoMCkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGFwaS5nZXRPcHRpb25zKCkubGltaXQgJiYgYXBpLmdldENob29zZWRGaWxlcygpLmxlbmd0aCAtIDEgPCBhcGkuZ2V0T3B0aW9ucygpLmxpbWl0KVxyXG4gICAgICAgICAgICBwbHVzSW5wdXQuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAvLyB3aGlsZSB1c2luZyB1cGxvYWQgb3B0aW9uLCBwbGVhc2Ugc2V0XHJcbiAgICAvLyBzdGFydEltYWdlUmVuZGVyZXI6IGZhbHNlXHJcbiAgICAvLyBmb3IgYSBiZXR0ZXIgZWZmZWN0XHJcbiAgICB1cGxvYWQ6IHtcclxuICAgICAgICB1cmw6ICcuL3BocC91cGxvYWRfZmlsZS5waHAnLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICBzdGFydDogdHJ1ZSxcclxuICAgICAgICBzeW5jaHJvbjogdHJ1ZSxcclxuICAgICAgICBiZWZvcmVTZW5kOiBudWxsLFxyXG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24oZGF0YSwgaXRlbSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5wcm9ncmVzcy1ob2xkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlbmRlclRodW1ibmFpbCgpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmh0bWwuZmluZCgnLnByb2dyZXNzLWhvbGRlcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgaXRlbS5odG1sLmZpbmQoJy5maWxldXBsb2FkZXItaXRlbS1pY29uIGknKS50ZXh0KCdGYWlsZWQhJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbihkYXRhLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhciA9IGl0ZW0uaHRtbC5maW5kKCcucHJvZ3Jlc3MtaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihwcm9ncmVzc0Jhci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5maW5kKCcuZmlsZXVwbG9hZGVyLXByb2dyZXNzYmFyIC5iYXInKS53aWR0aChkYXRhLnBlcmNlbnRhZ2UgKyBcIiVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhZ0Ryb3A6IHtcclxuICAgICAgICBjb250YWluZXI6ICcuZmlsZXVwbG9hZGVyLXRodW1ibmFpbHMtaW5wdXQnXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmU6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAkLnBvc3QoJ3BocC91cGxvYWRfcmVtb3ZlLnBocCcsIHtcclxuICAgICAgICAgICAgZmlsZTogaXRlbS5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgKi9cclxufSk7XHJcblxyXG5cclxuJCgnLkRpc3BsYXktSW5wdXQtTW9kaWZpY2FibGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZGlzcGxheS1pbnB1dC1kaXNhYmxlZCcpOyBcclxufSk7XHJcblxyXG5cclxuLy8gLS0tLSBNb2RpZmljYWJsZSBpbnB1dCB0ZXh0XHJcbi8vIEh0bWwgZWxlbWVudFxyXG4vLzxwIGRhdGEtZWRpdGFibGUgY2xhc3M9XCJTbHVnSW5wdXRcIj57eyAkYXJ0aWNsZS0+c2x1ZyB9fTwvcD4gICBcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtZWRpdGFibGVdJywgZnVuY3Rpb24oKXtcclxuICBcclxuICAgIHZhciAkZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB2YXIgJGlucHV0ID0gJCgnPGlucHV0Lz4nKS52YWwoICRlbC50ZXh0KCkgKTtcclxuICAgICRlbC5yZXBsYWNlV2l0aCggJGlucHV0ICk7XHJcbiAgICBcclxuICAgIHZhciBzYXZlID0gZnVuY3Rpb24oKXtcclxuICAgICAgdmFyICRwID0gJCgnPHAgZGF0YS1lZGl0YWJsZSAvPicpLnRleHQoICRpbnB1dC52YWwoKSApO1xyXG4gICAgICAkaW5wdXQucmVwbGFjZVdpdGgoICRwICk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAgV2UncmUgZGVmaW5pbmcgdGhlIGNhbGxiYWNrIHdpdGggYG9uZWAsIGJlY2F1c2Ugd2Uga25vdyB0aGF0XHJcbiAgICAgIHRoZSBlbGVtZW50IHdpbGwgYmUgZ29uZSBqdXN0IGFmdGVyIHRoYXQsIGFuZCB3ZSBkb24ndCB3YW50IFxyXG4gICAgICBhbnkgY2FsbGJhY2tzIGxlZnRvdmVycyB0YWtlIG1lbW9yeS4gXHJcbiAgICAgIE5leHQgdGltZSBgcGAgdHVybnMgaW50byBgaW5wdXRgIHRoaXMgc2luZ2xlIGNhbGxiYWNrIFxyXG4gICAgICB3aWxsIGJlIGFwcGxpZWQgYWdhaW4uXHJcbiAgICAqL1xyXG4gICAgJGlucHV0Lm9uZSgnYmx1cicsIHNhdmUpLmZvY3VzKCk7XHJcbiAgICBcclxuICB9KTtcclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZhZG1pbi1mb3Jtcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=