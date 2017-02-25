{{-- <div class="navbar navbar-default navbar-fixed-top text-center" role="navigation">        
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>  
            <a class="navbar-brand" href="{{ url('/') }}"><img src="{{ asset('webimages/logos/logo.png') }}"></a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="{{ url('/') }}"><i class="ion-ios-home-outline"></i> Inicio</a></li>
                <li><a href="{{ route('web.portfolio') }}"><i class="ion-ios-briefcase-outline"></i> Portfolio</a></li>
                <li><a href="{{ url('/#contact') }}"><i class="ion-ios-email-outline"></i> Contacto</a></li>   
            </ul>
        </div>
    </div>
</div>
 --}}

 <!-- Navbar static top -->
      <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container navContainer">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">
              <img src="{{ asset('web/images/logos/logo.png') }}" class="img-responsive logo" alt="">
            </a><!-- Top Logo -->
          </div>
          <div class="navbar-collapse collapse">
            <!-- Right nav -->
            <ul class="nav navbar-nav navbar-right">
              <li><a href="{{ url('/') }}">Inicio</a></li>                                         <!-- INICIO -->
              <li><a href="{{ url('catalogo') }}">Cat&aacute;logo</a></li>                                         <!-- INICIO -->
              <!-- MUJERES -->
              <!-- <li><a href="catalogue.php">Mujeres <span class="caret"></span></a>              -->
                <!-- <ul class="dropdown-menu">
                  <li><a href="product.php">Pijamer&iacute;a</a></li>
                  <li><a href="#">Camisolines</a></li>
                  <li><a href="#">Maternales</a></li>
                  <li><a href="#">L&iacute;nea Raso<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Pijamas </a></li>
                      <li><a href="#">Batas</a></li>
                      <li><a href="#">Camisolines </a></li>
                    </ul>
                  </li>
                  <li><a href="#">L&iacute;nea Gaza<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Pijamas </a></li>
                      <li><a href="#">Batas</a></li>
                      <li><a href="#">Camisolines </a></li>
                    </ul>
                  </li>
                  <li><a href="#">Batas<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Batas Polar</a></li>
                      <li><a href="#">Batas Towell</a></li>
                      <li><a href="#">Batas de Algod&oacute;n</a></li>
                    </ul>
                  </li>
                </ul>
              </li> -->
              <!-- NIÑOS -->
              <!-- <li><a href="#">Ni&ntilde;os <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Pijamas</a></li>
                  <li><a href="#">Pijama Juvenil</a></li>
                  <li><a href="#">Camisones de nenas</a></li>
                </ul>
              </li> -->
              <!-- <li><a href="#">Hombres <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Pijamas </a></li>
                  <li><a href="#">Batas</a></li>
                </ul>
              </li> -->
              
            </ul><!-- /Ul Navbar -->
          </div><!--/.nav-collapse -->
        </div><!--/.container -->
      </div><!-- /.navbar -->

