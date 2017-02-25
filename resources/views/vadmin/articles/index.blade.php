@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Artículos')

@section('header_title', 'Listado') 
@section('header_subtitle', 'Artículos del Portfolio') 

@section('full')
<div class="filter-full">
	<br><br>
	{{-- Search --}}
	{!! Form::open(['route' => 'articles.index', 'method' => 'GET', 'class' => 'navbar-form']) !!}
		<div class="input-group">
			{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Buscar artículo...', 'aria-describedby' => 'search']) !!}
			<span class="input-group-addon" id="search">
				<span class="ion-ios-search" aria-hidden="true"></span>
			</span>
		</div>
		<div class="input-group">
			{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Buscar artículo...', 'aria-describedby' => 'search']) !!}
			<span class="input-group-addon" id="search">
				<span class="ion-ios-search" aria-hidden="true"></span>
			</span>
		</div>
		<button class="btnSm buttonOther"><i class="ion-ios-search"></i></button>
	{!! Form::close() !!}
	{{-- /Search --}}
	<div class="btnClose"><i class="ion-close-round"></i></div>		
</div>
@endsection

@section('content')
	<div class="container">
		<div class="row header-options">
			<a href="{{ route('articles.create') }}"><button class="button buttonOk"><i class="ion-ios-plus-outline"></i> Nuevo Artículo</button></a>
			<button class="OpenFilters button buttonOther pull-right"><i class="ion-ios-search"></i></button>
			@if(isset($_GET['title']))
			<a href="{{ route('articles.index') }}"><button class="button buttonOther pull-right">Todos</button></a>
			@else
			@endif
			<div class="filter-desk">
				{{-- Search --}}
				{!! Form::open(['route' => 'articles.index', 'method' => 'GET', 'class' => 'navbar-form']) !!}
					<div class="input-group">
						{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Buscar artículo...', 'aria-describedby' => 'search']) !!}
						<span class="input-group-addon" id="search">
							<span class="ion-ios-search" aria-hidden="true"></span>
						</span>
					</div>
				<button class="btnSm buttonOther"><i class="ion-ios-search"></i></button>
				{!! Form::close() !!}
				{{-- /Search --}}
				<div class="btnClose"><i class="ion-close-round"></i></div>		
			</div>
			<button id="BatchDeleteBtn" class="button buttonCancel batchDeleteBtn Hidden"><i class="ion-ios-trash-outline"></i> Eliminar seleccionados</button>
		</div>
		
		<div class="row">
			<div class="main-list Batch-Controller">
				@foreach($articles as $article)
				<div id="Id{{ $article->id }}" class="col-md-12">
					<div class="row Item-Row item-row Select-Row-Trigger">
						{{-- Column --}}
						<div class="img">
							@if(count($article->images))
							<img class="thumb" src="{{ asset('webimages/content/products/'. $article->images->first()->name ) }}">
							@else
							<img class="thumb" src="{{ asset('webimages/gen/genproduct.jpg') }}">
							@endif
						</div>
						{{-- Batch Delete --}} 
						<input type="checkbox" class="BatchDelete" style="display: none" data-id="{{ $article->id }}">
						<div class="content">
							{{-- Column --}}
							<div class="col-xs-6 col-sm-4 col-md-4 inner">
								<span><b>{{ $article->title }}</b></span><br>
								<span class="small">{{ $article->code }} | {{ $article->category->name }}</span>
							</div>
							{{-- Column --}}
							<div class="col-xs-6 col-sm-3 col-md-4 mobile-hide inner-tags">
								@foreach($article->tags as $tag)
								<span class="badge">{!! $tag->name !!} </span>
								@endforeach
								<br>
								@foreach($article->colors as $color)
									<span><div class="color-circle" style="background-color:{{ $color->name }}"></div></span>
								@endforeach
							</div>
							{{-- Action Button --}}
							<div class="col-xs-2 col-sm-2 col-md-3 lists-actions-trigger">
								<button type="button" class="Lists-Actions-Trigger action-btn" data-toggle="modal" data-target="#Article-Actions{{ $article->id }}">
									<i class="ion-ios-gear-outline"></i>
								</button>
							</div>
						</div>
						{{-- Active Paused Indicator --}}
						<div class="Status-Icon Status{{ $article->id }} status-icon" data-actualStatus="{{ $article->status }}">
							@if($article->status == 'active')
							<i class="ion-play"></i>
							@else
							<i class="ion-pause"></i>
							@endif
						</div>
						{{-- Hidden Action Buttons --}}
						<div class="List-Actions lists-actions">
							{!! Form::open(['url' => ['updateStatus', $article], 'method' => 'POST', 'id' => 'status-form']) !!}
								<div class="form-group">
									{!! Form::select('status', ['active'=>'Activo','paused'=>'Pausado'], $article->status, 
										['class' => 'Status-Select form-control', 'data-id' => $article->id ]) !!}
								</div>
								<input type="hidden" name="_token" value="{{ csrf_token() }}">
							{!! Form::close() !!}
							<a href="{{ route('articles.edit', $article->id) }}" class="btnSmall buttonOk">
								<i class="ion-ios-compose-outline"></i>
							</a>
							<a href="{!! route('web.portfolio.article',$article->slug ) !!}" target="_blank" class="btnSmall buttonOther">
								<i class="ion-ios-search"></i>
							</a>
							<button class="Delete btnSmall buttonCancel" data-id="{!! $article->id !!}">
								<i class="ion-ios-trash-outline"></i>
							</button>
							<a class="Close-Actions-Btn btn btn-danger btn-close">
								<i class="ion-ios-close-empty"></i>
							</a>
						</div>
					</div>
				</div>	
				@endforeach
				{{-- If there is no articles published shows this --}}
				@if(! count($articles))
				<div class="empty-row">
					No se han encontrado artículos
				</div>
				@endif
			</div>
			{!! $articles->render(); !!}
			<br>
		</div>
	</div>
	<div id="Test"></div>
@endsection


@section('custom_js')

	<script type="text/javascript">

		// ---------- Delete Article ---------- //
		$('.Delete').on('click',function(e){
			e.preventDefault();
			var id    = $(this).data('id');
			confirm_delete(id,'Cuidado!','Está seguro?'+id);
		});


		function delete_item(id) {	
		
			var route = "{{ url('ajax_delete') }}/"+id+"";

			$.ajax({
				// Replace url: url_target_loc to test locale
				url: route,
				method: 'post',             
				dataType: "json",
				data: {id: id, "_token": "{{ csrf_token() }}" },
				success: function(data){
				},
				complete: function(data)
				{
					console.log(data);
					if (data.responseText == 1) {
						$('#Id'+id).hide(200);
						alert_ok('Ok!','Producto eliminado');
					} else {
						alert_error('Ups!','Ha ocurrido un error');
					}
				},
				error: function(data)
				{
					// console.log(data);	
				},
			});
		}

		
		// ---------- Batch Delete Articles ---------- //

		// <button id="BatchDeleteBtn" class="button buttonCancel"><i class="ion-ios-trash-outline"></i> Eliminar seleccionados</button>

		


		$(document).ready(function() {
			batch_delete('.Select-Row-Trigger');
		});

		$('#BatchDeleteBtn').on('click', function(e) { 

			var rowsToDelete = [];  
			$(".BatchDelete:checked").each(function() {  
				rowsToDelete.push($(this).attr('data-id'));
			});


			var id = rowsToDelete;
			confirm_batch_delete(id,'Cuidado!','Está seguro que desea eliminar los productos?');
			     
    	});


		function batch_delete_item(id) {

			var route = "{{ url('ajax_batch_delete') }}/"+id+"";

			$.ajax({
				// Replace url: url_target_loc to test locale
				url: route,
				method: 'post',             
				dataType: "json",
				data: {id: id, "_token": "{{ csrf_token() }}" },
				success: function(data){
					for(i=0; i < id.length ; i++){
						$('#Id'+id[i]).hide(200);
					}
					$('#BatchDeleteBtn').addClass('Hidden');
				},
				complete: function(data){					
				
				},
				error: function(data)
				{
					// $('#Test').html(data.responseText);
				},
			});

		}



	$(document).ready(function() {
		// ------ Update Article Status ------ //
			$('.Status-Select').on('change',  (function(e) {
				e.preventDefault();

				var id      = $(this).data('id');
				var value   = $(this, '#'+id+', option').val();
				var route   = "{{ url('updateStatus') }}/"+id+"";
				
				$.ajax({
					// Replace url: url_target_loc to test locale
					url: route,
					method: 'post',             
					dataType: "json",
					data: {id: id, _token: $('input[name="_token"]').val(), status: value},
					success: function(data){
					},
					complete: function(data)
					{
						console.log(data);
						$('.List-Actions').hide(200);
						if (data.responseText == 1) {
							if (value == 'active') {
								$('.Status'+id).html('<i class="ion-play"></i>');
								var statusText = 'activado';
							} else if(value == 'paused') {
								$('.Status'+id).html('<i class="ion-pause"></i>')
								var statusText = 'pausado';
							}
							alert_ok('Ok!','Artículo '+statusText);
						} else {
							alert_error('Ups!','Ha ocurrido un error');
						}
					},
					error: function(data)
					{
						console.log(data);	
					},
				});
			}));
		});

	</script>

@endsection