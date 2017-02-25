@extends('vadmin.layouts.main')

@section('title', 'Fascination | Creación de Talles')

@section('content')
	
	<div class="container">
		<div class="row">
			{!! Form::open(['route' => 'tags.store', 'method' => 'POST']) !!}
				<div class="form-group">
					{!! Form::label('name', 'Nombre del Tag') !!}
					{!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Ingrese un nombre...', 'required']) !!}
				</div>
				<div class="form-group">
					{!! Form::submit('Crear', ['class' => 'btn btn-primary']) !!}
				</div>
			{!! Form::close() !!}
		</div>
	</div>	

@endsection