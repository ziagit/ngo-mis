<?php

namespace App\Http\Controllers;

use App\Mis\Bank;
use Illuminate\Http\Request;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bank_account= Bank::all();
        return response()->json( $bank_account);
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
        $bank_account = new Bank();

         $bank_account->organization_id = $request->organization_id;
         $bank_account->project_id = $request->project_id;
         $bank_account->keyspersonnel_id= $request->keyspersonnel_id;
         $bank_account->name= $request->name;
         $bank_account->location= $request->location;
         $bank_account->currency= $request->currency;
         $bank_account->save();
         return response()->json("data saved successfully.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mis\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function show(Bank $bank)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mis\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function edit($id) 
    {
       
       $bank=Bank::find($id);
   
       return response()->json($bank);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mis\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bank $bank)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mis\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
      $findId=Bank::find($id);
      $deleteAccont= $findId->delete();
      return response()->json($deleteAccont);

        
    }
}
