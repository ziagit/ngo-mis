<?php

namespace App\Http\Controllers;

use App\Mis\EquipType;
use Illuminate\Http\Request;

class EquipTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $equiptype = EquipType::all();
        return response()->json($equiptype);
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
        $equiptType = new EquipType();
        $equipType->equipType= $request->equipType;
        $equipType->save();
        return response()->json('successfully inseted');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\EquipType  $equipType
     * @return \Illuminate\Http\Response
     */
    public function show(EquipType $equipType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\EquipType  $equipType
     * @return \Illuminate\Http\Response
     */
    public function edit(EquipType $equipType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\EquipType  $equipType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EquipType $equipType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\EquipType  $equipType
     * @return \Illuminate\Http\Response
     */
    public function destroy($equipType)
    {
       $deleteEquipType = EquipType::find($equipType);
        $deletedEquipType = $deleteEquipType->delete();
        return response()->json($deletedEquipType);
       
    }
}
