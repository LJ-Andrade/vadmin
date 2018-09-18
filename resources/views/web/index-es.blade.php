@extends('web.partials.main')
@section('title', 'Vimana Studio | Inicio')

@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/swiper-slider/swiper.min.css') }}">
@endsection

@section('content')
<header>
    @include('web.partials.nav-es')
</header>
@php($current = 'home')
@php($lang = 'es')
{{------------- Facebook App----------------}}
{{------------------------------------------}}
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8&appId=240698342801213";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>

{{--------------- Home Top  ----------------}}
{{------------------------------------------}}
<section id="Home" class="home-top-section">
    <div class="container-fluid">
        <div class="row">
            <div class="content">
                <div class="inner">
                    <span class="big-title white">Desarrollo Web y Diseño Gráfico</span>
                    <p>
                        Somos un equipo de trabajo dedicado a crear soluciones visuales e interactivas
                        para mejorar la estética, el impacto y la funcionalidad de un proyecto.
                    </p>
                    <div class="buttons">
                        <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" onclick="toggleNav()" class="btn btn-primary">Ver Portfolio</a>
                        <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" class="btn btn-gradient">Contactanos</a>
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
                <h1>DISEÑO E INNOVACIÓN</h1>
                <div class="divisor"></div>
                <h2>Especialidades</h2>
                <p>
                    Nos especializamos en el área del diseño web, la
                    programación, el diseño gráfico y la ilustración. <br> <br>
                    Generamos contenido propio y personalizado para que
                    cada cliente obtenga un producto único y original. <br> <br>
                    <b>Atendemos Empresas, Pymes, Proyectos y Particulares.</b>
                </p>
                <a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" class="btn btn-gradient">Contactanos</a>
            </div>
            <div class="col-md-12 col-lg-8 column-2">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec3.png') }}" alt="Vimana Studio Speciality">
                        <h1>Desarrollo Web</h1>
                        <p>
                            Interfaces visuales modernas, cradas para maximizar el tiempo de permanencia del usuario y lograr mejores conversiones.
                            Los sitios salen listos para ser posicionados cumpliendo las exigencias de los buscadores.
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec4.png') }}" alt="Vimana Studio Speciality">
                        <h1>Webs Autoadministrables</h1>
                        <p>
                            Son sitios diseñados para que puedan ser gestionados directamente por el cliente. <br>
                            <b>Gestión de usuarios | Gestión de contenido | Gestión de galería de imágenes | Blogs, noticias </b>
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec1.png') }}" alt="Vimana Studio Speciality">
                        <h1>Diseño Gráfico</h1>
                        <p>
                            Identidad Corporativa -  Logos e Isologos -  Flyers -  Packaging - Diseño de Catálogos<br>
                            Diseño UI/UX - Interfaces - Redes sociales
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <img src="{{ asset('images/web/spec2.png') }}" alt="Vimana Studio Speciality">
                        <h1>Marketing en Redes</h1>
                        <p>
                            Ofrecemos asesoramiento, gestión, planificación y demás tareas relacionadas 
                            con la publicidad en redes sociales.
                        </p>
                    </div>
                </div> {{-- / row --}}
            </div> {{-- / col-md-8 col-sm-6 --}}
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section>

{{------------- Featured Jobs --------------}}
{{------------------------------------------}}
<section class="featured-jobs">
    <div class="background"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-lg-5 column-1"></div>
            <div class="col-md-12 col-lg-7 column-2">
                <h1>E-COMMERCE - TIENDAS ONLINE</h1>
                <div class="divisor"></div>
                <h2>OPTIMICE SU GESTIÓN DE VENTAS</h2>
                <p>
                    Creamos sistemas dedicados a facilitar la organización de su empresa.<br> 
                    Hacemos que sea más fácil vender y para su cliente, más fácil comprar.
                </p>
                <a href="#Contact" class="btn btn-gradient" onclick="fillDemo()">Solicite una demo</a>
                <div class="img-icon-container">
                    <div class="icon"><img src="{{ asset('images/web/icon-cube.png') }}" alt="Vimana Studio - Square Icon"></div>
                    <div class="content">
                        <h3>E-Commerce</h3>
                        <p>
                            Tenemos varias opciones en cuanto a tiendas virtuales. <br>
                            Las mismas se acomodan a distintos tipos de presupuestos y necesidades. <br>
                            Son ideales tanto para pequeños emprendimientos como para grandes proyectos.
                        </p>
                    </div>
                </div>
                <div class="img-icon-container">
                    <div class="icon"><img src="{{ asset('images/web/icon-cube.png') }}" alt="Vimana Studio - Square Icon"></div>
                    <div class="content">
                        <h3>Sistema para Mayorísta | <b>VADMIN</b></h3>
                        <p>
                            VADMIN es un sistema para gestionar tiendas para clientes mayorístas, y en el caso de necesitarlo, minorístas. 
                            Dispone una tienda virtual que permite el registro  de estos dos tipos de usuarios. Los precios de la tienda varían según los mismos. <br>
                            El sistema dispone un panel de control donde podrá gestionar todo lo referido a
                            la carga de productos, listas de precios, stock, descuentos por producto, cupones de descuento generales, 
                            registro de usuarios y empleados, exportación de datos y más funciones.
                        </p>
                    </div>
                </div>
            </div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / featured-jobs --}}


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
            <h1>¿ Querés saber como trabajamos ?</h1>
            <h2>Planificación de proyecto</h2>
            <div class="centered">
                <div class="divisor"></div>
            </div>
            <div class="text">
                <p>
                    Trabajamos en equipos pequeños, ligados personalmente con el cliente. Cada detalle mencionado es tomado en cuenta.
                </p>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon1.png') }}" alt="">
                    <p>
                        Antes de crear, <b>escuchamos.</b> Estudiamos las necesidades del cliente y su público objetivo.

                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon2.png') }}" alt="">
                    <p>
                        Refinamos las ideas e impresiones obtenidas. Aportamos las nuestras y <b>marcamos el norte</b>.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon3.png') }}" alt="">
                    <p>
                        Desarrollamos el proyecto utilizando las <b>herramientas adecuadas</b> al desafío obtenido.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon4.png') }}" alt="">
                    <p>
                        Testeamos, refinamos y corregimos el rumbo según la <b>conformidad del cliente</b> y <b>la aceptación del usuario</b>.
                    </p>
                </div>
            </div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / work-planification --}}
<div id="Error"></div>
@include('web.partials.contact-es')
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