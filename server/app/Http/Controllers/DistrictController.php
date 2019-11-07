<?php

namespace App\Http\Controllers;

use App\Mis\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dis = District::all();
        return response()->json($dis);
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
        $dis = new District;
        $dis->districtName = $request->districtName;
        $dis->districtCode = $request->districtCode;
        $dis->drovince_id = $request->drovince_id;
        $dis->save();
        return response()->json('my data inserted' . $dis);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\District  $district
     * @return \Illuminate\Http\Response
     */
    public function show(District $district)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\District  $district
     * @return \Illuminate\Http\Response
     */
    public function edit(District $district)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\District  $district
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$district)
    {
        $dis = District::find($district);
        $dis->districtName = $request->districtName;
        $dis->districtCode = $request->districtCode;
        $dis->drovince_id = $request->drovince_id;
        
        $dis->save();
        return response()->json("Updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\District  $district
     * @return \Illuminate\Http\Response
     */
    public function destroy($district)
    {
        $myId = District::find($district);
        $deleteId = $myId->delete();
        return response()->json($deleteId);
    }
}
