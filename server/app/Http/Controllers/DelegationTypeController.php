<?php

namespace App\Http\Controllers;

use App\Mis\DelegationType;
use Illuminate\Http\Request;

class DelegationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $delegationType = DelegationType::all();
        return response()->json($delegationType);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $addDelegation = new DelegationType();
        $addDelegation->delegationType = $request->input('delegationType');
        $addDelegation->save();
        return response()->json('inserted successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\DelegationType  $delegationType
     * @return \Illuminate\Http\Response
     */
    public function show(DelegationType $delegationType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\DelegationType  $delegationType
     * @return \Illuminate\Http\Response
     */
    public function edit(DelegationType $delegationType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\DelegationType  $delegationType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $delegationType)
    {
        $updateDElType = DelegationType::find($delegationType);
        $updateDElType->delegationType = $request->delegationType;
        $updateDElType->save();
        return response()->json('successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\DelegationType  $delegationType
     * @return \Illuminate\Http\Response
     */
    public function destroy($delegationType)
    {
       $deletDlgType = DelegationType::find($delegationType);
       $deletedDLgType = $deletDlgType->delete();
       return response()->json('successfully deleted' . $deletedDLgType);
    }
}
