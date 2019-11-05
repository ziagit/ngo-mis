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
        $employees = Employee::all("id","name","fatherName","TIN","job","education","gender","salary","country");
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
        $employee = new Employee;
        $employee->name=$request->name; 
        $employee->fatherName=$request->fatherName; 
        $employee->TIN=$request->TIN;
        $employee->job=$request->job; 
        $employee->education=$request->education;
        $employee->contractEndDate=$request->contractEndDate;
        $employee->contractStartDate=$request->contractStartDate;
        $employee->country=$request->country;
        $employee->specialty = $request->specialty;
        $employee->employeeType_id=$request->employeeType_id;
        $employee->gender=$request->gender;
        $employee->identity=$request->identity;
        $employee->organization_id=$request->organization_id;
        $employee->photo = $request->photo;
        $employee->province_id = $request->province_id;
        $employee->remarks =$request->remarks;
        $employee->salary = $request->salary;
        $employee->save();
        return response()->json("Successfully inserted");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::find($id)->with('organization')->first();
        
        return response()->json($employee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $employee = Employee::find($id);
        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $employee = Employee::find($id);
        $employee->name=$request->name; 
        $employee->fatherName=$request->fatherName; 
        $employee->TIN=$request->TIN;
        $employee->job=$request->job; 
        $employee->education=$request->education;
        $employee->contractEndDate=$request->contractEndDate;
        $employee->contractStartDate=$request->contractStartDate;
        $employee->country=$request->country;
        $employee->specialty = $request->specialty;
        $employee->employeeType_id=$request->employeeType_id;
        $employee->gender=$request->gender;
        $employee->identity=$request->identity;
        $employee->organization_id=$request->organization_id;
        $employee->photo = $request->photo;
        $employee->province_id = $request->province_id;
        $employee->remarks =$request->remarks;
        $employee->salary = $request->salary;
        $employee->save();
        return response()->json("Successfully update");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);
        $employee->delete();
        return response()->json("successfully deleted");
    }
    // Funtion for show table thats have ralation with employee
    public function employeerelation(){
        $province = Province::all();
        $employeetype = EmployeeType::all();
        $organization = Organization::all();
        $arr = [$province,$employeetype,$organization];
        return response()->json($arr);
    }
}
