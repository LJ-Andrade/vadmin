<div id="NewFormContainer" class="form-div container animated fadeIn Hidden">
	<div class="row">
    {!! Form::open(['id'=>'NewForm', 'data-parsley-validate' => '']) !!}
        <div class="col-md-12 title">
            <span><i class="ion-plus-round"></i> Creación de Nueva Categoría</span>
        </div>
        <div class="thin-wrapper" style="max-width:500px"> 
            <div class="form-group col-md-12">
                {!! Form::label('name', 'Nombre:') !!}
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el nombre de la categoría', 'required' => '', 'maxlength' => '120', 'minlength' => '4']) !!}
            </div>
            <div class="FormError"></div>
            <div class="col-md-12 actions">
                {!! Form::submit('Crear Usuario', ['id' => 'NewBtn', 'class' => 'animated fadeIn button buttonOk pull-right']) !!}
                <button class="CloseFormBtn animated fadeIn button buttonCancel pull-right">Cerrar</button>
            </div>
        </div>
    {!! Form::close() !!}
	</div>
</div>


<div id="EditFormContainer" class="form-div container animated fadeIn Hidden">
	<div class="row">
    {!! Form::open(['id'=>'EditForm', 'data-parsley-validate' => '']) !!}
        <div class="col-md-12 title">
            <span><i class="ion-edit"></i> Editando categoría: </span><b><span id="EditTitle"></span></b>
        </div>
        <div class="thin-wrapper" style="max-width:500px"> 
            <div class="form-group col-md-12">
                <div class="col-md-6">
                    {!! Form::text('id', null, ['id' => 'EditId', 'class' => 'Hidden']) !!}
                    {!! Form::label('name', 'Nombre:') !!}
                    {!! Form::text('name', null, ['id' => 'EditName', 'class' => 'form-control', 'placeholder' => 'Nombre de la categoría', 'required' => '', 'maxlength' => '120', 'minlength' => '4']) !!}
                </div>
            </div>
            <div class="FormError"></div>
            <div class="col-md-12 actions">
                {!! Form::submit('Editar Categoría', ['id' => 'EditBtn', 'class' => 'animated fadeIn button buttonOk pull-right']) !!}
                <button class="CloseFormBtn animated fadeIn button buttonCancel pull-right">Cerrar</button>
            </div>
        </div>
    {!! Form::close() !!}
	</div>
</div>
