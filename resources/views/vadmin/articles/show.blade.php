@extends('vadmin.layouts.main')

@section('title', 'VADmin | Artículos')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-12">
              	<h1>{!! $article->title !!}</h1>
            	<p>{!! $article->content !!}</p>
            	@foreach($article->images as $image)
					<img src="{{ asset('webimages/content/products/'.$image->name ) }}" class="img-responsive img-article">
				@endforeach
				<hr>
				Slug: <span class="badge">{!! $article->slug !!}</span>
				<hr>
				Categoría: <span class="badge">{!! $article->category->name !!}</span>
				<hr>
				Tags:
				@foreach($article->tags as $tag)
					<span class="badge">{!! $tag->name !!}</span>
				@endforeach
            </div>
        </div>
    </div>
@endsection
