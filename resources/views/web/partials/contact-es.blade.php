
{{-------------- Contact  ------------------}}
{{------------------------------------------}}
<div id="Contact"></div>
<section class="contact-section">
	<div class="container">
		<div class="row centered">
			<h2>CONTACTANOS</h2>
		</div>
		{{-- Contact data --}}
		<div class="row centered-column contact-data">
			<div class="inner">
				<ul>
					<li>
						<div class="item-1"><i class="fa fa-envelope"></i> E-MAIL</div>
						<div class="item-2"><a style="color: #000; font-weight: 400" href="mailto:info@vimanastudio.com.ar">info@vimanastudio.com.ar</a></div>
					</li>
					<li>
						<div class="item-1"><i class="fa fa-envelope"></i> WHATSAPP</div>
						<div class="item-2">(011) 11-5809-0227</div>
					</li>
					<li>
						<div class="item-1"><i class="fa fa-phone"></i> LLAMADOS</div>
						<div class="item-2">(011) 15-5160-1565</div>
					</li>
				</ul>
			</div>
		</div>
		{{-- Contact Form --}}
		<div class="row contact-form">
			{!! Form::open(['id' => 'MainContactForm', 'class' => 'row']) !!}
				{{ csrf_field() }}
				<div class="col-md-6">
					{!! Form::text('name', null, ['id' => 'Form-Name-Input', 'class' => 'form-control', 'placeholder' => 'Ingresá tu nombre', 'required' => '']) !!}
					{!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => 'Ingresá tu e-mail', 'required' => '']) !!}
					{!! Form::text('phone', null, ['class' => 'form-control', 'placeholder' => 'Ingresá tu teléfono', 'required' => '']) !!}
				</div>
				<div class="col-md-6 form-group">
					{!! Form::textarea('message', null, ['id' => 'Form-Textarea', 'class' => 'form-control', 'placeholder' => 'Dejanos tu consulta o mensaje', 'required' => '']) !!}
				</div>
				<div class="col-md-12 centered">
					<button id="ContactSubmit" class="submit">ENVIAR</button>
				</div>
			{!! Form::close() !!}
		</div>

		{{-- Form Responses --}}
		<div class="row centered">
			<div id="FormResponse"></div>
			<div id="FormSuccess" class="form-responses animated fadeIn Hidden">
				<i class="success fa fa-check"></i>
				<h2>Mensaje Enviado !</h2> 
				Gracias por contactarse con nosotros. <br>
				Nos estaremos comunicando a la brevedad.
			</div>
			<div id="FormError" class="form-responses animated fadeIn Hidden">
				<i class="error fa fa-times"></i>
				<h2>Ha ocurrido un error !</h2> 
				Intente comunicarse directamente por mail o teléfono <br>
				Gracias.
			</div>
		</div>
		{{-- Social --}}
		<div class="row centered social">
			<div class="horizontal-list">
				<ul>
                    <li class="square-icons"><a href="https://www.instagram.com/studiovimana/" target="_blank""><i class="fab fa-instagram"></i></ac></li>
                    <li class="square-icons"><a href="https://ar.pinterest.com/admstudiovimana/" target="_blank""><i class="fab fa-pinterest-p"></i></a></li>
                    <li class="square-icons"><a href="https://www.facebook.com/studiograficovimana" target="_blank""><i class="fab fa-facebook-f"></i></a></li>
                    <li class="square-icons"><a href="https://twitter.com/StudioVimana" target="_blank""><i class="fab fa-twitter"></i></a></li>
                    <li class="square-icons"><a href="https://www.behance.net/studiovimana" target="_blank""><i class="fab fa-behance"></i></a></li>
{{--                    <li class="square-icons"><a href="https://plus.google.com/u/0/+StudioVimana" target="_blank""><i class="fab fa-google-plus-g"></i></a></li> --}}
				</ul>
			</div>
		</div>
	</div> {{-- / container-fluid --}}
</section> {{-- / contact-section --}}
