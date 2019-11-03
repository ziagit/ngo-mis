<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public function province()
    {
        return $this->belongsTo(Province::class,"ProvinceId","Id");
    }

    public function organization()
    {
        return $this->belongsToMany(Organization::class,"province_id","Id");
    }

    public function project()
    {
        return $this->belongsToMany(Project::class,"district_id","Id");
    }
}
