@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Imágenes')

@section('content')
	<div class="container">
		<div class="row">
			@foreach($images as $image)
				<div class="col-md-4">
					<div class="panel panel-default">
						<div class="panel-body">
							<img src=" {{ asset("content/articles/images/$image->name") }}" alt="" class="img-responsive">
						</div>
						<div class="panel-footer">{!! $image->article->title !!}</div>
					</div>
				</div>
			@endforeach
		</div>
	</div>

@endsection