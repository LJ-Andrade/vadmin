@extends('web.partials.main')
@section('title', 'Vimana Studio | Inicio')

@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/swiper-slider/swiper.min.css') }}">
@endsection

@section('content')
<header>
    @include('web.partials.nav')
</header>
@php($current = 'home')
@php($lang = 'en')

{{--------------- Home Top  ----------------}}
{{------------------------------------------}}
<section id="Home" class="home-top-section">
    <div class="container-fluid">
        <div class="row">
            <div class="content">
                <div class="inner">
                    <span class="big-title white">Digital Solutions</span>
                    <p>
                        Web Design - 3D Modeling - Assets Creation
                    </p>
                    <div class="buttons">
                        <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" onclick="toggleNav()" class="btn btn-primary">Portfolio</a>
                        <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" class="btn btn-gradient">Contact Us</a>
                    </div>
                </div>
            </div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / home-top-section --}

{{--------------- Post Home ----------------}}
{{------------------------------------------}}
<section>
    <div class="container-fluid post-home-section">
        <div class="row">
            <div class="col-md-12 col-lg-4 column-1">
                <h1>INNOVATION & CREATIVITY</h1>
                <div class="divisor"></div>
                <h2>WE CREATE</h2>
                <p>
                    We are a team of digital artists passionate about delivering quality content.<br><br>
                    <b>We deliver only custom content</b><br><br>
    
                    The visual aspect is the first step to growing a brand online.<br>

                    <b>Do you want to step up ?</b>
                </p>
                <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" class="btn btn-gradient">OK ! Let's do it !</a>
            </div>
            <div class="col-md-12 col-lg-8 column-2">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec3.png') }}" alt="Vimana Studio Speciality">
                        <h1>Web Design</h1>
                        <p>
                            We build sites that adapt to all kind of devices. The information is resized for an optimized display.
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec1.png') }}" alt="Vimana Studio Speciality">
                        <h1>Graphic Design</h1>
                        <p>
                            We offer a complete line of services for branding and marketing purposes.
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec4.png') }}" alt="Vimana Studio Speciality">
                        <h1>E-Commerce and Content Management</h1>
                        <p>
                            We make your work easy with our content managers.
                            Sell online, write a blog or manage a photo gallery.
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec2.png') }}" alt="Vimana Studio Speciality">
                        <h1>Digital Assets</h1>
                        <p>
                            We create all kind of digital assets: Web themes, templates, game assets, scripts and more.
                        </p>
                    </div>
                </div> {{-- / row --}}
            </div> {{-- / col-md-8 col-sm-6 --}}
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section>


{{----------- Portfolio Slider -------------}}
{{------------------------------------------}}
<section class="portfolio-slider-section">
    <div class="container-fluid">
        <div class="row">
            <div class="column column-1">
                <div class="portfolio-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="{{ asset('images/web/slider1.png') }}" alt="Vimana Studio Works"></div>
                            <div class="swiper-slide"><img src="{{ asset('images/web/slider2.png') }}" alt="Vimana Studio Works"></div>
                            <div class="swiper-slide"><img src="{{ asset('images/web/slider3.png') }}" alt="Vimana Studio Works"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column column-2"></div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / portfolio-slider --}}


{{---------- Work Planification ------------}}
{{------------------------------------------}}
<section class="work-planification">
    <div class="container">
        <div class="row-centered">
            <h1>Do you know how we work?</h1>
            <h2>Workflow</h2>
            <div class="centered">
                <div class="divisor"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon1.png') }}" alt="">
                    <h1 class="color-1">Managing expectations</h1>
                    <p>
                        Our primary responsibility is to understand the requirement of the project in detail.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon2.png') }}" alt="">
                    <h1 class="color-1">Define content</h1>
                    <p>
                        We set the overall mission, gather the content and find the best way to show it.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon3.png') }}" alt="">
                    <h1 class="color-1">Content Creation</h1>
                    <p>
                        In this step we are in touch with the client, showing our progress to get feedback.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon4.png') }}" alt="">
                    <h1 class="color-1">Fine Tunning</h1>
                    <p>
                        Once content creation is finished we are watching how it goes to make corrections and improvements.
                    </p>
                </div>
            </div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / work-planification --}}
<div id="Error"></div>
@include('web.partials.contact')
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('vendor/swiper-slider/swiper.jquery.min.js') }}"></script>
    <script>
        const mySwiper2 = new Swiper('.portfolio-slider .swiper-container', {
            grabCursor: true,
            autoplay: true,
            autoHeight: true,
            spaceBetween: 150,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            speed: 2000
        });
    </script>
@endsection