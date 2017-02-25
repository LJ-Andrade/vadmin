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

{{-- NEW MODAL --}}
@component('vadmin.layouts.components.modal')

	@slot('id','New')
	@slot('title', 'Nuevo Usuario')

	@slot('content')
		{!! Form::open(['id'=>'NewForm']) !!}
			<div class="form-group">
				{!! Form::label('name', 'Nombre:') !!}
				{!! Form::text('name', null, ['class' => 'Name form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required' => '']) !!}
				{!! Form::label('email', 'Email:') !!}
				{!! Form::text('email', null, ['class' => 'Email form-control', 'placeholder' => 'Ingrese su email', 'required' => '']) !!}
				{!! Form::label('password', 'Contraseña:') !!}
				{!! Form::text('password', null, ['class' => 'Password form-control', 'placeholder' => 'Ingrese su contraseña', 'required' => '']) !!}
			</div>
			<div class="ModalError"></div>
			
		{!! Form::close() !!}
	@endslot
	@slot('actionBtnId','NewBtn')
	@slot('acceptBtn', 'Crear Usuario')

@endcomponent

{{-- EDIT MODAL --}}
@component('vadmin.layouts.components.modal')

	@slot('id','Edit')
	@slot('title', 'Editar Usuario')

	@slot('content')
		{!! Form::open(['id'=>'EditForm']) !!}
			<div class="form-group">
				{!! Form::label('name', 'Nombre:') !!}
				{!! Form::text('name', null, ['class' => 'CategoryName form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required']) !!}
			</div>
			<div class="ModalError"></div>
			
		{!! Form::close() !!}
	@endslot

	@slot('actionBtnId','EditBtn')
	@slot('acceptBtn', 'Editar Usuario')

@endcomponent



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
				}
			},
			error: function(data){
				// var response = data.responseJSON.name[0];
				$('.ModalError').html(data.responseText);
			}
		}); 
	});

	



	</script>

@endsection