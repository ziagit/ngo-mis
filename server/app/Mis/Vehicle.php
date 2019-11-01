<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    public function project(){
        return $this->belongsTo(Project::class,"project_id","id");
    }
}
