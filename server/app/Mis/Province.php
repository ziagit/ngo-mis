<?php

namespace App\Mis;

use App\ProjectEmployee;
use DB;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public function district()
    {
        return $this->hasMany(District::class,"ProvinceId","Id");
    }
    protected $filable = ['provinceName','provinceCode'];

    public function organization()
    {
        return $this->belongsToMany(Organization::class,"province_id","Id");
    }

    public function orgemployee()
    {
        return $this->hasMany(Orgemployee::class,"province_id","Id");
    }

    public function project()
    {
        return $this->belongsToMany(Project::class,"province_id","Id");
    }

    public function delegation()
    {
        return $this->hasMany(Delegation::class,"province_id","Id");
    }
    public function showProvince(){
        
    }
    public function addProvince(){
        DB::table('provinces')->insert($data);
    }
    public function deleteProvince($id){
        DB::table('provinces')->where('id',$id)->delete();
    }
    public function projectEmployees(){
        return $this->hasMany(ProjectEmployee::class,"project_id","id");
    }
}
