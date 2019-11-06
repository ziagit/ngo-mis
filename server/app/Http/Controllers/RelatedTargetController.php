<?php

namespace App\Http\Controllers;

use App\Mis\RelatedTarget;
use Illuminate\Http\Request;

class RelatedTargetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $relatedtarget = RelatedTarget::all();
        return response()->json($relatedtarget);
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
        $relatedtarget = new RelatedTarget();
        $relatedtarget->relatedTargetdesc = $request->relatedTargetdesc;
        $relatedtarget->relatedGoals_id = $request->relatedGoals_id;
        $relatedtarget->save();
        return response()->json($relatedtarget);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\RelatedTarget  $relatedTarget
     * @return \Illuminate\Http\Response
     */
    public function show(RelatedTarget $relatedTarget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\RelatedTarget  $relatedTarget
     * @return \Illuminate\Http\Response
     */
    public function edit(RelatedTarget $relatedTarget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\RelatedTarget  $relatedTarget
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$relatedTarget)
    {
        $relatedtarget = RelatedTarget::find($relatedTarget);
        $relatedtarget->relatedTargetdesc = $request->relatedTargetdesc;
        $relatedtarget->relatedGoals_id = $request->relatedGoals_id;
        $relatedtarget->save();
        return response()->json($relatedtarget);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\RelatedTarget  $relatedTarget
     * @return \Illuminate\Http\Response
     */
    public function destroy($relatedTarget)
    {
        $relatedtarget = RelatedTarget::find($relatedTarget);
        $id = $relatedtarget->delete();
        return response()->json($id);
    }
}
