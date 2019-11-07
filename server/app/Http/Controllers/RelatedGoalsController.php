<?php

namespace App\Http\Controllers;

use App\Mis\RelatedGoals;
use Illuminate\Http\Request;

class RelatedGoalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $related = RelatedGoals::all();
        return response()->json($related);
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
        $related = new RelatedGoals();
        $related->relatedGoalsdesc = $request->relatedGoalsdesc;
        $related->save();
        return response()->json($related);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\RelatedGoals  $relatedGoals
     * @return \Illuminate\Http\Response
     */
    public function show(RelatedGoals $relatedGoals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\RelatedGoals  $relatedGoals
     * @return \Illuminate\Http\Response
     */
    public function edit(RelatedGoals $relatedGoals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\RelatedGoals  $relatedGoals
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$relatedGoals)
    {
        $related = RelatedGoals::find($relatedGoals);
        $related->relatedGoalsdesc = $request->relatedGoalsdesc;
        
        $related->save();
        return response()->json("Updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\RelatedGoals  $relatedGoals
     * @return \Illuminate\Http\Response
     */
    public function destroy($relatedGoals)
    {
        $redlated = RelatedGoals::find($relatedGoals);
        $myid = $redlated->delete();
        return response()->json($myid);
    }
}
