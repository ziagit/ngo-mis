<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public function district()
    {
        return $this->hasMany(District::class,"ProvinceId","Id");
    }

    public function organization()
    {
        return $this->belongsToMany(Organization::class,"province_id","Id");
    }

    public function employee()
    {
        return $this->hasMany(Employee::class,"province_id","Id");
    }

    public function project()
    {
        return $this->belongsToMany(Project::class,"province_id","Id");
    }

    public function delegation()
    {
        return $this->hasMany(Delegation::class,"province_id","Id");
    }
}
