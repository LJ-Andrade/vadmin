<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>@yield('title')</title>

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Fabricación de lencería y ropa de cama" />
		<meta name="keywords" content="Lenceria, ropa de cama, pijamas, indumentaria, ropa de mujer, ropa de niños" />
		<meta name="author" content="Studio Vimana" />

		<!-- Favicon -->
		<link rel="shortcut icon" href="{{ asset('web/images/logos/favicon.png') }}">

		<meta property="og:url"         content="http://fascination.com.ar" />
		<meta property="og:type"        content="article" />
		<meta property="og:title"       content="Fascination Lingerie" />
		<meta property="og:description" content="Fabricación de lencería y ropa de cama" />
		<meta property="og:image"       content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:title"      content="Fascination Lingerie" />
		<meta name="twitter:image"      content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:url"        content="http://fascination.com.ar" />
		{{-- <meta name="twitter:card"       content="" /> --}}

		<link rel="stylesheet" async  type="text/css" href="{{ asset('plugins/bootstrap/css/bootstrap.min.css') }}">
		<link rel="stylesheet" async  type="text/css" href="{{ asset('plugins/animate/animate.css') }}">
		<link rel="stylesheet" async  type="text/css" href="{{ asset('plugins/ionicons/ionicons.min.css') }}">
		<link rel="stylesheet" async  type="text/css" href="{{ asset('plugins/flexslider/flexslider.css') }}">
		<link rel="stylesheet" async  type="text/css" href="{{ asset('plugins/smartmenu/smartmenu.css') }}">

		@yield('styles')
		<link rel="stylesheet" type="text/css" href="{{ asset('css/web.css') }}">

	</head>
	<body>
		<div id="wrapper">
			<header>
				@include('web.layouts.partials.nav')
			</header>

			
			@yield('content')
		</div>
		@include('web.layouts.partials.scripts')
		{{-- @yield('web.layouts.partials.js') --}}
		@yield('scripts')
		@yield('custom_js')
	</body>
</html>