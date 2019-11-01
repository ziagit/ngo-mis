<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class ProjectDocList extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class, "project_id","id");
    }
}
