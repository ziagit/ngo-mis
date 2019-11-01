<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Markmonitor extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class, "project_id","id");
    }

    public function monitor()
    {
        return $this->belongsTo(Monitor::class, "monitor_id","id");
    }
}
