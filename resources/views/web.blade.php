@extends('web.layouts.main')
@section('title', 'StudioVimana | Home')

@section('fast_css')

    <link rel="stylesheet" type="text/css" href="{{ asset('css/fast_css.css') }}">
    
@endsection


@section('styles')
    
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/owl/owl.carousel.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/owl/owl.theme.default.css') }}">

@endsection


@section('content')
    

    {{-- Facebook Plugin --}}
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8&appId=240698342801213";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    {{-- /Facebook Plugin --}}

    {{-- Home Section Desktop --}}
    <div class="Home-Parallax">      
        <div id="home" class="home-parallax"> 
        <div id="bgdim"></div>
            <div class="main-logo wow animated zoomIn" data-wow-delay="0s" data-wow-duration="3s">
                <img src="{{ asset('webimages/logos/main-logo.png') }}">
            </div>
            <div class="container home-slider-items">
                <div class="row owl-valores">
                    <div class="owl-carousel owl-theme owl-loaded">
                        <div class="owl-item">
                            <span class="icon"><i class="ion-coffee"></i></span>
                            <span>Estás buscando</span>
                            <span><b>especialístas en Diseño?</b>
                            </span>
                            <a href="{{ url("/#contact") }}" class="btn btnHollow">Contactanos !</a>
                        </div>
                        <div class="owl-item">
                            <span class="icon"><i class="ion-ios-briefcase-outline"></i></span>
                            <span>Querés ver como <b>trabajamos?</b></span><br>
                            <a href="{{ route("web.portfolio") }}" class="btn btnRed">Ver el Portfolio!</a>
                        </div>
                        <div class="owl-item">
                            <span class="icon"><i class="ion-ios-flask-outline"></i></span>
                            <span>Desarrollamos <b>sistemas a medida</b></span> <br>
                            <a href="{{ url("/#contact") }}" class="btn btnHollow">Presentanos tu proyecto!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- Home Section Mobile --}}
    <div class="home-intro">
        <img src="{{ asset('webimages/logos/main-logo.png') }}">
        <h1>Diseño Gráfico y Diseño Web</h1>
    </div>
    {{-- First Info --}}
    <div class="container-fluid section-container home-section-2">
        <div class="container">
            <article class="row">
                <span class="text-logo-small" data-wow-duration="1s" data-wow-delay="0.2s">Studio</span>
                <span class="text-logo-bold" data-wow-duration="1s" data-wow-delay="0.2s">Vimana</span>
                <h3>Somos un equipo de trabajo dedicado a crear soluciones visuales.</h3>
                <p class="" data-wow-duration="1s" data-wow-delay="0.2s">
                    Nos especializamos en el área del diseño web, la programación,
                    el diseño gráfico y la ilustración. <br>
                    Generamos contenido propio y personalizado para que cada
                    cliente obtenga un producto único y original. <br>
                </p>
                   <p><b>Atendemos Empresas, Pymes, Proyectos y Particulares.</b></p> 
                <div class="icons horizontal-list power-icons">
                    <ul>
                        <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                        <img src=" {{asset('webimages/gral/home/icons/icon1.png')}} "></li>
                        <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                        <img src=" {{asset('webimages/gral/home/icons/icon2.png')}} "></li>
                        <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                        <img src=" {{asset('webimages/gral/home/icons/icon3.png')}} "></li>
                        <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                        <img src=" {{asset('webimages/gral/home/icons/icon4.png')}} "></li>
                        <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                        <img src=" {{asset('webimages/gral/home/icons/icon5.png')}} "></li>
                    </ul>
                </div><br><br>
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                    <img src="{{ asset('webimages/gral/loaders/loader.svg') }} ">
                </div><br>
            </article>
        <hr class="grey-hr">
        </div>
    </div>
    {{-- Our Services --}}
    <div id="services" class="container-fluid section-container our-services">
        <div class="container">
            <h1 class="wow animated fadeInUp">Nuestros Servicios</h1>
            <div class="row row-flex row-flex-wrap service-item">
                <div class="col-md-6 col-sm-12 col-xs-12 inner wow animated fadeIn" data-wow-delay="0.3s">
                    <img src="{{ asset('webimages/gral/home/img2.png') }}">
                </div>
                <article class="col-md-6 col-sm-12 col-xs-12 inner wow animated fadeInRight">
                    <div class="left-divider-small"></div>
                    <span class="title"><i class="ion-ios-flask"></i> SOLUCIONES INTERACTIVAS </span>
                    <p>
                        Desarrollamos sitios personalizados. Creados desde cero y con las últimas tecnologías web.
                        Entregamos un código limpio y optimizado para luego incluírlo en buscadores cumpliendo con sus exigencias. <br><br>
                        
                        - <b>Adaptables</b> | Celulares | Tablets | Notebooks | Pc <br>
                        - <b>Sitios Institucionales</b> | Económicos | Rápido Desarrollo <br>
                        - <b>Diseño gráfico</b> | Creamos las piezas necesarias para el sitio<br>
                        - <b>Relacionado con Redes Sociales</b> | Aumenta el posicionamiento<br>
                        - <b>Exposición</b> | GoogleAdwords | Facebook | Buscadores | *Opcional<br>
                    </p>
                    <div class="text-big">
                        <h1>Desarrollo Web</h1> 
                    </div>
                    <div class="action">
                        <a href="{{ route('web.portfolio') }}">
                            <span class="btnHollow">Ver portfolio <i class="ion-ios-arrow-thin-right"></i></span>
                        </a>
                    </div>

                </article>
            </div>
        </div>
        <div class="container-fluid center-item">
            <div class="container wow animated fadeIn">
                <div class="row row-flex row-flex-wrap service-item">
                    <article class="col-md-6 inner white-back wow animated fadeInLeft">
                        <span class="title">SOLUCIONES VISUALES CREATIVAS <i class="ion-ios-rose-outline"></i></span>
                        <p>
                            Desarrollamos piezas personalizadas.  <br>
                            Estudiamos el perfil de cliente para  <br>
                            entregar un producto acorde a la imágen buscada <br><br>

                            - <b>Identidad Corporativa</b> | Marca | Logos <br>
                            - <b>Papelería industrial</b> | Tarjetas | Flyiers <br>
                            - <b>Publicidad</b> | Redes sociales | Plantillas | Posts <br>
                            - <b>Editorial</b> | Libros | Catálogos | Manuales | Folletos <br>
                            - <b>Packagin</b> | Etiquetas | Bolsas | Cajas <br>
                        </p>
                        <div class="text-big">
                            <h1 class="right">Diseño Gráfico</h1> 
                        </div>
                        <div class="action wow animated fadeIn" data-wow-delay="0.3s">
							<a href="{{ route('web.portfolio') }}">
								<span class="btnHollow">Ver portfolio <i class="ion-ios-arrow-thin-right"></i></span>
							</a>
						</div>
                    </article>
                    <div class="col-md-6 inner">
                        <img src="{{ asset('webimages/gral/home/img1.png') }}">        
                        {{-- <object class="animated wow" type="image/svg+xml" data="{{ asset('webimages/gral/home/art.svg') }}"></object> --}}
                    </div>
                </div>
            </div>
        </div>
        <div class="container wow animated fadeIn">
            <div class="row row-flex row-flex-wrap service-item">
                <div class="col-md-4 col-sm-12 col-xs-12 inner wow animated fadeIn" data-wow-delay="0.3s">
                    <img src="{{ asset('webimages/gral/home/img3.png') }}">
                </div>
                <article class="col-md-8 col-sm-12 col-xs-12 inner wow animated fadeInRight">
                    <div class="left-divider-small"></div>
                    <span class="title">SISTEMAS A MEDIDA</span>
                    <p>
                        Creamos sistemas hechos a medida según las necesidades presentadas.<br>
                        Desarrollamos blogs, administradores de contenido, sistemas de gesión interna, etc.<br><br>
                        
                        - <b>Gestores de Contenido</b> | Actualizá tu contenido vos mismo<br>
                        - <b>Sitios de Gestión empresarial</b> | Organizá tu empresa desde tu web<br>
                        - <b>Sistemas a medida</b> | Desarrollamos el sistema según lo que nos propongan<br> <br>


                        Características: <br>
                        - <b>Siempre Online</b> | Alojados en la web pueden ser accesibles desde cualquier lugar o dispositivo <br>
                        - <b>Modulares y escalables</b> | Luego de creados se pueden agregar secciones o funcionalidades extra<br>
                        - <b>Aplicaciones Offline</b> | Aplicaciones instalables que no dependen de conexión <br>
                    </p>
                    <div class="text-big">
                        <h1>Progamación y Desarrollo de Apps</h1> 
                    </div>
                     <div class="action">
						<a href="{{ route('web.portfolio') }}">
							<span class="btnHollow">Ver portfolio <i class="ion-ios-arrow-thin-right"></i></span>
						</a>
					</div>
                </article>
            </div>
        </div>
    </div>
    {{-- Our Works | Portfolio --}}
    <div class="container-fluid our-works">
        <div class="container wow animated zoomIn">
            <div class="row">
                <div class="row row-flex row-flex-wrap">              
                    <div class="col-md-6 inner">
                        <span><i class="ion-ios-briefcase-outline"></i></span>
                        <h1>NUESTRO PORTFOLIO</h1>
                        <p>
                            Una imágen vale más que un slogan. <br>
                            Visitá nuestro portfolio y mirá como trabajamos.
                        </p>
                         <a href="{{ route('web.portfolio') }}" class="btn btnHollow">Llevame !</a>
                    </div>
                    <div class="col-md-6 inner">
                        <div id="services_img_3">
                            <img src="{{ asset('webimages/gral/home/img4.png') }}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('web.layouts.partials.contact')
    @include('web.layouts.partials.foot')


@endsection

@section('scripts')

    <script src="{{asset('plugins/owl/owl.carousel.min.js')}}"></script>

@endsection

@section('custom_js')
    <script type="text/javascript">
        
    $(document).ready(function () {

        if (screen.width > 765) {
            // Owl
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items:1,
                loop:true,
                margin:10,
                navigation:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:false,

            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            });

        }
        
    });

    </script>
@endsection