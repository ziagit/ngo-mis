<?php

namespace App\Http\Controllers;

use App\AboutUs;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $abouts = AboutUs::all();
         return response()->json($abouts);
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
        $abouts = new AboutUs;
        $abouts->titleDa = $request->titleDa;
        $abouts->titleEn = $request->titleEn;
        $abouts->titlePa = $request->titlePa;
        $abouts->descriptionDa = $request->descriptionDa;
        $abouts->descriptionEn = $request->descriptionEn;
        $abouts->descriptionPa = $request->descriptionPa;
        $abouts->save();
        return response()->json(["scucess fully saved "],200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AboutUs  $aboutUs
     * @return \Illuminate\Http\Response
     */
    public function show(AboutUs $aboutUs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AboutUs  $aboutUs
     * @return \Illuminate\Http\Response
     */
    public function edit(AboutUs $aboutUs)
    {
        $about = AboutUs::find($aboutUs);
         return response()->json(["show edit page succesfuly "],$about);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AboutUs  $aboutUs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $aboutUs)
    {
        $about = AboutUs::find($aboutUs);
        $abouts->titleDa = $request->titleDa;
        $abouts->titleEn = $request->titleEn;
        $abouts->titlePa = $request->titlePa;
        $abouts->descriptionDa = $request->descriptionDa;
        $abouts->descriptionEn = $request->descriptionEn;
        $abouts->descriptionPa = $request->descriptionPa;
        $abouts->save();
        return response()->json("scucess updated ");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AboutUs  $aboutUs
     * @return \Illuminate\Http\Response
     */
    public function destroy($aboutUs)
    {
        $about = AboutUs::find($aboutUs);
        $about->delete();
        return response()->json("about deleted");
    }
}
