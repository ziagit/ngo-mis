<?php

namespace App;

use App\Mis\Project;
use Illuminate\Database\Eloquent\Model;

class StatisticInfo extends Model
{
    public function project(){
        return $this->belongsTo(Project::class,'project-id','id');
    }
}

