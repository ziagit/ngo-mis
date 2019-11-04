<?php

use Illuminate\Http\Request;
use App\Mis\Province;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('provinces', 'ProvinceController');
Route::resource('districts','DistrictController');
Route::resource('sectors','SectorController');
Route::resource('relatedgoals','RelatedGoalsController');
Route::resource('relatedtargets','RelatedTargetController');


Route::resource("projects","ProjectController");
