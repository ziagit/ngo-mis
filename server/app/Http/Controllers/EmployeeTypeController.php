<?php

namespace App\Http\Controllers;

use App\Mis\EmployeeType;
use Illuminate\Http\Request;

class EmployeeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employeeType = EmployeeType::all();
        return response()->json($employeeType);
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
        $addEmpType = new EmployeeType();
        $addEmpType->employeeType = $request->input('employeeType');
        $addEmpType->save();
        return response()->json('successfully inserted');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\EmployeeType  $employeeType
     * @return \Illuminate\Http\Response
     */
    public function show(EmployeeType $employeeType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\EmployeeType  $employeeType
     * @return \Illuminate\Http\Response
     */
    public function edit(EmployeeType $employeeType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\EmployeeType  $employeeType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $employeeType)
    {
        $updateempType = EmployeeType::find($employeeType);
        $updateempType->employeeType = $request->input('employeeType');
        $updateempType->save();
        return response()->json('successfully updated');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\EmployeeType  $employeeType
     * @return \Illuminate\Http\Response
     */
    public function destroy($employeeType)
    {
        $empType = EmployeeType::find($employeeType);
        $deletedEmp = $empType->delete();
        return response()->json($deletedEmp);
    }
}
