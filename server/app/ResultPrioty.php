<?php

namespace App;
use App\Mis\PriorityProgram;
use App\Mis\Project;
use Illuminate\Database\Eloquent\Model;

class ResultPrioty extends Model
{
    public function priorityProgram(){
        return $this->belongsTo(PriorityProgram::class,'priorityProgram_id','id');

    }
    public function project(){
        return $this->belongsTo(Project::class,'project_id','id');

    }
}
