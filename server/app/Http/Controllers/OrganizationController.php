<?php

namespace App\Http\Controllers;

use App\Mis\Organization,App\Mis\Province,App\Mis\District,App\Mis\Orgassociation,App\Mis\Employee
    ,App\Mis\OrgType,App\Mis\Sector,App\Mis\Donner,App\Mis\Project,App\Mis\Delegation,
    App\Mis\Keyspersonnel,App\Mis\Orgevaluation,App\Mis\Bank;

use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Organization::all();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show(Organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organization $organization)
    {
        //
    }

    public function organizationList() {

        $orgtype =OrgType::all();
        $sector =Sector::all();
        $district = District::all();
        $province =Province::all();
        $orgassciation =Orgassociation::all();
        $donner =Donner::all();
        $project =Project::all();
        $delegation =Delegation::all();
        $orgevaluation =Orgevaluation::all();
        $keyspersonnel =Keyspersonnel::all();
        $employee =Employee::all();
        $bank =Bank::all();
        
        $array = [$orgtype,$sector,$district,$province,$orgassciation,$donner,$project,
                    $delegation,$orgevaluation,$keyspersonnel,$employee,$bank];
                    
        return response()->json($array);
    }
}
