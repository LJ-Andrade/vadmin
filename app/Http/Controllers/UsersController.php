<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 
use Auth;
use Image;
use File;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Trae toda la data de users
        // $users = User::all();
        // dd($users);
        $users = User::orderBy('id', 'ASC')->paginate(10);

        return view('vadmin.users.index')->with('users', $users);

    }   

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // dd('create');
        return view('vadmin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    // UserRequest Valida el formulario en el backend (No se está usando)
    // public function store(Request $request)
    // {

    //    $this->validate($request,[
    //         'name'              => 'min:4|max:20|required',
    //         'email'             => 'min:3|max:250|required|unique:users,email',
    //         'password'          => 'min:4|max:120|required|',
    //     ],[
    //         'name.required'     => 'Debe ingresar un nombre',
    //         'name.min'          => 'El nombre debe tener 4 caracteres como mínimo',
    //         'name.max'          => 'El nombre debe tener 20 caracteres como máximo',
    //         'email.required'    => 'Debe ingresar un email',
    //         'email.unique'      => 'El email pertenece a otro usuario registrado',
    //         'email.min'         => 'El E-Mail debe tener 3 caracteres como mínimo',
    //         'email.max'         => 'El E-Mail debe tener 250 caracteres como máximo',
    //         'password.required' => 'Se requiere una contraseña',
    //         'password.min'      => 'La contraseña debe tener 4 caracteres como mínimo',
    //         'password.max'      => 'La contraseña debe tener 120 caracteres como máximo',
    //     ]);


    //     $user = new User($request->all());
    //     $user->password = bcrypt($request->password);
    //     $user->save();
    //     return redirect()->route('users.index')->with('message','Usuario Creado');
        
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        return view('vadmin.users.edit')->with('user', $user);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $this->validate($request,[

            'email'     => "min:4|max:250|required|unique:users,email,$id",

        ],[
            'email.unique'  => 'El email pertenece a otro usuario registrado',
        ]);

        $user = User::find($id);
        $user->fill($request->all());

        // O se puede hacer individualmente
        // $user->name  = $request->name;
        // $user->email = $request->email;
        // $user->type  = $request->type;
        
        $user->save();

        return redirect()->route('users.index')->with('message', $user->name.' ha sido actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return redirect()->route('users.index')->with('message', $user->name.' ha sido eliminado');
    }


    public function profile()
    {
        return view('vadmin.users.profile', ['user' => Auth::user() ] );
    }

    public function updateAvatar(Request $request)
    {
        if ($request->hasFile('avatar')) {
            $avatar   = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save( public_path('/webimages/users/' . $filename ) );
        
            if (Auth::user()->avatar != "user-gen.jpg") {
                $path = 'webimages/users/';
                $lastpath= Auth::user()->avatar;
                File::Delete(public_path( $path . $lastpath) );
            }
            
            $user = Auth::user();
            $user->avatar = $filename;
            $user->save();

            return view('vadmin.users.profile', array('user' => Auth::user() ) );
        }
    }
        
    ////////////////////////////////////////
    //                                    //
    //               AJAX                 //
    //                                    //
    ////////////////////////////////////////

    // ---------- List -------------- //
    public function ajax_list()
    {
        //  $users = User::orderBy('id', 'ASC')->paginate(10);

        // return view('vadmin.users.index')->with('users', $users);

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
        ]);


        // $user = new User($request->all());
        // $user->password = bcrypt($request->password);
        // $user->save();
        // return redirect()->route('users.index')->with('message','Usuario Creado');

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
