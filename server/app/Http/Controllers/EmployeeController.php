<?php

namespace App\Http\Controllers;

use App\Mis\Employee;
use Illuminate\Http\Request;
use App\Mis\Province,App\Mis\EmployeeType,App\Mis\Organization;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all("id","name","fatherName","TIN","education","gender","salary","country");
        return response()->json($employees);
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
        $input = $request->all();
        Employee::create($input);
        return response()->json("successfully inserted");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
    // Funtion for show table thats have ralation with employee
    public function employeerelation(){
        $province = Province::all();
        $employeetype = Employee::all();
        $organization = Organization::all();
        $arr = [$province,$employeetype,$organization];
        return response()->json($arr);
    }
}
