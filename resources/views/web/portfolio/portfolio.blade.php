@extends('web.layouts.main')

@section('title', 'Studio Vimana | Portfolio')


@section('styles')
@endsection


@section('content')
    <div id="actual_section" data-section"portfolio"></div>

    <div class="container-fluid dark-container-top">
        @include('web.portfolio.partials.filter')
    </div>

<div class="container-fluid portfolio-container">
    <div class="row ">
        @if(! count($articles))
            <div class="container">
                <h2>Aún no hay muestras subidas en esta categoría.</h2>
                <hr>
                <h4>Próximamente estaremos actualizando el contenido </h4>
                <p>Volvé más tarde :)</p>
            </div>
        @endif


        @foreach($articles as $article)
        <div class="col-sm-6 col-md-4 col-lg-3 portfolio-item">
            <div class="inner">
                {{-- <a href="{!! route('web.portfolio.article',$article->slug ) !!}"></a> --}}
                
                {{-- IMAGE --}}
                {{-- Prevents error when No image is uploaded in article --}}
                <a href="{!! route('web.portfolio.article',$article->slug ) !!}">
                    @if (count($article->images))
                        <img src="{{ asset('webimages/portfolio/'. $article->images->first()->name ) }}" class="img-responsive" alt="">
                    @else
                        <img src="{{ asset('webimages/gen/genlogo.jpg') }}" class="img-responsive" alt="">
                    @endif
                </a>

                {{-- ARTICLE INFO --}}
                <div class="info">
                    {{-- SLUG --}}
                    <a href="{!! route('web.portfolio.article',$article->slug ) !!}">
                        <span class="text title"> {!! $article->title !!} </span> <br>
                    </a>
                    {{-- CATEGORY --}}
                    <a href="{{ route('web.search.category', $article->category->name ) }}">
                        <span class="text cat-title">Categoría: </span><span class="text cat-text">{{ $article->category->name }}</span>
                    </a>
                    <hr>
                    {{-- TAGS --}}
                    <div class="tags">
                        @foreach($article->tags as $tag)
                            <a href="{{ route('web.search.tag', $tag->name ) }}">
                                <span class="text badge badgeGrey">{!! $tag->name !!}</span>
                            </a>
                        @endforeach
                    </div>
                    {{-- DATE --}}
                    <div class="date">
                        <span class="text">{{ $article->created_at->diffForHumans() }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        @endforeach
    </div>
        {!! $articles->render(); !!}
  </div>

@endsection


@section('scripts')
@endsection

@section('custom_js')
    <script type="text/javascript">
    </script>
@endsection




   




                {{-- Modelo de base segun T de CF --}}

                {{--   <div class="col-md-9">
                @foreach($articles as $article)
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <a href="{!! route('web.portfolio.article',$article->slug ) !!}" class="thumbnail">
                                @foreach($article->images as $image)
                                <img src="{{ asset('content/articles/images/'.$image->name ) }}" class="img-responsive img-article" style="max-width: 200px">
                                @endforeach
                            </a>
                        Slug: {{ $article->slug}}
                        </div>
                        <a href="{!! route('web.portfolio.article',$article->slug ) !!}">
                            <h3 class="text-center">{{ $article->title }}</h3>
                        </a>
                        <hr>
                        <h5 class="">{!! str_limit($article->content, 50) !!}</h5>
                        <a href="{{ route('web.search.category', $article->category->name ) }}">
                            {{ $article->category->name }}
                        </a>
                        <hr>
                        {{ $article->created_at->diffForHumans() }}
                    </div>
                @endforeach

            {!! $articles->render(); !!}
            </div> --}}





                {{-- <div class="container-fluid portfolio-container">
        <div class="row row-flex row-flex-wrap">
            --}}     
            {{-- @for($i=0; $i < 10 ; $i++) --}}
                
           {{--  @foreach($articles as $article)

            <div class="col-md-3 col-sm-6 col-xs-12 portfolio-item">         
                <a href="{!! route('web.portfolio.article',$article->slug ) !!}"> --}}
                {{-- {!! dd($article->images->first()) !!} --}}
                    {{-- @foreach($article->images as $image) --}}
                    {{-- <img src="{{ asset('content/articles/images/'. $article->images->first()->name ) }}" class="img-responsive" alt=""> --}}
                    {{-- @endforeach --}}
                    {{-- <div class="data">
                        <span class="title"> {!! $article->title !!} </span>
                    </div>
                </a> --}}
        {{--         <div class="bottom">
                    <div class="time">Hace 3 min.</div>
                </div> --}}
            {{-- </div>
            
            @endforeach --}}

            {{-- @endfor --}}