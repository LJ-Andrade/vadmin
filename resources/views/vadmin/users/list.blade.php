<div class="simple-list animated fadeIn">
	@foreach($users as $user)
	<div id="Item{{$user->id}}" class="col-md-12">
		<div class="row Item-Row simple-item-row">
			<div class="content">
				<span>{{ $user->name }}</span><br>
				<span class="small"></span>
			</div>
			<div class="actions">
				<button type="button" class="EditBtn btnList buttonOther" onclick="return ajax_edit_user({{ $user->id }})"
				data-toggle="modal" data-target="#Edit">
				<i class="ion-edit"></i></button>
				
				<button class="Delete btnList buttonCancel" data-id="{{ $user->id }}"><i class="ion-trash-b"></i></button>

			</div>
		</div>
	</div>
	@endforeach

	{{-- If there is no articles published shows this --}}
	@if(! count($users))
	<div class="empty-row">
		Aún no hay categorías creadas		
	</div>
	@endif
</div>