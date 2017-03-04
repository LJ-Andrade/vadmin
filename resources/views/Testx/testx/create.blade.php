@extends('vadmin.layouts.main')

@section('title', 'Vadmin | ')
@section('header_title', 'Titulo') 

@section('content')
    <div class="container">
        <div class="row">

            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Create New Testx</div>
                    <div class="panel-body">
                        <a href="{{ url('/Testx/testx') }}" title="Back"><button class="btn btn-warning btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></a>
                        <br />
                        <br />

                        @if ($errors->any())
                            <ul class="alert alert-danger">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        @endif

                        {!! Form::open(['url' => '/Testx/testx', 'class' => 'form-horizontal', 'files' => true]) !!}

                        @include ('Testx.testx.form')

                        {!! Form::close() !!}

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
