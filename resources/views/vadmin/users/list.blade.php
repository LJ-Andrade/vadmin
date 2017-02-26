<div class="row">
	<div class="main-list Batch-Controller">
		@foreach($users as $user)
		<div id="Id{{ $user->id }}" class="col-md-12">
			<div class="row Item-Row item-row Select-Row-Trigger">
				{{-- Column --}}
				<div class="img">
					@if(count($user->avatar))
					<img class="thumb" src="{{ asset('images/users/'. $user->avatar ) }}">
					@else
					<img class="thumb" src="{{ asset('images/gen/user-gen.jpg') }}">
					@endif
				</div>
				{{-- Batch Delete --}} 
				<input type="checkbox" class="BatchDelete" style="display: none" data-id="{{ $user->id }}">
				<div class="content">
					{{-- Column --}}
					<div class="col-xs-6 col-sm-4 col-md-4 inner">
						<span><b>{{ $user->name }}</b></span><br>
						<span class="small">{{ $user->email }}</span>
					</div>
					{{-- Column --}}
					<div class="col-xs-6 col-sm-3 col-md-4 mobile-hide inner-tags">
						
					</div>
					{{-- Action Button --}}
					<div class="col-xs-2 col-sm-2 col-md-3 lists-actions-trigger">
						<button type="button" class="Lists-Actions-Trigger action-btn" data-toggle="modal" data-target="#Article-Actions{{ $user->id }}">
							<i class="ion-ios-gear-outline"></i>
						</button>
					</div>
				</div>
				{{-- Active Paused Indicator --}}
				<div class="Status-Icon Status{{ $user->id }} status-icon"">
					@if($user->type == 'admin')
					<i class="ion-play"></i>
					@else
					<i class="ion-pause"></i>
					@endif
				</div>
				{{-- Hidden Action Buttons --}}
				<div class="List-Actions lists-actions Hidden">
					<a href="" class="btnSmall buttonOk">
						<i class="ion-ios-compose-outline"></i>
					</a>
					<a href="" target="_blank" class="btnSmall buttonOther">
						<i class="ion-ios-search"></i>
					</a>
					<button class="Delete btnSmall buttonCancel" data-id="{!! $user->id !!}">
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
		@if(! count($users))
		<div class="empty-row">
			No se han encontrado usuarios
		</div>
		@endif
	</div>
	{!! $users->render(); !!}
	<br>
</div>