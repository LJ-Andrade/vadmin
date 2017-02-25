@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Usuarios')

@section('content')

	<div class="container">
		<div class="row">
		    <h2>Listado de Usuarios</h2>
			<hr>
		    <table class="table table-striped">
				<thead>
				  <tr>
				    <th>Id</th>
				    <th>Nombre</th>
				    <th>Email</th>
				    <th>Permisos</th>
				    <th>Acciones</th>
				  </tr>
				</thead>
				<tbody>
					@foreach($users as $user)
					<tr>
						<td>{{ $user->id }}</td>
						<td>{{ $user->name }}</td>
						<td>{{ $user->email }}</td>
						<td>
							@if( $user->type == "admin")
								<span class="label label-danger">Admin</span>
							@else
								<span class="label label-primary">Usuario</span>
							@endif
						</td>
						<td>
						<a href="{{ route('users.edit', $user->id) }}" class="btn btn-success"><i class="ion-edit"></i></a>
						<a href="{{ route('users.destroy', $user->id) }}" onclick="return confirm('Seguro que deseas eliminar al usuario?')" class="btn btn-danger"><i class="ion-trash-b"></i></a>
						</td>
					</tr>
					@endforeach
					@if(!$users->all())
					<tr>
						<td>{!! 'No hay usuarios creados' !!}</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					@endif
					
				</tbody>
			</table>
			{!! $users->render(); !!}
			<hr>
			<a href="{{ route('users.create') }}" class="btn btn-success">Nuevo Usuario</a>
		</div>
	</div>  

@endsection