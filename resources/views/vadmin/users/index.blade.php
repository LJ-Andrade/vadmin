@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Usuarios')
@section('header_title', 'Listado de Usuarios') 

@section('content')

    <div class="container">
		<div class="row">
			<button type="button" class="animated fadeIn button buttonOther" data-toggle="modal" data-target="#New">Nuevo Usuario</button>
			<hr>
			<div id="List"></div>
			<br>
		</div>
	</div>  
	<div id="Error"></div>

	
@endsection

@include('vadmin.users.modals')

{{-- CUSTOM JS SCRIPTS--}}
@section('custom_js')

	<script type="text/javascript">

	// Prevent submit on press ENTER Key
	$(document).ready(function() {
		$('#NewForm').keydown(function(event){
			if(event.keyCode == 13) {
				event.preventDefault();
				return false;
			}
		});
	});

	// ----- Category List - Ajax ------- //
	$(document).ready(function(){
		ajax_list();
	});

	var ajax_list = function(){

		$.ajax({
			type: 'get',
			url: '{{ url('ajax_list_users') }}',
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

	// ----- Create - Ajax ------- //
	$(document).on("click", "#NewBtn", function(e){

		var data       = $('#NewForm').serialize();
		var token      = $('input[name=_token]').val();
		var route      = "{{ route('users.store') }}";
		var dataString = "name="+data;

		$.ajax({
			url: route,
			headers: {'X-CSRF-TOKEN':token},
			type: 'post',
			dataType: 'json',
			data: dataString,
			success: function(data){
				if(data.success == 'true'){
					console.log(data);
					$('.CloseModal').click();
					ajax_list();

				} else if(data.success == 'false') {
					var response = data.responseJSON.name[0];
					$('.ModalError').html(response);
					// $('#Error').html(response);
				}
			},
			error: function(data){
				console.log(data);
				// $('#Error').html(data.responseText);
				var response = data.responseJSON;
				$('.ModalError').html('');
				var error;
				$.each( response, function( key, value ) {
					error =  value;
					$('.ModalError').append(error + '<br>');
				});
			}
		}); 
	});

	// ----- Category Edit - Ajax ------- //
	var ajax_edit_user = function(id){
		var route = "{{ url('user') }}/"+id+"/ajax_edit_user";
		
		$.get(route, function(data){
			console.log(data);
			$('#ModalIdInput').val(data.id);
			$('#ModalNameInput').val(data.name);
		});
	}

	$('.UpdateBtn').click(function(){

		var data  = $("#EditForm").serialize();
		var route = "{{ url('vadmin/categories') }}/"+id+"";
		var token = $('#update_moda_token').val();

		console.log(route);


		$.ajax({

			url: route,
			headers: {'X-CSRF-TOKEN': token},
			type: 'PUT',
			dataType: 'json',
			data: {name: name},
			success: function(data) {
				if(data.success == 'true' ){
					ajax_list();
					$('.CloseModal').click();
					alert_ok('Ok','Categoría editada')
				}
			},
			error: function(data) {
				var response = data.responseJSON.name[0];
				$('.EditModalError').html(response);
				console.log(data);
			}


		});

	});


	</script>

@endsection