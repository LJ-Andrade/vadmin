

<div class="simple-list animated fadeIn">
	@foreach($tags as $tag)
	<div id="Item{{$tag->id}}" class="col-md-12">
		<div class="row Item-Row simple-item-row">
			<div class="content">
				<span>{{ $tag->name }}</span><br>
				<span class="small"></span>
			</div>
			<div class="actions">
				<button type="button" class="EditBtn btnList buttonOther" onclick="return ajax_edit({{ $tag->id }})"
				data-toggle="modal" data-target="#Edit">
				<i class="ion-edit"></i></button>
				
				<button class="Delete btnList buttonCancel" data-id="{{ $tag->id }}"><i class="ion-trash-b"></i></button>

			</div>
		</div>
	</div>
	@endforeach

	{{-- If there is no articles published shows this --}}
	@if(! count($tags))
	<div class="empty-row">
		Aún no hay categorías creadas		
	</div>
	@endif
</div>

{!! $tags->render(); !!}
