@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Categorías')
@section('header_title', 'Listado de Categorías') 
{{-- @section('header_subtitle', 'Categorías')  --}}

@section('content')
	
	<div class="container">
		<div class="row">
			<button type="button" class="animated fadeIn button buttonOther" data-toggle="modal" data-target="#NewCategory">Nueva Categoría</button>
			<hr>
			<div id="List"></div>
			<br>
		</div>
	</div>  
	
@endsection

{{-- ///////////////////--}}
{{-- New Category Modal --}}
{{-- ///////////////////--}}

<div id="NewCategory" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Creación de nueva categoría</h4>
      </div>
      <div class="modal-body">
        	{!! Form::open(['id'=>'NewCategoryForm']) !!}
				<div class="form-group">
					{!! Form::label('name', 'Nombre:') !!}
					{!! Form::text('name', null, ['class' => 'CategoryName form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required']) !!}
				</div>
				<div class="ModalError"></div>
				
			{!! Form::close() !!}
      </div>
      <div class="modal-footer">
        <button type="button" class="NewCategoryBtn button buttonOk"><i class="ion-checkmark-round"></i> Crear Categoría</button>
        <button type="button" class="CloseModal button buttonCancel" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
{{-- End Modal --}}


{{-- ///////////////////--}}
{{-- Edit Category Modal --}}
{{-- ///////////////////--}}
<div id="EditCategory" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edición de nueva categoría</h4>
      </div>
      <div class="modal-body">
        	{!! Form::open(['id'=>'NewCategoryForm']) !!}
			<div class="form-group">
				<input type="hidden" name="_token" value="{{ csrf_token() }}" id="update_moda_token">
				{{-- ID INPUT --}}
				{!! Form::text('id', null, ['id' => 'ModalIdInput', 'class' => 'hidden']) !!}

				{!! Form::label('name', 'Nombre:') !!}
				{{-- NAME INPUT --}}
				{!! Form::text('name', null, ['id' => 'ModalNameInput', 'class' => 'form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required']) !!}
			</div>
			<div class="EditModalError"></div>
				
			{!! Form::close() !!}
      </div>
      <div class="modal-footer">
        <button type="button" class="UpdateCategoryBtn button buttonOk"><i class="ion-checkmark-round"></i> Editar Categoría</button>
        <button type="button" class="CloseModal button buttonCancel" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
{{-- End Modal --}}



@section('custom_js')

	<script type="text/javascript">
	

	// Prevent submit on press ENTER Key
	$(document).ready(function() {
		$('#NewCategoryForm').keydown(function(event){
			if(event.keyCode == 13) {
				event.preventDefault();
				return false;
			}
		});
	});

	// ----- Category Create - Ajax ------- //
	$(document).on("click", ".NewCategoryBtn", function(e){

		var name       = $('.CategoryName').val();
		var token      = $('input[name=_token]').val();
		var route      = "{{ route('categories.store') }}";
		var dataString = "name="+name;

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
				var response = data.responseJSON.name[0];
				$('.ModalError').html(response);
			}
		});


	});

	// ----- Category Edit - Ajax ------- //
	var ajax_edit = function(id){
	
		var route = "{{ url('categories') }}/"+id+"/ajax_edit";
		console.log(route);
		$.get(route, function(data){
			console.log(data);
			$('#ModalIdInput').val(data.id);
			$('#ModalNameInput').val(data.name);
		});
	}

	$('.UpdateCategoryBtn').click(function(){

		var id    = $("#ModalIdInput").val();
		var name  = $("#ModalNameInput").val();
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

	// ----- Category List - Ajax ------- //
		$(document).ready(function(){
			ajax_list();
		});

		var ajax_list = function(){

			$.ajax({
				type: 'get',
				url: '{{ url('ajax_list') }}',
				success: function(data){
					$('#List').empty().html(data);
				},
				error: function(data){
					console.log(data)
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


		// ----- Category Delete Ajax ------- //
		// Ask Delete Confirmation


		$('body').on('click', '.Delete', function (){
            
			var id = $(this).data('id');
		 	confirm_delete(id,'Cuidado!','Si borra la categoría se eliminarán todos los artículos que correspondan a ella.');

        });


		// Proceed to deletion
		function delete_item(id) {	
		
			// Local
			// var url_target_loc = 'http://localhost/Incubator/Fascination/public/vadmin/deleteCategory/'+id;
			// Online
			// var url_target     = /deleteCategory/+id;
			var route = "{{ url('/deleteCategory') }}/"+id+"";

			$.ajax({
					url:  route,
					method: 'post',             
					dataType: "json",
					data: {id: id, "_token": "{{ csrf_token() }}" },
					success: function(data){
					},
					complete: function(data)
					{				
						if(data.responseText == 1)
						{
							$('#Item'+id).hide(400);
						} else {
							alert_error('Ups!','La categoría no se pudo eliminar ! <br> Contacte al servicio técnico.');
						}
					},
					error: function(data)
					{
						console.log(data);
					},
				});

		}

	</script>

@endsection
