<?php

namespace App;

use App\Mis\Project;
use Illuminate\Database\Eloquent\Model;

class PriorityProgram extends Model
{
    public function project(){
        return $this->belongsToMany(Project::class);
    }
}
