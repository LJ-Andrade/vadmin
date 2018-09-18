@extends('web.partials.main')
@section('title', 'Vimana Studio | Portfolio')

@section('styles')
    <style>
        body {
            background: rgba(26,219,187,1);
            background: -moz-linear-gradient(-45deg, rgba(26,219,187,1) 0%, rgba(48,34,199,1) 76%, rgba(48,34,199,1) 100%);
            background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(26,219,187,1)), color-stop(76%, rgba(48,34,199,1)), color-stop(100%, rgba(48,34,199,1)));
            background: -webkit-linear-gradient(-45deg, rgba(26,219,187,1) 0%, rgba(48,34,199,1) 76%, rgba(48,34,199,1) 100%);
            background: -o-linear-gradient(-45deg, rgba(26,219,187,1) 0%, rgba(48,34,199,1) 76%, rgba(48,34,199,1) 100%);
            background: -ms-linear-gradient(-45deg, rgba(26,219,187,1) 0%, rgba(48,34,199,1) 76%, rgba(48,34,199,1) 100%);
            background: linear-gradient(135deg, rgba(26,219,187,1) 0%, rgba(48,34,199,1) 76%, rgba(48,34,199,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1adbbb', endColorstr='#3022c7', GradientType=1 );
        }
    </style>
@endsection
@section('content')

    {{-- <div class="container-fluid">
        @include('web.portfolio.partials.filter')
    </div> --}}

    <div class="container-fluid portfolio-container">
        <div class="row portfolio-list">
            @foreach($items as $item)
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 item">
                    <img src="{{ asset($item) }}" alt="Vimana Studio Portfolio">
                </div>
            @endforeach
        </div>
        <div class="row">
            {!! $items->render(); !!}
        </div>
    </div>
@endsection


@section('scripts')
    <script type="text/javascript">

        $('.Show-Mobile-Filter').click(function(){
            
            var filter = $('.Fiter-Inner');

            if(filter.hasClass('Hidden')){
                filter.removeClass('Hidden');
            } else {
                filter.addClass('Hidden');
            }
        });

    </script>
@endsection





   
