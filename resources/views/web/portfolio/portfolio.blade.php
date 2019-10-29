@extends('web.partials.main')
@section('title', 'Vimana Studio | Portfolio')

@section('styles')
    <style>
        body {
            background-color: #171717
        }

        /* Prevent page movement when open modal */
        .modal-scrollbar-measure {
            overflow: hidden !Important; 
        }

        .navfull-top-button .bar {
            background-color: #fff
        }
    </style>
@endsection
@section('content')
    <header>
        @include('web.partials.nav-es')
    </header>
    @php($lang = 'es')
    <div class="container-fluid portfolio-container">
        <div class="row portfolio-big">
            @foreach($images as $index => $image)
            <a data-toggle="modal" data-target="#imgModal" class="PortfolioItem item col-md-6" data-imgsrc="{{ $image[1] }}">
                    <img src="{{ asset($image[0]) }}" alt="{{ $image[2] }}">
                    <div class="overlay">
                        <div class="text">
                            <p>{{ $image[2] }}</p>
                        </div>
                    </div>
                </a>
            @endforeach
        </div>
    </div>

    <div class="modal fade" id="imgModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <img id="ModalImg" src="{{ asset('images/web/portfolio/img-1-full.jpg') }}" alt="">
            </div>
        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">

        $('.PortfolioItem').on('click', function(e){
            e.preventDefault();
            let src = $(this).data('imgsrc'); 
            $('#ModalImg').attr('src', src);
            console.log(src);
        });
    </script>
@endsection





   
