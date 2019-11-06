<?php

use Illuminate\Http\Request;

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


Route::resource("projects","ProjectController");

Route::resource("organizations","OrganizationController");
Route::resource("orgassociations","OrgassociationController");
Route::resource("equipments","EqiupmentController");
Route::resource("vehicles","VehicleController");
Route::resource("employees","EmployeeController");
Route::resource("plans","PlanController");
Route::resource("delegations","DelegationController");
Route::resource("keyspersonnels","KeyspersonnelController");
Route::resource("orgevaluations","OrgevaluationController");
Route::resource("donners","DonnerController");
Route::resource("projectDocLists","ProjectDocListController");
Route::resource("markmonitors","MarkmonitorController");
Route::resource("banks","BankController");
Route::resource("inactivies","InactivityController");
Route::resource('provinces','ProvinceController');
Route::resource("projects","ProjectController");
Route::resource('budjet-types','BudjetTypeController');
Route::resource('bankaccounts', "BankController");
Route::get("listrelationproject","ProjectController@listrelationp");


/*
 Website route
 */

Route::resource('aboutuses', "AboutusesController");
Route::resource('news', "NewsController");
Route::resource('slideshows', "SlideshowsController");
Route::resource('galleries', "GalleriesController");
Route::resource('videos', "VideosController");
Route::resource('organizationlaws', "organizationlawsController");
Route::resource('jobs', "JobsController");
Route::resource('contact_us', "Contact_usController");
Route::resource('phones', "PhonesController");
Route::resource('guidesfor_org_regs', "Guidesfor_org_regsController");
Route::resource('reasonforregs', "ReasonforregsController");
Route::resource('bio_graphies', "Bio_graphiesController");
Route::resource('newstypes', "NewstypesController");
Route::resource('bankaccounts', "BankController");

Route::get("listrelationproject","ProjectController@listrelationproject");

Route::get("get-bank-lookups", "BankController@getBankLookups");
Route::resource('bankaccounts', "BankController");
Route::resource('orgtypes', 'OrgTypeController');
Route::resource('equiptypes', 'EquipTypeController');
Route::resource('delegationTypes', 'DelegationTypeController');
Route::resource('employeeTypes', 'EmployeeTypeController');
Route::resource('budjetTypes', 'BudjetTypeController');

Route::get("listrelationproject","ProjectController@listrelationproject");
Route::get("getorganizationList","organizations@getorganizationList");

Route::get("employeerelation","EmployeeController@employeerelation");



