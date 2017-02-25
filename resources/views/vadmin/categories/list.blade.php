<div class="simple-list animated fadeIn">
	@foreach($categories as $category)
	<div id="Item{{$category->id}}" class="col-md-12">
		<div class="row Item-Row simple-item-row">
			<div class="content">
				<span>{{ $category->name }}</span><br>
				<span class="small"></span>
			</div>
			<div class="actions">
				<button type="button" class="EditCategoryBtn btnList buttonOther" onclick="return ajax_edit({{ $category->id }})"
				data-toggle="modal" data-target="#EditCategory">
				<i class="ion-edit"></i></button>
				
				<button class="Delete btnList buttonCancel" data-id="{{ $category->id }}"><i class="ion-trash-b"></i></button>

			</div>
		</div>
	</div>
	@endforeach

	{{-- If there is no articles published shows this --}}
	@if(! count($categories))
	<div class="empty-row">
		Aún no hay categorías creadas		
	</div>
	@endif
</div>

{!! $categories->render(); !!}