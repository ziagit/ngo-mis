<?php

namespace App;

use App\Mis\Project;
use Illuminate\Database\Eloquent\Model;

class GovDirectorate extends Model
{
    public function projects(){
        return $this->belongsToMany(Project::class);
    }
}
