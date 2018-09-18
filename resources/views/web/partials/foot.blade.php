<footer class="container-fluid">
	{{-- <div class="container footer">
	</div> --}}
	<div class="copyright">
		@if($lang == 'es')
		Desarrollado por <a href="https://vimana.studio">Vimana Studio</a> - Todos los derechos reservados - {{ date('Y') }}
		@else 
		<a href="https://vimana.studio">Vimana Studio</a> - All rights reserved - {{ date('Y') }}
		@endif
	</div>
</footer>