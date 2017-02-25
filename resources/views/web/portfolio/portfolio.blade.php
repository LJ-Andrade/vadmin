@extends('web.layouts.main')

@section('title', 'Studio Vimana | Portfolio')


@section('styles')
@endsection


@section('content')

	 {{-- @include('web.portfolio.partials.filter') --}}

	<div class="container portfoliot-title">
		<div class="row">
			<h1>Catálogo de Productos</h1>
		</div>
	</div>

	<div class="container portfolio-container">
		<div class="row ">
			@if(! count($articles))
				<div class="container">
					<h2>Aún no hay productos subidos en esta categoría.</h2>
					<hr>
					<h4>Próximamente estaremos actualizando el contenido </h4>
					<p>Volvé más tarde :)</p>
				</div>
			@endif

			@foreach($articles as $article)
				<a href="{!! route('web.portfolio.article',$article->slug ) !!}">
					<div class="col-sm-6 col-md-3 col-lg-3 portfolio-item">
						<div class="inner animated fadeIn">
							<div class="overlay-data">
								<div class="top">
									<a href="{!! route('web.portfolio.article',$article->slug ) !!}"><img src="{{ asset('webimages/icons/ver.png') }}" alt=""></a>
								</div>
								<div class="bottom">
									<div class="title">
										<h3>{{ $article->title }}</h3>
										<span class="code">Cod.: {{ $article->code }}</span>
									</div>
									<div class="content">
										{!! strip_tags(str_limit($article->content,100)) !!}
									</div>
									<div class="horizontal-list sizes">
										<ul>
										<hr>
										@foreach($article->tags as $tag)
											<li><div class="size-circle">{{ $tag->name }}</div></li>
										@endforeach
										</ul>
									</div>
								</div>
							</div>
							{{-- IMAGE --}}
							@if (count($article->images))
							<img src="{{ asset('webimages/content/products/'. $article->images->first()->name ) }}" class="img-responsive" alt="">
							@else
							{{-- Prevents error when No image is uploaded in article --}}
							<img src="{{ asset('webimages/gen/genproduct.jpg') }}" class="img-responsive" alt="">
							@endif
					
						</div>
					</div>
				</a>
			@endforeach
			<div class="clear"></div>
		</div>
		{!! $articles->render(); !!}
	 </div>
	@include('web.layouts.partials.foot')
@endsection


@section('scripts')
@endsection

@section('custom_js')
	 <script type="text/javascript">

	 $('body').addClass('portfolio-body');

	 </script>
@endsection
