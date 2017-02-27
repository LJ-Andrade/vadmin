<?php

namespace App\Http\Controllers\Client;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Client;
use Illuminate\Http\Request;
use Session;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 25;

        if (!empty($keyword)) {
            $clients = Client::where('name', 'LIKE', "%$keyword%")
				->orWhere('contact', 'LIKE', "%$keyword%")
				->orWhere('email', 'LIKE', "%$keyword%")
				->orWhere('phone', 'LIKE', "%$keyword%")
				
                ->paginate($perPage);
        } else {
            $clients = Client::paginate($perPage);
        }

        return view('vadmin.clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('vadmin.clients.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        
        $requestData = $request->all();
        
        Client::create($requestData);

        Session::flash('flash_message', 'Client added!');

        return redirect('vadmin/clients');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $client = Client::findOrFail($id);

        return view('vadmin.clients.show', compact('client'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $client = Client::findOrFail($id);

        return view('vadmin.clients.edit', compact('client'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update($id, Request $request)
    {
        
        $requestData = $request->all();
        
        $client = Client::findOrFail($id);
        $client->update($requestData);

        Session::flash('flash_message', 'Client updated!');

        return redirect('vadmin/clients');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        Client::destroy($id);

        Session::flash('flash_message', 'Client deleted!');

        return redirect('vadmin/clients');
    }
}
