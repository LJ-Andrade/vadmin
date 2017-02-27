<div class="row header-options">
    <button type="button" class="animated fadeIn button buttonOther" data-toggle="modal" data-target="#New">Nuevo Usuario</button>
    <button class="OpenFilters button buttonOther pull-right"><i class="ion-ios-search"></i></button>
    @if(isset($_GET['name']))
    <a href="{{ route('users.index') }}"><button class="button buttonOther pull-right">Todos</button></a>
    @else
    @endif
    <div class="filter-desk">
        {{-- Search --}}
        {!! Form::open(['route' => 'users.index', 'method' => 'GET', 'class' => 'navbar-form']) !!}
            <div class="input-group">
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Buscar usuario...', 'aria-describedby' => 'search']) !!}
                <span class="input-group-addon" id="search">
                    <span class="ion-ios-search" aria-hidden="true"></span>
                </span>
            </div>
        <button class="btnSm buttonOther"><i class="ion-ios-search"></i></button>
        {!! Form::close() !!}
        {{-- /Search --}}
        <div class="btnClose"><i class="ion-close-round"></i></div>		
    </div>
</div>