@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Portfolio')
@section('header_title', 'Listado de Artículos') 

@section('styles')
	{!! Html::style('plugins/chosen/chosen.min.css') !!}
	{!! Html::style('plugins/validation/parsley.css') !!}
@endsection

@section('content')

	<div class="container">
		@include('vadmin.portfolio.headoptions')
	</div>
    <div class="container">
		<div class="row">	
			<hr>
			@include('vadmin.portfolio.forms')
			<div id="List"></div>
			<br>
		</div>
		<button id="BatchDeleteBtn" class="button buttonCancel batchDeleteBtn Hidden"><i class="ion-ios-trash-outline"></i> Eliminar seleccionados</button>
	</div>  
	<div id="Error"></div>

	
@endsection


@section('scripts')

	{!! Html::script('plugins/jqueryfiler/jquery.filer.min.js') !!}
	{!! Html::script('plugins/chosen/chosen.jquery.min.js') !!}
	
@endsection

{{-- CUSTOM JS SCRIPTS--}}
@section('custom_js')

	<script type="text/javascript">

	/////////////////////////////////////////////////
    //                 FORM SKIN                   // 
    /////////////////////////////////////////////////

	// $('.ShowNewBtn').click(function(){
	// 	// $('#List').addClass('Hidden');
	// 	$('.ShowNewBtn').addClass('Hidden');
	// 	$('#NewFormContainer').removeClass('Hidden');
	// 	$('.ShowListBtn').removeClass('Hidden');
	// 	$('#EditFormContainer').addClass('Hidden');
	// });

	// $('.ShowListBtn').click(function(){
	// 	$('#List').removeClass('Hidden');
	// 	$('.ShowNewBtn').removeClass('Hidden');
	// 	$('#NewFormContainer').addClass('Hidden');
	// 	$('#EditFormContainer').addClass('Hidden');
	// 	$('.ShowListBtn').addClass('Hidden');
	// });

	// $('.CloseFormBtn').click(function(e){
	// 	e.preventDefault();
	// 	$('#NewFormContainer').addClass('Hidden');
	// 	$('#EditFormContainer').addClass('Hidden');
	// 	$('.ShowNewBtn').removeClass('Hidden');
	// 	$('.ShowListBtn').addClass('Hidden');
	// 	$('.ShowPassInputBtn').show();
	// 	$('.PasswordSlot').html('');
	// });



	// $(document).on("click", ".ShowEditBtn", function(e){
	// 	$('#NewFormContainer').addClass('Hidden');
	// 	var id = $(this).data('id');
	// 	$('#EditFormContainer').removeClass('Hidden');
	// 	var data = $('#Id'+id).data('data');

	// 	$('#EditId').val(id);
	// 	$('#EditTitle').html(data.name);
	// 	$('#EditName').val(data.name);
	// 	$('#EditEmail').val(data.email);
	// 	$('#EditPassword').val(data.password);
	// 	$('#EditRole').val(data.type).change();


	// });

	// $('.ShowPassInputBtn').click(function(e){
	// 	e.preventDefault();
	// 	var input = "<input id='EditPassword' class='form-control' name='password' type='password'>";

	// 	$(this).hide();
	// 	$('.PasswordSlot').append(input);

	// });

	/////////////////////////////////////////////////
    //                 LIST                        // 
    /////////////////////////////////////////////////


	$(document).ready(function(){
		ajax_list();
	});

	var ajax_list = function(){

		$.ajax({
			type: 'get',
			url: '{{ url('vadmin/ajax_list_articles') }}',
			success: function(data){
				$('#List').empty().html(data);
			},
			error: function(data){
				console.log(data)
				$('#Error').html(data.responseText);
			}
		});
	}

	// Pagination
	$(document).on("click", ".pagination li a", function(e){
		e.preventDefault();

		var url = $(this).attr('href');

		$.ajax({
			type: 'get',
			url: url,
			success: function(data){
				$('#List').empty().html(data);
			},
			error: function(data){
				console.log(data)
			}
		});
	});



	/////////////////////////////////////////////////
    //                     DELETE                  //
    /////////////////////////////////////////////////


	// -------------- Single Delete -------------- //
	// --------------------------------------------//
	$(document).on('click', '.Delete', function(e){
		e.preventDefault();
		var id = $(this).data('id');
		confirm_delete(id, 'Cuidado!','Está seguro?');
	});

	function delete_item(id) {	

		var route = "{{ url('ajax_delete_article') }}/"+id+"";

		$.ajax({
			url: route,
			method: 'post',             
			dataType: "json",
			data: {id: id},
			success: function(data){
			
				console.log(data);
				if (data == 1) {
					$('#Id'+id).hide(200);
					alert_ok('Ok!','Eliminación completa');
				} else {
					alert_error('Ups!','Ha ocurrido un error');
				}
			},
			error: function(data)
			{
				$('#Error').html(data.responseText);
				console.log(data);	
			},
		});
	}

	// -------------- Batch Deletex -------------- //
	// --------------------------------------------//

	// ---- Batch Confirm Deletion ---- //
	$(document).on('click', '#BatchDeleteBtn', function(e) { 

		var rowsToDelete = [];  
		$(".BatchDelete:checked").each(function() {  
			rowsToDelete.push($(this).attr('data-id'));
		});

		var id = rowsToDelete;
		confirm_batch_delete(id,'Cuidado!','Está seguro que desea eliminar los usuarios?');
		
	});

	// ---- Delete ---- //
	function batch_delete_item(id) {

		var route = "{{ url('ajax_batch_delete_users') }}/"+id+"";

		$.ajax({
			url: route,
			method: 'post',             
			dataType: "json",
			data: {id: id},
			success: function(data){
				for(i=0; i < id.length ; i++){
					$('#Id'+id[i]).hide(200);
				}
				$('#BatchDeleteBtn').addClass('Hidden');
				ajax_list();
				// $('#Error').html(data.responseText);
				// console.log(data);
			},
			error: function(data)
			{
				console.log(data);
				$('#Error').html(data.responseText);
			},
		});

	}

	</script>

@endsection