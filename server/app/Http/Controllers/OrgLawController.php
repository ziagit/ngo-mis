<?php

namespace App\Http\Controllers;

use App\OrgLaw;
use Illuminate\Http\Request;

class OrgLawController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $orglaw = new OrgLaw;
        $orglaw->titleDa = $request->titleDa;
        $orglaw->titleEn = $request->titleEn;
        $orglaw->titlePa = $request->titlePa;
        $orglaw->descriptionDa = $request->descriptionDa;
        $orglaw->descriptionEa = $request->descriptionEn;
        $orglaw->descriptionPa = $request->descriptionPa;
        $orglaw->pdfLink = $request->pdfLink;
        $orglaw->save();
        return response()->json(["orgLaw successfly inserted "],200 );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OrgLaw  $orgLaw
     * @return \Illuminate\Http\Response
     */
    public function show(OrgLaw $orgLaw)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OrgLaw  $orgLaw
     * @return \Illuminate\Http\Response
     */
    public function edit(OrgLaw $orgLaw)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OrgLaw  $orgLaw
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrgLaw $orgLaw)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OrgLaw  $orgLaw
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrgLaw $orgLaw)
    {
        //
    }
}
