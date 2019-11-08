<?php

namespace App\Http\Controllers;

use App\Mis\Keyspersonnel;
use App\Mis\Organization;
use Illuminate\Http\Request;

class KeyspersonnelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data =Keyspersonnel::all();
        return response()->json($data);   
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
        $data =Keyspersonnel::create($request->all());
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Keyspersonnel  $keyspersonnel
     * @return \Illuminate\Http\Response
     */
    public function show(Keyspersonnel $keyspersonnel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Keyspersonnel  $keyspersonnel
     * @return \Illuminate\Http\Response
     */
    public function edit(Keyspersonnel $keyspersonnel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Keyspersonnel  $keyspersonnel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $keyspersonnel)
    {
        Keyspersonnel::findOrFail($keyspersonnel)->update($request->all());
        return response()->json("succesfult update!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Keyspersonnel  $keyspersonnel
     * @return \Illuminate\Http\Response
     */
    public function destroy( $keyspersonnel)
    {
        $keyspersonnel_id =Keyspersonnel::findOrFail($keyspersonnel);
        if($keyspersonnel_id->delete()) 
        {
            return response()->json("success");
        }
    }



    public function getOrganization() {
        $orgs =Organization::all('id','nameDa','nameEn');
        return response()->json($orgs);
    }
}
