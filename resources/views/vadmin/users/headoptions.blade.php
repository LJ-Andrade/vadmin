<div class="row header-options">
    <button type="button" class="ShowNewBtn animated fadeIn button buttonOther">Nuevo Usuario</button>
    <button type="button" class="ShowListBtn animated fadeIn button buttonOther Hidden">Listado</button>
    <button class="OpenFilters btnSquare buttonOther pull-right"><i class="ion-ios-search"></i></button>
    <div class="Search-Filters search-filters">
        {{-- Search --}}
        <h4 class="hide-desk">Buscador</h4>
        {!! Form::open(['id' => 'SearchForm', 'class' => 'navbar-form']) !!}
            {!! Form::text('query', null, ['id' => 'SearchInput', 'class' => 'form-control', 'placeholder' => 'Buscar...', 'aria-describedby' => 'search']) !!}
            <div class="input-group">
                {!! Form::select('type', ['*' => 'Todos', 'user' => 'Usuario','admin' => 'Admin', 'superadmin' => 'SuperAdmin'], null, ['id' => 'SearchRole', 'class' => 'form-control', 'placeholder' => 'Rol']) !!}
                <span class="input-group-addon" id="search">
                    <span class="ion-ios-search" aria-hidden="true"></span>
                </span>
            </div>
        {!! Form::close() !!}
        {{-- /Search --}}
        <div class="btnClose"><i class="ion-close-round"></i></div>		
    </div>



</div>