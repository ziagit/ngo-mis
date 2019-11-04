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

    protected $filable = ['provinceName','provinceCode'];
}
