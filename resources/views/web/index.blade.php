@extends('web.partials.main')
@section('title', 'Vimana Studio | Inicio')

@section('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/swiper-slider/swiper.min.css') }}">
@endsection

@section('content')
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
<section class="home-top-section">
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
                        <button class="btn btn-primary">Ver Portfolio</button><button class="btn btn-gradient">Contactenos</button>
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
                <button class="btn btn-gradient">Contactanos</button>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, commodi. Omnis quo minus eaque quas, 
                            possimus officiis et nesciunt totam ducimus obcaecati 
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
                <h1>DISEÑO E INNOVACIÓN</h1>
                <div class="divisor"></div>
                <h2>Web Adaptables</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus quis modi mollitia. Quasi eum adipisci veniam ducimus, dolores quas.
                    Mollitia recusandae dolore rem fugit minima culpa quod eaque amet!
                    Nisi natus quis modi mollitia. Quasi eum adipisci veniam ducimus, dolores quas.
                    Mollitia recusandae dolore rem fugit minima culpa quod eaque amet!
                </p>
                <button class="btn btn-gradient">Contactanos</button>
                <div class="img-icon-container">
                    <div class="icon"><img src="{{ asset('images/web/icon-cube.png') }}" alt="Vimana Studio - Square Icon"></div>
                    <div class="content">
                        <h3>Diseño y Desarrollo Web</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum atque sit mollitia minus fuga, 
                            soluta natus placeat nesciunt aliquam provident nihil, porro quaerat reiciendis alias libero assumenda excepturi ipsa.
                        </p>
                    </div>
                </div>
                <div class="img-icon-container">
                    <div class="icon"><img src="{{ asset('images/web/icon-cube.png') }}" alt="Vimana Studio - Square Icon"></div>
                    <div class="content">
                        <h3>Diseño y Desarrollo Web</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum atque sit mollitia minus fuga, 
                            soluta natus placeat nesciunt aliquam provident nihil, porro quaerat reiciendis alias libero assumenda excepturi ipsa.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo fugiat est et impedit,
                    excepturi voluptatibus rem, nesciunt ex quam eligendi veniam officia, numquam similique
                    at expedita voluptate voluptas porro?
                </p>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon1.png') }}" alt="">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laudantium quibusdam obcaecati quidem fuga impedit? Doloribus.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon2.png') }}" alt="">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laudantium quibusdam obcaecati quidem fuga impedit? Doloribus.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon3.png') }}" alt="">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laudantium quibusdam obcaecati quidem fuga impedit? Doloribus.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <img src="{{ asset('images/web/icon4.png') }}" alt="">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laudantium quibusdam obcaecati quidem fuga impedit? Doloribus.
                    </p>
                </div>
            </div>
        </div> {{-- / row --}}
    </div> {{-- / container-fluid --}}
</section> {{-- / work-planification --}}
<div id="Error"></div>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('vendor/swiper-slider/swiper.jquery.min.js') }}"></script>
@endsection