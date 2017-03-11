@extends('vadmin.layouts.main')
@section('title', 'Fascination | Panel de Control')
{{-- @section('header_title', 'Panel de Control | ')  --}}
@section('header_subtitle', 'Inicio')


@section('content')

	 <div class="container">
		  <div class="row">
				<h2>Últimos artículos agregados</h2>
			@foreach($articles as $article)
				<a href="{!! route('web.portfolio.article',$article->slug ) !!}" target="_blank">
					 <div class="col-md-4">
						  <div class="row big-list">
								<div class="inner">
									 <div class="image">
										@if(count($article->images)==0)
										<img src="{{ asset('webimages/gen/article-gen.jpg' ) }}">
										@else
										<img src="{{ asset('webimages/portfolio/products/'. $article->images->first()->name ) }}">
										@endif
									 </div>
									 <div class="content">
										<b>{{ $article->title }}</b>
										<hr>
										<p>Categoría: {{ $article->category->name }}</p>
										<span class="date">{{ $article->created_at->diffForHumans() }}</span>
									</div>
								</div>
						  </div>
					 </div>
				</a>
				@endforeach
		  </div>
	 </div>  

@endsection






