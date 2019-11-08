<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Donner extends Model
{
    public function organizaions(){
        return $this->belongsToMany(Organization::class);

        
    }
}
