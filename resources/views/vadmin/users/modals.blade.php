
{{----------- NEW MODAL -----------}}
@component('vadmin.layouts.components.modal')

	@slot('id','New')
	@slot('title', 'Nuevo Usuario')

	@slot('content')
		{!! Form::open(['id'=>'NewForm']) !!}
			<div class="form-group">
				<div class="row">
					<div class="col-md-6">
						{!! Form::label('name', 'Nombre:') !!}
						{!! Form::text('name', null, ['class' => 'Name form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required' => '']) !!}
						{!! Form::label('email', 'Email:') !!}
						{!! Form::text('email', null, ['class' => 'Email form-control', 'placeholder' => 'Ingrese su email', 'required' => '']) !!}
					</div>
					<div class="col-md-6">
						{!! Form::label('password', 'Contraseña:') !!}
						{!! Form::text('password', null, ['class' => 'Password form-control', 'id' => 'Password', 'placeholder' => 'Ingrese su contraseña', 'required' => '']) !!}
						{!! Form::label('password', 'Contraseña:') !!}
						{!! Form::text('password', null, ['class' => 'Password2 form-control', 'placeholder' => 'Reingrese su contraseña', 'required' => '', 'data-parsley-equalto' => '#Password']) !!}
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
					{!! Form::label('role', 'Rol:') !!}
				    {!! Form::select('role_id', ['user','admin', 'superadmin'], null, ['class' => 'form-control', 'placeholder' => 'Seleccione una opcion', 'required' => '']) !!}
					</div>
				</div>
				
			</div>
			<div class="ModalError"></div>
			
		{!! Form::close() !!}
	@endslot
	@slot('actionBtnId','NewBtn')
	@slot('acceptBtn', 'Crear Usuario')

@endcomponent

{{------------- EDIT MODAL -------------}}
@component('vadmin.layouts.components.modal')

	@slot('id','Edit')
	@slot('title', 'Editar Usuario')

	@slot('content')
		{!! Form::open(['id'=>'EditForm']) !!}
			<div class="form-group">
				{!! Form::label('name', 'Nombre:') !!}
				{!! Form::text('name', null, ['class' => 'CategoryName form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required']) !!}
			</div>
			<div class="ModalError"></div>
			
		{!! Form::close() !!}
	@endslot

	@slot('actionBtnId','EditBtn')
	@slot('acceptBtn', 'Editar Usuario')

@endcomponent
