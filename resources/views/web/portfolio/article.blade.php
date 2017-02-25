@extends('web.layouts.main')

@section('title', 'VADmin | Artículos')

{{ Html::script('plugins/swiper.jquery.min.js') }}
{!! Html::style('plugins/swiper-slider/swiper.min.css') !!}

@section('content')

	<div class="container">
		<div class="row pull-right single-item-category">
			<span class="title">Categoría: </span>
			<a href="{{ route('web.search.category', $article->category->name ) }}">
				<span class="badge badgeRed">{!! $article->category->name !!}</span>
			</a>
		</div>
	</div>
    <div class="container single-item">
        <div class="row">	
			<div class="col-md-6">
				<div class="title-mobile"><h1><b>{!! $article->title !!}</b></h1></div>
			<!-- Slider main container -->
				<div class="swiper-container">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						{{-- Show generic Image if img not exist --}}
						@if(count($article->images) == 0)
							<div class="swiper-slide"><img src="{{ asset('webimages/gen/genproduct.jpg') }}" class="slider-image"></div>
						@else 
							@foreach($article->images as $image)
							<div class="swiper-slide"><img src="{{ asset('webimages/content/products/'.$image->name ) }}" class="slider-image"></div>
							@endforeach
						@endif
					</div>
					<!-- Pagination -->
					<div class="swiper-pagination"></div>
					<!-- Navigation buttons -->
					<div class="swiper-button-prev"><i class="ion-ios-arrow-left"></i></div>
					<div class="swiper-button-next"><i class="ion-ios-arrow-right"></i></div>
					<!-- Scrollbar -->
					<div class="swiper-scrollbar"></div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="content">
					<div class="title"><h1><b>{!! $article->title !!}</b></h1></div>
					<span class="code">Código: {{ $article->code }}</span>
					<div class="desc">
						<p>{!! $article->content !!}</p>
					</div>
					<hr>
					<div class="details">
						<span class="sub-title"><b>Composición:</b></span>
						<p>{{ $article->composition }}</p>
						<hr>
						<span class="sub-title"><b>Talles:</b></span>
						<div class="horizontal-list  sizes">
							<ul>
							@foreach($article->tags as $tag)
								<li><div class="size-circle">{{ $tag->name }}</div></li>
							@endforeach
							</ul>
						</div>
						<hr>
						<span class="sub-title"><b>Colores:</b></span>
						<div class="horizontal-list colors">
							<ul>
							@foreach($article->colors as $color)
								<li><div class="color-circle" style="background-color: {{ $color->name }}"></div></li>
							@endforeach
							</ul>
						</div>
						<hr><br>
						<div class="action"><a href="{{ url('contacto') }}" class="btnHollowRed">Solicitar</a></div>
					</div>
				</div>
			</div>
        </div>
			<div class="backOption pull-left">
				<a href="{{ url('catalogo') }}" class="button"><i class="ion-ios-arrow-left"></i> Volver</a>
			</div>
            	


	{{-- 	<div class="date">
    		<span class="text"><i class="ion-ios-clock-outline"></i>  {{ $article->created_at->diffForHumans() }}</span>
    	</div> --}}
    </div>
@endsection

@section('scripts')
	{{ Html::script('plugins/swiper-slider/swiper.jquery.min.js') }}
@endsection

@section('custom_js')
    <script type="text/javascript">

		$('body').addClass('portfolio-body');
	
		var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		autoHeight: true,
		
		// If we need pagination
		pagination: '.swiper-pagination',
		
		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		
		// And if we need scrollbar
		scrollbar: '.swiper-scrollbar',
	})        


    </script>
@endsection



