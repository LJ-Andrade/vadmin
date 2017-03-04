<?php

namespace App\Http\Controllers\Testx;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Testx;
use Illuminate\Http\Request;
use Session;

class TestxController extends Controller
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
            $testx = Testx::where('nombre', 'LIKE', "%$keyword%")
				
                ->paginate($perPage);
        } else {
            $testx = Testx::paginate($perPage);
        }

        return view('Testx.testx.index', compact('testx'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('Testx.testx.create');
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
        
        Testx::create($requestData);

        Session::flash('flash_message', 'Testx added!');

        return redirect('Testx/testx');
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
        $testx = Testx::findOrFail($id);

        return view('Testx.testx.show', compact('testx'));
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
        $testx = Testx::findOrFail($id);

        return view('Testx.testx.edit', compact('testx'));
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
        
        $testx = Testx::findOrFail($id);
        $testx->update($requestData);

        Session::flash('flash_message', 'Testx updated!');

        return redirect('Testx/testx');
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
        Testx::destroy($id);

        Session::flash('flash_message', 'Testx deleted!');

        return redirect('Testx/testx');
    }
}
