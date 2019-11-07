<?php

namespace App\Http\Controllers;

use App\Mis\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prov = Province::all();
        return response()->json($prov);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prove = new Province;
        $prove->provinceName = $request->provinceName;
        $prove->provinceCode = $request->provinceCode;
        $prove->save();
        return response()->json('my data inserted' . $prove);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function show(Province $province)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function edit(Province $province)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$province)
    {
        $foundedProvince = Province::find($province);
        $foundedProvince->provinceName = $request->provinceName;
        $foundedProvince->provinceCode = $request->provinceCode;
        $foundedProvince->save();
        return response()->json("Updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Province  $province
     * @return \Illuminate\Http\Response
     */
    
    public function destroy($province)
    {
        $myId = Province::find($province);
        $deleteId = $myId->delete();
        return response()->json($deleteId);
    }
}
