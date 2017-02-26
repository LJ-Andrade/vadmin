<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 
use Auth;
use Image;
use File;

class UsersController extends Controller
{

    // ----------- List --------------- //
    public function ajax_list()
    {
        $users = User::orderBy('id', 'ASC')->paginate(12);
        return view('vadmin/users/list')->with('users', $users);
    }

    // ---------- Store --------------- //
    public function store(Request $request)
    {
        
       $this->validate($request,[
            'name'              => 'min:4|max:20|required',
            'email'             => 'min:3|max:250|required|unique:users,email',
            'password'          => 'min:4|max:120|required|',
            'type'              => 'required'
        ],[
            'name.required'     => 'Debe ingresar un nombre',
            'name.min'          => 'El nombre debe tener 4 caracteres como mínimo',
            'name.max'          => 'El nombre debe tener 20 caracteres como máximo',
            'email.required'    => 'Debe ingresar un email',
            'email.unique'      => 'El email pertenece a otro usuario registrado',
            'email.min'         => 'El E-Mail debe tener 3 caracteres como mínimo',
            'email.max'         => 'El E-Mail debe tener 250 caracteres como máximo',
            'password.required' => 'Se requiere una contraseña',
            'password.min'      => 'La contraseña debe tener 4 caracteres como mínimo',
            'password.max'      => 'La contraseña debe tener 120 caracteres como máximo',
            'type.required'     => 'Debe ingresar un rol'
        ]);

        if ($request->ajax())
        {            
            $result = User::create($request->all());
            if ($result)
            {
                return response()->json(['success'=>'true', 'message'=>'Usuario creado']);
            } else {
                return response()->json(['success'=>'false', 'error'=>'Error']);        
            }
        }
        
    }


}