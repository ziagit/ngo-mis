<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Donner extends Model
{
    public function organizaion(){
        return $this->belongsToMany(Organization::class,"donner_id","id");

        
    }
}
