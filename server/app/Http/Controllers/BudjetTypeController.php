<?php

namespace App\Http\Controllers;

use App\Mis\BudjetType;
use Illuminate\Http\Request;

class BudjetTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $budjetType = BudjetType::all();
        return response()->json($budjetType);
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
        
        $budjetType = new BudjetType();
        $budjetType->type = $request->input('type');
         $budjetType->save();
         return response()->json('successfully inserted');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\BudjetType  $budjetType
     * @return \Illuminate\Http\Response
     */
    public function show(BudjetType $budjetType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\BudjetType  $budjetType
     * @return \Illuminate\Http\Response
     */
    public function edit(BudjetType $budjetType)
    {
        $editBudjet = BudjetType::find($budjetType);
        return response()->json($editBudjet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\BudjetType  $budjetType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BudjetType $budjetType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\BudjetType  $budjetType
     * @return \Illuminate\Http\Response
     */
    public function destroy($budjetType)
    {
        $deleteBudjetType = BudjetType::find($budjetType);
        $deletedBjType = $deleteBudjetType->delete();
        return response()->json($deletedBjType);
    }
}
