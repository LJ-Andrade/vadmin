<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 
use Auth;
use Image;
use File;

class UsersController extends Controller
{

    public function index()
    {

        $users = User::orderBy('id', 'ASC')->paginate(10);

        return view('vadmin.users.index')->with('users', $users);

    } 


    // ----------- List --------------- //
    public function ajax_list(Request $request)
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

            // dd($request->all());
            $result = User::create($request->all());
            if ($result)
            {
                return response()->json(['success'=>'true', 'message'=>'Usuario creado']);
            } else {
                return response()->json(['success'=>'false', 'error'=>'Error']);        
            }
        }
        
    }
    
    /////////////////////////////////////////////////
    //             PROFILE                         //
    /////////////////////////////////////////////////


    // ---------- Profile --------------- //
    public function profile()
    {
        return view('vadmin.users.profile', ['user' => Auth::user() ] );
    }


    // ---------- Update Avatar --------------- //
    public function updateAvatar(Request $request)
    {
        if ($request->hasFile('avatar')) {
            $avatar   = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save( public_path('images/users/' . $filename ) );
        
            if (Auth::user()->avatar != "user-gen.jpg") {
                $path = 'images/users/';
                $lastpath= Auth::user()->avatar;
                File::Delete(public_path( $path . $lastpath) );
            }
            
            $user = Auth::user();
            $user->avatar = $filename;
            $user->save();

            return view('vadmin.users.profile', array('user' => Auth::user() ) );
        }
    }

    
    /////////////////////////////////////////////////
    //                     DELETE                  //
    /////////////////////////////////////////////////

    public function destroy($id)
    {

        $user = User::find($id);
        $path = 'images/users/';
        if($user->avatar == 'user-gen.jpg'){
        } else {
            File::Delete(public_path( $path . $user->avatar));
        }

        $user->delete();

        echo 1;
        // return redirect()->route('users.index')->with('message', $user->name.' ha sido eliminado');
    }

    // ---------- Ajax Bach Delete -------------- //
    public function ajax_batch_delete(Request $request, $id)
    {
        // $ids = $request->id;

        foreach ($request->id as $id) {
        
            $user  = User::find($id);
            $path  = 'images/users/';
            if($user->avatar == 'user-gen.jpg'){
            } else {
                File::Delete(public_path( $path . $user->avatar));
            }
            User::destroy($id);
        }
        echo 1;
    }

    /////////////////////////////////////////////////
    //                   SEARCH                    //
    /////////////////////////////////////////////////

    public function search($name)
    {
        // $user   = User::SearchUser($name)->first();

        // return view('users.index')->with('articles', $articles);
        dd($name);
    }


} // End