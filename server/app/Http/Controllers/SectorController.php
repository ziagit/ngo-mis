<?php

namespace App\Http\Controllers;

use App\Mis\Sector;
use Illuminate\Http\Request;

class SectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sec = Sector::all();
        return response()->json($sec);
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
        $sect = new Sector;
        $sect->sectorName = $request->sectorName;
        $sect->proirity = $request->proirity;
        $sect->save();
        return response()->json('my data inserted' . $sect);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function show(Sector $sector)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function edit(Sector $sector)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$sector)
    {
        $sec = Sector::find($sector);
        $sec->sectorName = $request->sectorName;
        $sec->proirity = $request->proirity;
        
        $sec->save();
        return response()->json("Updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Sector  $sector
     * @return \Illuminate\Http\Response
     */
    public function destroy($sector)
    {
        $myId = Sector::find($sector);
        $deleteId = $myId->delete();
        return response()->json($deleteId);
    }
}
