<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Sector extends Model
{
    public function organizaions(){
        return $this->belongsToMany(Organization::class);

        
    }

    public function project(){
        return $this->hasMany(Project::class,"sector_id","id");

        
    }
}
