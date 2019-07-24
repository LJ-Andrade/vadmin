<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>@yield('title')</title>
		<meta name="description" content="Somos un equipo de trabajo dedicado a desarrollar contenido visual e interactivo" />
		<meta name="keywords" content="Diseño Web, diseño grafico, web, sitio web, paginas web, programacion, sistemas, administracion, gestores, contenido, publicidad, internet, redes sociales" />
		<meta name="author" content="Vimana Studio" />
		<meta name="theme-color" content="#0d1d41"><!-- Chrome, Firefox OS and Opera -->
		<meta name="msapplication-navbutton-color" content="#0d1d41"><!-- Windows Phone -->
		<meta name="apple-mobile-web-app-status-bar-style" content="#0d1d41"><!-- iOS Safari -->
		<link rel="shortcut icon" href="{{ asset('images/web/favicon.png') }}"><!-- Favicon -->
		<meta property="og:url"         content="https://vimana.studio" />
		<meta property="og:type"        content="article" />
		<meta property="og:title"       content="Diseño Web y Diseño Gráfico" />
		<meta property="og:description" content="Somos un equipo de trabajo dedicado a desarrollar contenido visual e interactivo" />
		<meta property="og:image"       content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:title"      content="Studio Vimana" />
		<meta name="twitter:image"      content="{{ asset('webimages/logos/main-logo.png') }}" />
		<meta name="twitter:url"        content="https://vimana.studio" />
		{{-- Vendor --}}
		<link rel="stylesheet" type="text/css" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
		<link rel="stylesheet" href="{{ asset('vendor/font-awesome/css/all.css') }}">
		{{-- <link rel="stylesheet" type="text/css" href="{{ asset('vendors/animate/animate.css') }}"> --}}
		{{-- Styles --}}
		<link rel="stylesheet" type="text/css" href="{{ asset('css/web.css') }}">
		@yield('styles')
	</head>
	<body>
		
		<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM4GWS3" height="0" width="0" style="display: none; visibility: hidden"></iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->
		@yield('content')
		<div id="go-to-top">
			<i class="fas fa-sort-up"></i>
		</div>
		@include('web.partials.foot')
		<script type="text/javascript" src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('vendor/bootstrap/js/bootstrap.min.js')}} "></script>
		<script type="text/javascript" src="{{ asset('js/web.js') }} "></script>
		@yield('scripts')
		<script>
			$(document).ready(function(){
				// ---------------------- Tawk.to ONLINE CHAT -------------------------
					// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
					// 	(function(){
					// 		var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
					// 		s1.async=true;
					// 		s1.src='https://embed.tawk.to/5b15b03c10b99c7b36d49f3f/default';
					// 		s1.charset='UTF-8';
					// 	s1.setAttribute('crossorigin','*');
					// 	s0.parentNode.insertBefore(s1,s0);
					// })();
						
				// ------------------------ Ajax Contact Form  ------------------------
				$(document).on('submit','#MainContactForm',function(e){
					e.preventDefault();
					var data   = $(this).serialize();
					var route  = "{{ route('send-contact') }}";
					var loader = "<img src='{{ asset('images/gral/loader-sm.svg') }}'>";

					$.ajax({
						type: "POST",
						url: route,
						dataType: 'JSON',
						data: data,
						beforeSend: function(){
							$('#ContactSubmit').html(loader);
						},
						success: function(data) {
							$('#MainContactForm').hide();
							$('#FormSuccess').removeClass('Hidden');
							$('#FormResponse').hide();
							console.log(data);
							$('#Error').html(data.responseText);
						},
						error: function(data) {
							$('#FormResponse').hide();
							$('#MainContactForm').hide();
							$('#ContactBtn').html('ENVIAR');
							$('#FormError').removeClass('Hidden');
							console.log(data);
							$('#Error').html(data.responseText);
						}
					});
				});
			});
			<script type="text/javascript">var subscribersSiteId='8c70baf8-147e-4cde-a566-af525b1819a3';</script><script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
		</script>
	</body>
</html>