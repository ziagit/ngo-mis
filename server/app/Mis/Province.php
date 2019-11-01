<?php

namespace App\Mis;
use DB;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public function district()
    {
        return $this->hasMany(District::class,"ProvinceId","Id");
    }


    public function showProvince(){
        
    }
    public function addProvince(){
        DB::table('provinces')->insert($data);
    }
    public function deleteProvince($id){
        DB::table('provinces')->where('id',$id)->delete();
    }
}
