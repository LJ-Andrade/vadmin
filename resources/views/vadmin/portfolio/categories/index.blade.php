@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Categorías')

@section('content')

	<div class="container">
		<div class="row">
		
		    <h3>Listado de Categorías</h3>
			<hr>
		    <table class="table table-striped">
			<thead>
			  <tr>
			    <th>Id</th>
			    <th>Nombre</th>
			  </tr>
			</thead>
			<tbody>
				@foreach($categories as $category)
				<tr>
					<td>{{ $category->id }}</td>
					<td>{{ $category->name }}</td>
					<td>
					<a href="{{ route('categories.edit', $category->id) }}" class="btn btn-success"><i class="ion-edit"></i></a>
					<a href="{{ route('categories.destroy', $category->id) }}" onclick="return confirm('Seguro que deseas eliminar la categoría?')" class="btn btn-danger"><i class="ion-trash-b"></i></a>
					</td>
				</tr>
				@endforeach		
				@if(!$categories->all())
				<tr>
					<td>{!! 'No hay categorías creadas' !!}</td>
					<td></td>
				</tr>
				@endif
			</tbody>
		</table>
		{!! $categories->render(); !!}
		<br>
		<a href="{{ route('categories.create') }}" class="btn btn-success">Nueva Categoría</a>
		<hr>
		</div>
	</div>  

@endsection