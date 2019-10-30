<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class RelatedTarget extends Model
{
    public function goal()
    {
        return $this->belongsTo(RelatedGoals::class,"RelatedGoalsId","Id");
    }
}
