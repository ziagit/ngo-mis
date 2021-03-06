<?php

namespace App\Http\Controllers;

use App\Mis\Project;
use Illuminate\Http\Request;
use App\Mis\BudjetType,App\Mis\Province,App\Mis\District,App\Mis\Sector,App\Mis\Organization;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
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
        $project = new Project;
        $project->projectCode = $request->projectCode;
        $project->projectName = $request->projectName;
        $project->projectPrice = $request->projectPrice;
        $project->budjet_id   = $request->budjet_id;
        $project->govDirectorate=$request->govDirectorate;
        $project->province_id  = $request->province_id;
        $project->district_id  = $request->district_id;
        $project->projectStartDate = $request->projectStartDate;
        $project->projectEndDate = $request->projectEndDate;
        $project->projectStatus = $request->projectStatus;
        $project->sector_id     = $request->sector_id;
        $project->organization_id = $request->organization_id;
        if($project->save()){
            return response()->json("success");
        }

        
       

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $project = Project::find($id);
        $project->projectCode = $request->projectCode;
        $project->projectName = $request->projectName;
        $project->projectPrice = $request->projectPrice;
        $project->budjet_id   = $request->budjet_id;
        $project->govDirectorate=$request->govDirectorate;
        $project->province_id  = $request->province_id;
        $project->district_id  = $request->district_id;
        $project->projectStartDate = $request->projectStartDate;
        $project->projectEndDate = $request->projectEndDate;
        $project->projectStatus = $request->projectStatus;
        $project->sector_id     = $request->sector_id;
        $project->organization_id = $request->organization_id;
        if($project->save()){
            return response()->json("success");
        }
    }

    /**
     * Remove the specified resource from storage.
     *pro
     * @param  \App\Mis\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if($project->delete()){
            return response()->json("success");
        }
    }
    public function listrelationproject(){
        $budjets = BudjetType::all();
        $provinces = Province::all();
        $districts = District::all();
        $sectors = Sector::all();
        $organizations = Organization::all();
        $arr = [$budjets,$provinces,$districts,$sectors,$organizations];
        return response()->json($arr);

    }
}
