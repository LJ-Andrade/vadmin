@extends('vadmin.layouts.main')

@section('title', 'Vadmin | Usuarios')
@section('header_title', 'Listado de Usuarios') 

@section('content')
    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Create New Client</div>
                    <div class="panel-body">
                        <a href="{{ url('/vadmin/clients') }}" title="Back"><button class="btn btn-warning btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></a>
                        <br />
                        <br />

                        @if ($errors->any())
                            <ul class="alert alert-danger">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        @endif

                        {!! Form::open(['url' => '/vadmin/clients', 'class' => 'form-horizontal', 'files' => true]) !!}

                        @include ('vadmin.clients.form')

                        {!! Form::close() !!}

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
