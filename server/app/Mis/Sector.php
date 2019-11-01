<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    public function organizaion(){
        return $this->belongsToMany(Organization::class,"sector_id","id");

        
    }

    public function project(){
        return $this->hasMany(Project::class,"sector_id","id");

        
    }
}
