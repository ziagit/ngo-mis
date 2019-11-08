<?php

namespace App\Http\Controllers;

use App\Mis\OrgType;
use Illuminate\Http\Request;

class OrgTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organization = OrgType::all();
        return response()->json($organization);
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
        $addOrgtype = new OrgType();
        $addOrgtype->orgType = $request->input('orgType');
        $addOrgtype->save();
        return response()->json('successfull inserted');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\OrgType  $orgType
     * @return \Illuminate\Http\Response
     */
    public function show(OrgType $orgType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\OrgType  $orgType
     * @return \Illuminate\Http\Response
     */
    public function edit(OrgType $orgType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\OrgType  $orgType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $orgType)
    {
        $orgType = OrgType::find($orgType);
        $orgType->orgType = $request->input('orgType');
        $orgType->save();
        return response()->json('successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\OrgType  $orgType
     * @return \Illuminate\Http\Response
     */
    public function destroy($orgType)
    {
        $orgType = Orgtype::find($orgType);
        $result = $orgType->delete();
        return response()->json('successfully deleted', + $result);

    }
}
